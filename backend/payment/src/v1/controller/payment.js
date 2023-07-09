const Payment = require('../model/payment');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');

//sends an email to the buyers email with payment confirmation
async function sendEmail(to, emailContent) { 

    //get the domain of the email service of the buyer
    const domain = to.split('@')[1];
    let smtpSettings;

    //configure smtp settings according to the buyers email service
    if (domain === 'gmail.com'){
        smtpSettings = {
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'lankaHerbals31@gmail.com',
                pass: 'dwgobkavdgunzren'
            }
        };
    } else if (domain === 'yahoo.com'){
        smtpSettings = {
            host: 'smtp.mail.yahoo.com',
            port: 465,
            secure: true,
            auth:{
                user: 'lankaHerbals31@gmail.com',
                pass: 'dwgobkavdgunzren'
            }
        };
    } else {
        throw new Error(`unsupported email domain: ${domain}`);
    }

    const transporter = nodemailer.createTransport(smtpSettings);

    //sends the email
    const info = await transporter.sendMail({
        from: 'slherbals12@gmail.com',
        to,
        subject: emailContent.subject,
        text: emailContent.text
    });

    console.log(`Email sent to ${to}: ${info.messageId}`);

    return true;

}

//construct the email for the buyer
async function paymentConfirmation(buyerName, creditCard, email){

    const templateFile = path.join(__dirname, '..', 'emails', 'templates', 'paymentSuccess.json');
    const emailContent = JSON.parse(fs.readFileSync(templateFile));

    emailContent.text = emailContent.text.replace('{{name}}',creditCard.cardHolderName); //put the buyer name in the email
    emailContent.text = emailContent.text.replace('{{amount}}',creditCard.amount); // put the payment amount in email

    let emailConf = sendEmail(email, emailContent);

    if(emailConf === true){
        return true;
    }
    else{
        return emailConf;
    }

}

//adding a payment to the databse
exports.addPayment = async (req, res) => {

    const paymentObj = {

        buyerId: req.body.buyerId,
        amount: req.body.amount,
        shippingAddress: req.body.shippingAddress,
        shippingMethod: req.body.shippingMethod,
        creditCard: req.body.creditCard,
        paymentMethod: req.body.paymentMethod,
        buyerEmail: req.body.buyerEmail,
        purchasedItems: req.body.purchasedItems

    }
   
    try{
        const newPayment = new Payment(paymentObj);
        const payment = await newPayment.save();
        if(payment){
            let email = await paymentConfirmation(paymentObj.buyerName, paymentObj.creditCard, paymentObj.buyerEmail);
            //checking if the confirmation email has been sent 
            if(email === true){
                return res.status(201).json("Payment Succesfull");
            }
            else{
                return res.status(500).json(`Cannot send Payment email confirmation: ${email}`);
            }             
        }
    } catch (error){
        return res.status(400).json({ error });
    }

}

//get all the payments in the database
exports.getPayments = async (req, res) => {

    try {
        const payments = await Payment.find({});
        return res.status(200).json({ payments });
    } catch (error) {
        return res.status(400).json({ error });
    }

}

//retrieve a paymnet from paymentId
exports.getPayment = async (req, res) => {

    try{
        let paymentId = req.params.id;
        const payment = await Payment.findById(paymentId);

        if(!payment){
            res.staus(404).json("Payment not found");
        }

        return res.status(200).json({ payment });
    } catch (error){
        return res.status(400).json({ error });
    }
    
}

//delete a paymnt from the database
exports.deletePayment = async (req, res) => {

    try{
        let paymentId = req.params.id;
        await Payment.findByIdAndDelete(paymentId).then(() => {
            return res.status(200).json("Payment Deleted");
        });
     }catch (error){
        return res.status(400).json({ error });
    }

}
const Payment = require('../model/payment');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');

async function sendEmail(to, emailContent) { 

    const domain = to.split('@')[1];
    let smtpSettings;

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

    const info = await transporter.sendMail({
        from: 'slherbals12@gmail.com',
        to,
        subject: emailContent.subject,
        text: emailContent.text
    });

    console.log(`Email sent to ${to}: ${info.messageId}`);

    return true;

}

async function paymentConfirmation(buyerName, creditCard, email){

    const templateFile = path.join(__dirname, '..', 'emails', 'templates', 'paymentSuccess.json');
    const emailContent = JSON.parse(fs.readFileSync(templateFile));

    emailContent.text.replace('{{name}}',buyerName);
    emailContent.text.replace('{{amount}}',creditCard.amount);

    let emailConf = sendEmail(email, emailContent);

    if(emailConf === true){
        return true;
    }
    else{
        return emailConf;
    }

}

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
            let email = paymentConfirmation(paymentObj.buyerName, paymentObj.creditCard, paymentObj.buyerEmail);

            if(email === true){
                return res.status(201).json("Payment Succesfull");
            }
            else{
                return res.status(500).json(`Cannot send Payment email confirmation: ${email}`);
            }              
            return res.status(201).json("Payment Succesfull");
        }
    } catch (error){
        return res.status(400).json({ error });
    }

}

exports.getPayments = async (req, res) => {

    try {
        const payments = await Payment.find({});
        return res.status(200).json({ payments });
    } catch (error) {
        return res.status(400).json({ error });
    }

}

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
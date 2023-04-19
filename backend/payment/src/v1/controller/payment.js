const Payment = require('../model/payment');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');

async function sendEmail(to, emailContent) { 

    const domain = to.split('@')[1];
    let smtpSettings;

    if (domain === 'gmail.com'){
        smtpSettings = {
            host: 'smtp.mail.yahoo.com',
            port: 465,
            secure: true,
            auth: {
                user: 'slherbals12@yahoo.com',
                pass: 'SlherbalsForDsProject12#'
            }
        };
    } else if (domain === 'yahoo.com'){
        smtpSettings = {
            host: 'smtp.mail.yahoo.com',
            port: 465,
            secure: true,
            auth:{
                user: 'slherbals12@yahoo.com',
                pass: 'SlherbalsForDsProject12#'
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

exports.addPayment = async (paymentObj) => {

    try{
        const newPayment = new Payment(paymentObj);
        const payment = await newPayment.save();
        if(payment){
            return payment;

            // let email = paymentConfirmation(paymentObj.buyerName, paymentObj.creditCard, paymentObj.buyerEmail);

            // if(email === true){
            //     return res.status(201).json("Payment Succesfull");
            // }
            // else{
            //     return res.status(500).json(`Cannot send Payment email confirmation: ${email}`);
            // }              
        }
    } catch (error){
        return error;
    }

}

exports.getPayments = async () => {

    try {
        const payments = await Payment.find({});
        return payments;
    } catch (error) {
        return error;
    }

}

exports.getPaymentsByBuyer = async (buyersId) => {

    try{
        const payments = await Payment.find({buyerId: `${buyersId}`});

        if(!payments){
            return 'No payments done by the buyer'
        }

        return payments;
    } catch(error){
        return error;
    }

}

exports.getPayment = async (paymentId) => {

    try{
        const payment = await Payment.findById(paymentId);
        return payment;
    } catch (error){
        return error;
    }
    
}

exports.deletePayment = async (paymentId) => {

    try{
        const payment = await Payment.findByIdAndDelete(paymentId)

        if(!payment) {
            return 'Payment not Found';
        } else{
            return 'Payment deleted';
        }

     }catch (error){
        return error;
    }

}

exports.SubscribeEvents = async (payload) => {

    const { event, data } = payload;

    const { paymentId } = data;

    switch(event){
        case 'GET_PAYMENT':
            this.getPayment(paymentId);
            break;
        case 'TESTING':
            console.log("Working subscriber......")
        default:
            break;
    }

}
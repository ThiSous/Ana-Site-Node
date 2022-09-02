import sgMail from '@sendgrid/mail';
export async function dispararEmail() {
sgMail.setApiKey(process.env.SENDGRID_KEY);
    try {
        const msg = {
            to: process.env.EMAIL_TO,
            from: process.env.EMAIL_TO,
            subject: "teste em site",
            text: "isso é um teste em site",
            html: '<strong>isso é um teste em site</strong>',
        };
        const result = await sgMail.send(msg);
        console.log('Email sent', result);
    }
    catch (error) {
        console.error(error)
    }
}
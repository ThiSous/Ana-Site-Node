import sgMail from '@sendgrid/mail';
export async function dispararEmail() {
sgMail.setApiKey(import.meta.env.VITE_SENDGRID_KEY);
console.log(import.meta.env)
    try {
        const msg = {
            to: import.meta.env.VITE_EMAIL_TO,
            from: import.meta.env.VITE_EMAIL_FROM,
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
import sgMail from '@sendgrid/mail';
import { ENV } from './env';

if (ENV.SENDGRID_API_KEY) {
  sgMail.setApiKey(ENV.SENDGRID_API_KEY);
}

export const sendEmail = async (to: string, subject: string, text: string, html: string) => {
  try {
    if (!ENV.SENDGRID_API_KEY) {
      console.log('📧 Email simulado (SendGrid no configurado):');
      console.log(`Para: ${to}`);
      console.log(`Asunto: ${subject}`);
      console.log(`Contenido: ${text}`);
      return { success: true, simulated: true };
    }

    await sgMail.send({
      to,
      from: ENV.SENDGRID_FROM_EMAIL,
      subject,
      text,
      html,
    });
    
    return { success: true, simulated: false };
  } catch (error: any) {
    console.error('Error enviando email:', error.message);
    return { success: false, error: error.message };
  }
};

import emailjs from '@emailjs/browser';

// Configuração do EmailJS
export const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_newsletter',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_newsletter',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key',
};

// Inicializar EmailJS
if (typeof window !== 'undefined') {
  emailjs.init(emailConfig.publicKey);
}

export { emailjs };
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/email';

// EmailJS configuration
const EMAILJS_SERVICE_ID = EMAIL_CONFIG.SERVICE_ID;
const EMAILJS_TEMPLATE_ID = EMAIL_CONFIG.TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = EMAIL_CONFIG.PUBLIC_KEY;

export interface EmailData {
  to_name: string;
  to_email: string;
  from_name: string;
  design_type: string;
  body_part: string;
  size: string;
  appointment_date: string;
  appointment_time: string;
  notes: string;
  [key: string]: string; // Index signature to satisfy EmailJS Record<string, unknown> requirement
}

// Initialize EmailJS
export const initEmailJS = () => {
  try {
    if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'service_zm2klxz') {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      console.log('EmailJS initialized successfully');
    } else {
      console.warn('EmailJS not initialized: Missing or invalid public key. Please check your environment variables.');
    }
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
  }
};

// Send booking confirmation email
export const sendBookingConfirmation = async (emailData: EmailData): Promise<boolean> => {
  try {
    // Check if EmailJS is properly configured
    if (EMAILJS_SERVICE_ID === 'service_zm2klxz' || 
        EMAILJS_TEMPLATE_ID === 'template_mv5bhni' || 
        EMAILJS_PUBLIC_KEY === '2RTRStL7xKPYzKNMx') {
      console.warn('EmailJS not configured properly. Please set your environment variables.');
      return false;
    }

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      emailData
    );
    
    console.log('Email sent successfully:', response.status, response.text);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Prepare email data from booking form
export const prepareEmailData = (
  bookingData: any,
  selectedDesign: string | null
): EmailData => {
  const designType = selectedDesign === 'custom' ? 'Custom Design' : 'Gallery Design';
  
  return {
    to_name: `${bookingData.firstName} ${bookingData.lastName}`,
    to_email: bookingData.email,
    from_name: 'Ink Studio',
    design_type: designType,
    body_part: bookingData.bodyPart,
    size: bookingData.size || 'To be discussed',
    appointment_date: bookingData.selectedDate?.toLocaleDateString() || '',
    appointment_time: bookingData.timeSlot,
    notes: bookingData.notes || 'None'
  };
};

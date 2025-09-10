// EmailJS Configuration
// To set up EmailJS for your tattoo booking website:

// 1. Create an account at https://www.emailjs.com/
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create an email template with the following variables:
//    - {{to_name}} - Customer's full name
//    - {{to_email}} - Customer's email
//    - {{from_name}} - Your studio name
//    - {{design_type}} - Type of design (Custom/Gallery)
//    - {{body_part}} - Where the tattoo will be placed
//    - {{size}} - Size of the tattoo
//    - {{appointment_date}} - Date of appointment
//    - {{appointment_time}} - Time of appointment
//    - {{phone}} - Customer's phone number
//    - {{address}} - Customer's address
//    - {{notes}} - Additional notes

// 4. Replace the values in /services/emailService.ts with your actual:
//    - SERVICE_ID (from your EmailJS service)
//    - TEMPLATE_ID (from your EmailJS template)
//    - PUBLIC_KEY (from your EmailJS account settings)

// Example EmailJS template:
/*
Subject: Tattoo Appointment Confirmation - {{appointment_date}}

Dear {{to_name}},

Thank you for booking your tattoo appointment with {{from_name}}!

Your appointment details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 Date: {{appointment_date}}
🕐 Time: {{appointment_time}}
🎨 Design: {{design_type}}
📍 Placement: {{body_part}}
📏 Size: {{size}}cm
📧 Contact: {{to_email}}
📞 Phone: {{phone}}
🏠 Address: {{address}}
📝 Notes: {{notes}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Important reminders:
• Please arrive 15 minutes early
• Bring valid ID (18+ required)
• Eat a good meal before your appointment
• Avoid alcohol and blood thinners 24hrs prior
• Wear comfortable clothing that allows access to the tattoo area

If you need to reschedule, please call us at least 24 hours in advance.

We look forward to creating your amazing tattoo!

Best regards,
The Ink Studio Team

📍 123 Tattoo Street, Art District
📞 (555) 123-4567
✉️ hello@inkstudio.com
*/

// Safe environment variable access with fallbacks
const getEnvVar = (key: string, fallback: string = '') => {
  try {
    return import.meta?.env?.[key] || fallback;
  } catch (error) {
    console.warn(`Failed to access environment variable ${key}:`, error);
    return fallback;
  }
};

export const EMAIL_CONFIG = {
  SERVICE_ID: getEnvVar('VITE_EMAILJS_SERVICE_ID', 'service_zm2klxz'),
  TEMPLATE_ID: getEnvVar('VITE_EMAILJS_TEMPLATE_ID', 'template_mv5bhni'),
  PUBLIC_KEY: getEnvVar('VITE_EMAILJS_PUBLIC_KEY', '2RTRStL7xKPYzKNMx'),
};
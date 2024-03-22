// Example usage

const WhatsAppBulkMessaging = require('./whatsapp-bulk-messaging');

const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const fromNumber = 'YOUR_WHATSAPP_NUMBER';

const whatsappMessaging = new WhatsAppBulkMessaging(accountSid, authToken, fromNumber);

const messages = [
  'Hello! This is a bulk message.',
  'How are you doing?',
  'This is an example of bulk WhatsApp messaging.',
];

const toNumbers = ['RECIPIENT_NUMBER_1', 'RECIPIENT_NUMBER_2', /* Add more numbers here */];

whatsappMessaging.sendBulkMessages(messages, toNumbers);

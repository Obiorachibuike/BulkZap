// whatsapp-bulk-messaging.js

const Twilio = require("twilio");

class MailExpress {
  constructor(accountSid, authToken, fromNumber) {
    this.client = new Twilio(accountSid, authToken);
    this.fromNumber = fromNumber;
  }

  async sendBulkMessages(messages, toNumbers) {
    try {
      for (const toNumber of toNumbers) {
        const response = await this.client.messages.create({
          from: `whatsapp:${this.fromNumber}`,
          to: `whatsapp:${toNumber}`,
          body: messages,
        });

        return response;
      }
    } catch (error) {
      console.log(responses);
      return `Error sending messages: ${error.message}`;
    }
  }
}

module.exports = MailExpress;

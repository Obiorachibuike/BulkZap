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
let AccountSID = "AC80e884ef4b1c7bad0c6826069939e87f";
let Authtoken = "78597ad2bb8420cd2c45ca116827431c";
let sender = "+15642346449";

const client = new MailExpress(AccountSID, Authtoken, sender);

let message = "Happy New Day";
let receivers = ["+2348066715587", "+1987654321"];
const reply = client.sendBulkMessages(message, receivers);
console.log(reply);
module.exports = MailExpress;

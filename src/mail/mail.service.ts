import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import { ISendMail } from "./interface/mail";

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async send({ to, subject, message }: ISendMail) {
    await this.mailerService.sendMail({
      to,
      subject,
      template: "./register",
      context: {
        email: to,
        key: message,
      },
    });
  }
}

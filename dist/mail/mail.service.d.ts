import { MailerService } from "@nestjs-modules/mailer";
import { ISendMail } from "./interface/mail";
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    send({ to, subject, message }: ISendMail): Promise<void>;
}

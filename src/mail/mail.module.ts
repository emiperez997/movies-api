import { Module } from "@nestjs/common";
import { MailerModule } from "@nestjs-modules/mailer";
import { resolve } from "path";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";
import { MailService } from "./mail.service";

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.GOOGLE_MAIL_APP_EMAIL,
          pass: process.env.GOOGLE_MAIL_APP_PASSWORD,
        },
      },
      defaults: {
        from: `"Movie API" <emi.perez997@gmail.com>`,
      },
      template: {
        dir: resolve(__dirname, "templates"),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}

require("dotenv").config();

export default () => ({
  port: parseInt(process.env.PORT, 10),
  databaseUrl: process.env.DATABASE_URL,
  googleMailAppEmail: process.env.GOOGLE_MAIL_APP_EMAIL,
  googleMailAppPassword: process.env.GOOGLE_MAIL_APP_PASSWORD,
});

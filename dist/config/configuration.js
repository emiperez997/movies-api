"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
exports.default = () => ({
    port: parseInt(process.env.PORT, 10),
    databaseUrl: process.env.DATABASE_URL,
    googleMailAppEmail: process.env.GOOGLE_MAIL_APP_EMAIL,
    googleMailAppPassword: process.env.GOOGLE_MAIL_APP_PASSWORD,
});
//# sourceMappingURL=configuration.js.map
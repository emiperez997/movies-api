"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const seeder_module_1 = require("./seeders/seeder.module");
const common_1 = require("@nestjs/common");
const seeder_1 = require("./seeders/seeder");
async function bootstrap() {
    core_1.NestFactory.createApplicationContext(seeder_module_1.SeederModule)
        .then((appContext) => {
        const logger = appContext.get(common_1.Logger);
        const seeder = appContext.get(seeder_1.Seeder);
        seeder
            .seed()
            .then(() => {
            logger.debug("Seeding completed");
        })
            .catch((error) => {
            logger.error(error);
        })
            .finally(() => {
            appContext.close();
        });
    })
        .catch((error) => {
        throw error;
    });
}
bootstrap();
//# sourceMappingURL=seed.js.map
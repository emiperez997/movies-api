import { NestFactory } from "@nestjs/core";
import { SeederModule } from "./seeders/seeder.module";
import { Logger } from "@nestjs/common";
import { Seeder } from "./seeders/seeder";

async function bootstrap() {
  NestFactory.createApplicationContext(SeederModule)
    .then((appContext) => {
      const logger = appContext.get(Logger);
      const seeder = appContext.get(Seeder);

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

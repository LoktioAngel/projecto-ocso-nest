import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
<<<<<<< HEAD
      transform: true,
=======
>>>>>>> 840a82138da515e5b222d4fb4442dbe8b9b5a232
    })
  );
  await app.listen(3000);
}
bootstrap();

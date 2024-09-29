import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { EmployeesModule } from "./employees/employees.module";
import { ProductsModule } from "./products/products.module";
import { ConfigModule } from "@nestjs/config";
<<<<<<< HEAD
import { ProvidersModule } from './providers/providers.module';
=======
>>>>>>> 840a82138da515e5b222d4fb4442dbe8b9b5a232

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.host,
      port: +process.env.port,
      username: "postgres",
      password: process.env.pass,
      database: process.env.name,
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    EmployeesModule,
    ProductsModule,
<<<<<<< HEAD
    ProvidersModule,
=======
>>>>>>> 840a82138da515e5b222d4fb4442dbe8b9b5a232
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

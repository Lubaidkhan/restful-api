import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ItemsController } from './items/items.controller';
import { ItemsModule } from './items/items.module';
// import { ItemsService } from './items/items.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import config from './config/keys'

@Module({
  imports: [ItemsModule,AuthModule, UsersModule,MongooseModule.forRoot(config.Mongo_Uri) ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

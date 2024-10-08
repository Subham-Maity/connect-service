import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './logger';
import { ChatModule } from './chat/chat.module';
import { RedisModule } from './redis';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ChatModule, RedisModule,ConfigModule.forRoot({
    isGlobal: true,
    cache: true,
  }),
  AuthModule,
  ],
  providers: [],
  controllers: []
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

import { Logger, MiddlewareConsumer, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { UserModule } from '~/modules/user/user.module'
import { ConfigModule } from '@nestjs/config'
import { DbModule } from '~/modules/database/db.module'
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core'
import { AllExceptionsFilter } from './common/filters/any-exception.filter'
import { ResponseInterceptor } from './common/interceptors/response.interceptor'
import { AuthModule } from './modules/auth/auth.module'
import { LoggerMiddleware } from './common/middlewares/logger.middleware'
import { PostModule } from './modules/post/post.module'
import { CategoryModule } from './modules/category/category.module'
import { NoteModule } from './modules/note/note.module'
import { TopicModule } from './modules/topic/topic.module'
import { RequestContextMiddleware } from './common/middlewares/request-context.middleware'
import { RolesGuard } from './common/guards/roles.guard'
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DbModule.forRoot(),
    DbModule.forFeature(),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 5,
      },
    ]),
    AuthModule,
    UserModule,
    PostModule,
    CategoryModule,
    NoteModule,
    TopicModule,
  ],
  controllers: [AppController],
  providers: [
    Logger,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, RequestContextMiddleware).forRoutes('*')
  }
}

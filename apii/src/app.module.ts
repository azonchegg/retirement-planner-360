import { Module } from '@nestjs/common'
import { CatController } from './app.controller'
import { AppService } from './app.service'
import { TerminusModule } from '@nestjs/terminus'
import { HttpModule } from '@nestjs/axios'
import { HealthController } from './health/health.controller';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [CatController, HealthController],
  providers: [AppService],
})
export class AppModule {}

import { Test, TestingModule } from '@nestjs/testing'
import { HealthController } from './health.controller'
import { TerminusModule } from "@nestjs/terminus"
import { HttpModule } from "@nestjs/axios"

describe('HealthController', () => {
  let controller: HealthController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TerminusModule, HttpModule],
      controllers: [HealthController],
    }).compile();

    controller = module.get<HealthController>(HealthController)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  })
});

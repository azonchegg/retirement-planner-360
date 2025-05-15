import { Test, TestingModule } from '@nestjs/testing';
import { CatController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: CatController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatController],
      providers: [AppService],
    }).compile()

    appController = app.get<CatController>(CatController);
  });

  describe('hello world', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello('645')).toBe('Hello World!')
    })
  })

  describe('post check', () => {
    it('should return "Hello from POST"', () => {
      expect(appController.postMessage()).toBe('Hello from POST')
    })
  })
});

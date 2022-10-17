import { Module } from '@nestjs/common';
import { DiversController } from './divers.controller';

@Module({
  controllers: [DiversController]
})
export class DiversModule {}

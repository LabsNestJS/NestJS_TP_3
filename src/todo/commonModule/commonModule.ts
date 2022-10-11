import { Global, Module } from '@nestjs/common';
import { GenerateIDService } from './commonModule.service';

@Global()
@Module({
    providers: [{
        useValue: GenerateIDService,
        provide: 'uuid'
    }],
})
export class CommonModule {}
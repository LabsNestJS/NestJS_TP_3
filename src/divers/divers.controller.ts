import { Controller, Body, Post } from '@nestjs/common';
import { diversDTO } from './diversDto';
import { FusionPipe } from './fusionPipe';

@Controller('divers')
export class DiversController {
@Post('skills')
addSkill(@Body(FusionPipe) divers:diversDTO):diversDTO{
    return(divers)
}
}
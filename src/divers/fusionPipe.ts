import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { diversDTO } from './diversDto';

@Injectable()
export class FusionPipe implements PipeTransform {
  transform(divers:diversDTO, metadata:ArgumentMetadata) {
    if (metadata.type=='body'){
      if (divers.skills.length!=0){          
        return(divers.skills.map((element)=>element.toUpperCase()).join('-'));
      } 
      else {
        throw BadRequestException;
      }
    }
  }
}
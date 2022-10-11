import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class GenerateIDService {
    generate() {
        return uuid();
    }
}
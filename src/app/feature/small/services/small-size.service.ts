import { Injectable } from '@angular/core';
import { SizeService } from '../../../shared/services/size.service';

@Injectable()
export class SmallSizeService extends SizeService {

  constructor() {
    super();
  }

  size(): string {
    return 'small';
  }
}

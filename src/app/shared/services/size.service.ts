import { Injectable } from '@angular/core';

@Injectable()
export abstract class SizeService {
  abstract size(): string;
}

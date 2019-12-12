import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigSizeComponent } from './big-size.component';
import { SharedModule } from '../../shared/shared.module';
import { SizeService } from '../../shared/services/size.service';
import { BigSizeService } from './services/big-size.service';

@NgModule({
  declarations: [
    BigSizeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    { provide: SizeService, useClass: BigSizeService }
  ],
  exports: [
    BigSizeComponent
  ]
})
export class BigSizeModule {
}

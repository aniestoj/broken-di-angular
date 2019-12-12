import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallSizeComponent } from './small-size.component';
import { SharedModule } from '../../shared/shared.module';
import { SizeService } from '../../shared/services/size.service';
import { SmallSizeService } from './services/small-size.service';

@NgModule({
  declarations: [
    SmallSizeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    {provide: SizeService, useClass: SmallSizeService}
  ],
  exports: [
    SmallSizeComponent
  ]
})
export class SmallSizeModule { }

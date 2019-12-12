import { Component, OnInit } from '@angular/core';
import { SizeService } from './services/size.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  size = '';

  constructor(private sizeService: SizeService) {
  }

  ngOnInit() {
    this.size = this.sizeService.size();
    console.log(this.size);
  }
}

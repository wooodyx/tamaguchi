import { Component, Input } from '@angular/core';
import { TamaWigService } from 'src/app/services/wig.service';
import { TamaComponentBaseClass } from '../../class/component-base.class';
import { WigModel } from '../../models/wigs.model';

@Component({
  selector: 'tama-wig-element',
  templateUrl: './wig-element.component.html',
  styleUrls: ['./wig-element.component.scss']
})
export class TamaWigElementComponent extends TamaComponentBaseClass {
  @Input() wig: WigModel;

  constructor(private wigs: TamaWigService) {
    super();
  }

  openDetail() {
    this.wigs.wigDetail = this.wig;
  }
}

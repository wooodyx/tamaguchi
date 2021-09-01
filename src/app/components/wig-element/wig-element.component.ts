import { Router } from '@angular/router';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TamaWigService } from 'src/app/services/wig.service';
import { TamaComponentBaseClass } from '../../class/component-base.class';
import { WigModel } from '../../core/models/wigs.model';

@Component({
  selector: 'tama-wig-element',
  templateUrl: './wig-element.component.html',
  styleUrls: ['./wig-element.component.scss']
})
export class TamaWigElementComponent extends TamaComponentBaseClass implements OnChanges {
  @Input() wig: WigModel;

  constructor(private wigs: TamaWigService) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.wig.currentValue) {
      this.wig = changes.wig.currentValue;
      // TODO: use when upgrade angular universal
      // this.wig.encodeUri =  encodeURI('https://images.rappi.com/web/ecommerce-partners/images/paga-con-rappi/buttons/btn-white-rectangle-alt-3.png');
    }
  }

  openDetail() {
    this.wigs.wigDetail = this.wig;
  }
}

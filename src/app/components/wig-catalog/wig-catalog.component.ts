import { Component, Input } from '@angular/core';

import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { TamaComponentBaseClass } from '../../class/component-base.class';
import { WigModel } from '../../core/models/wigs.model';
import { TamaWigService } from '../../services/wig.service';

@Component({
  selector: 'tama-wig-catalog',
  templateUrl: './wig-catalog.component.html',
  styleUrls: ['./wig-catalog.component.scss']
})
export class TamaWigCatalogComponent extends TamaComponentBaseClass {
  @Input() carousel: boolean;

  public wigs: Array<WigModel>;
  public end = 0;

  constructor(
    private router: Router,
    private wigService: TamaWigService
  ) {
    super();
  }

  init() {
    this.wigService.getWigsDataAsObservable()
      .pipe(takeUntil(this.$destroyed))
      .subscribe((wigs) => {
        if (wigs) {     
          this.end = this.carousel ? 8 : wigs.length - 1;
          this.wigs = wigs;
        }
      })
  }

}

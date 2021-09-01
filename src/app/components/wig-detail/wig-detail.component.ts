import { Component } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { WigModel } from '../../core/models/wigs.model';
import { TamaComponentBaseClass } from '../../class/component-base.class';
import { TamaWigService } from '../../services/wig.service';

@Component({
  selector: 'tama-wig-detail',
  templateUrl: './wig-detail.component.html',
  styleUrls: ['./wig-detail.component.scss']
})
export class TamaWigDetailComponent extends TamaComponentBaseClass {
  public wigSelected: WigModel;

  constructor(private wigService: TamaWigService) {
    super();
  }

  init() {
    this.getData();
  }

  private getData(): void {
    this.wigService.getWigDetailAsObservable()
      .pipe(takeUntil(this.$destroyed))
      .subscribe((wig) => {
        this.wigSelected = wig;
      })
  }

  public close() {
    this.wigService.wigDetail = null;
  }
}

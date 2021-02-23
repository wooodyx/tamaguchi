import { Component } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { WigModel } from 'src/app/models/wigs.model';
import { TamaComponentBaseClass } from '../../class/component-base.class';
import { TamaWigService } from '../../services/wig.service';

@Component({
  selector: 'tama-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class TamaHomeComponent extends TamaComponentBaseClass {
  public wigs: WigModel;

  constructor(private wigService: TamaWigService) {
    super();
   }

  init(): void {
    this.getWigData();
  }

  getWigData(): void {
    this.wigService.getData()
      .pipe(takeUntil(this.$destroyed))
      .subscribe((wigs) => {
        this.wigs = wigs;
        console.log(wigs)
      })
  }
}

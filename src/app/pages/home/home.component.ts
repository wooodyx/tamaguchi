import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take, takeUntil } from 'rxjs/operators';
import { WigModel } from 'src/app/models/wigs.model';
import { TamaWigService } from 'src/app/services/wig.service';
import { TamaComponentBaseClass } from '../../class/component-base.class';

@Component({
  selector: 'tama-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class TamaHomeComponent extends TamaComponentBaseClass {
  public wigs: WigModel;

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
        this.wigs = wigs;
      })
  }
}

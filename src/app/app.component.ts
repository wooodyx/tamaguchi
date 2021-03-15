import { Component } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { TamaComponentBaseClass } from './class/component-base.class';

import { TamaWigService } from './services/wig.service';

@Component({
  selector: 'tama-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends TamaComponentBaseClass {
  constructor(
    private wigService: TamaWigService
  ) {
    super();
    this.wigService.getData()
    .pipe(takeUntil(this.$destroyed))
    .subscribe();
  }
}

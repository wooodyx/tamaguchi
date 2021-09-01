import { Component, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
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
  public temp: Array<WigModel>;
  public end = 0;
  public searchValue = "";
  public admin = false;

  constructor(
    private readonly router: ActivatedRoute,
    private wigService: TamaWigService
  ) {
    super();
  }

  init() {
    this.getParams();
    this.getWigsData();
  }

  private getParams(): void {
    this.router.queryParams.pipe(takeUntil(this.$destroyed)).subscribe((value) => {
      if (value.admin === "true") {
        this.admin = true;
      }
    })
  }
  private getWigsData(): void {
    this.wigService.getWigsDataAsObservable()
      .pipe(takeUntil(this.$destroyed))
      .subscribe((wigs) => {
        if (wigs) {
          this.end = this.carousel ? 8 : wigs.length - 1;
          this.wigs = wigs;
          this.temp = wigs;
        }
      })
  }

  public search(): void {
    if (this.searchValue.length === 0) {
      this.wigs = [...this.temp];
    } else {
      this.wigs = [...this.wigs.filter(e => e.id.includes(this.searchValue))]
    }
  }
}

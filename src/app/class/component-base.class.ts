import { OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

export class TamaComponentBaseClass implements OnDestroy, OnInit {
  public $destroyed = new Subject();

  constructor() {}

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.$destroyed.next();
    this.$destroyed.complete();
    this.destroy();
  }

  public init(): void {}
  public destroy(): void {}
}

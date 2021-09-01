import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TamaComponentBaseClass } from '../../class/component-base.class';
import { CarouselModel } from '../../core/models/carousel.model';

@Component({
  selector: 'tama-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class TamaCarouselComponent extends TamaComponentBaseClass implements OnChanges {
  @Input() content: CarouselModel;

  public currentImg: {
    index: number,
    img: string
  };
  public arrayImg = [];
  public size = 0;

  constructor() {
    super();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.content.currentValue) {
      this.currentImg = {
        img: changes.content.currentValue.imgs[0],
        index: 0
      }
      this.arrayImg = changes.content.currentValue.imgs;
      this.size = this.arrayImg.length - 1;
    }
  }

  public prevImg(): void {
    const index = this.currentImg.index -1;

    if (index >= 0) {
      this.currentImg = {
        img: this.arrayImg[index],
        index
      }
    }
  }

  public nextImg(): void {
    const index = this.currentImg.index + 1;

    if (index <= this.size) {
      this.currentImg = {
        img: this.arrayImg[index],
        index
      }
    }
  }

  public get hidePrevButton(): boolean {
    return this.currentImg.img !== this.arrayImg[0];
  }
  public get hideNextButton(): boolean {
    return this.currentImg.img !== this.arrayImg[this.arrayImg.length - 1];
  }
  z
}

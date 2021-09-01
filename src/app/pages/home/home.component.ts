import { Component } from '@angular/core';
import { CarouselModel } from 'src/app/core/models/carousel.model';
import { TamaComponentBaseClass } from '../../class/component-base.class';

@Component({
  selector: 'tama-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class TamaHomeComponent extends TamaComponentBaseClass {

  public rent: CarouselModel = {
    imgs: [
      '../../../assets/images/tutorials/alquiler-1.jpg',
      '../../../assets/images/tutorials/alquiler-2.jpg',
      '../../../assets/images/tutorials/alquiler-3.jpg',
      '../../../assets/images/tutorials/alquiler-4.jpg',
       '../../../assets/images/tutorials/alquiler-5.jpg'
    ],
  }

  public use: CarouselModel = {
    imgs: [
      '../../../assets/images/tutorials/use-1.jpg',
      '../../../assets/images/tutorials/use-2.jpg',
      '../../../assets/images/tutorials/use-3.jpg',
      '../../../assets/images/tutorials/use-4.jpg',
       '../../../assets/images/tutorials/use-5.jpg'
    ],
  }


}
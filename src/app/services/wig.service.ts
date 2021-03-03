import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { WigModel } from '../models/wigs.model';

@Injectable({
  providedIn: 'root'
})
export class TamaWigService {

  public $wigs = new BehaviorSubject<WigModel>(null);

  set wigs(step: WigModel) {
    this.$wigs.next(step);
  }

  get wigs(): WigModel {
    return this.$wigs.value;
  }

  public $wigDetail = new BehaviorSubject<WigModel>(null);

  set wigDetail(step: WigModel) {
    this.$wigDetail.next(step);
  }

  get wigDetail(): WigModel {
    return this.$wigDetail.value;
  }

  constructor(private http: HttpClient) { }

  public getWigsDataAsObservable(): Observable<WigModel> {
    return this.$wigs.asObservable();
  }
  
  public getWigDetailAsObservable(): Observable<WigModel> {
    return this.$wigDetail.asObservable();
  }

  public getData(): Observable<WigModel> {
    return this.http.get('../assets/wig.json')
    .pipe(map((json: { wigs }) => json.wigs))
    .pipe(tap((wigs)=> {  
      this.$wigs.next(wigs);
      return wigs;
    }));
  }
}
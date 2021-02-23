import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { WigModel } from '../models/wigs.model';

@Injectable({
  providedIn: 'root'
})
export class TamaWigService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<WigModel> {
    return this.http.get('../../assets/wig.json').pipe(map((json: { wigs }) => json.wigs))
  }
}
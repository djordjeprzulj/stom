import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { kvartalniIzvestaj } from '../models/kvartalniIzvestaj';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KvartalniIzvestajService {
  private readonly API_URL = environment.baseUrl + '/kvartalniIzvestaj';
  dataChange: BehaviorSubject<kvartalniIzvestaj> = new BehaviorSubject<kvartalniIzvestaj>(new kvartalniIzvestaj());

  constructor(private _http: HttpClient) { }

  public getKvartalniIzvestaj(pocIntervala: String, krajIntervala: String): Observable<kvartalniIzvestaj> {
    this._http.get<kvartalniIzvestaj>(this.API_URL + '/' + pocIntervala + '/' + krajIntervala).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse)=>{
      console.log(error.name + ' ' + error.message);
    });
    return this.dataChange.asObservable();
  }
}

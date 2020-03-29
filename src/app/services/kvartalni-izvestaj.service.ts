import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { kvartalniIzvestaj } from '../models/kvartalniIzvestaj';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class KvartalniIzvestajService {
  private readonly API_URL = environment.baseUrl + '/kvartalniIzvestaj';
  dataChange: BehaviorSubject<kvartalniIzvestaj> = new BehaviorSubject<kvartalniIzvestaj>(new kvartalniIzvestaj());

  constructor(private _http: HttpClient, private snackBar: MatSnackBar) { }

  public async getKvartalniIzvestaj(pocIntervala: String, krajIntervala: String): Promise<Observable<kvartalniIzvestaj>> {
    const data = await this._http.get<kvartalniIzvestaj>(this.API_URL + '/' + pocIntervala + '/' + krajIntervala).toPromise();
    this.dataChange.next(data);
    
    return this.dataChange.asObservable();
  }

  public generatePdf(){
    this._http.get<any>(this.API_URL + '/pdfReport', {responseType: 'text' as 'json'}).subscribe(data => {
      this.snackBar.open(data.toString(), 'Close', { duration: 5000})
    },
    (error: HttpErrorResponse)=>{
      console.log(error);
    });
  }
}

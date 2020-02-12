import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { GrupaIntervencija } from '../models/grupa-intervencija';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrupaIntervencijaService {
  private readonly API_URL = environment.baseUrl + '/grupaIntervencija';
    dataChange: BehaviorSubject<GrupaIntervencija[]> = new BehaviorSubject<GrupaIntervencija[]>([]);
    private dialogData: any;
  constructor(private _http: HttpClient) {}

  public getAllGrupaIntervencija(): Observable<GrupaIntervencija[]> {
    this._http.get<GrupaIntervencija[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },
        (error: HttpErrorResponse) => {
          console.log(error.name + ' ' +error.message);
        });
    return this.dataChange.asObservable();
  }

  public addGrupaIntervencija(grupaIntervencija: GrupaIntervencija): void {
    this._http.post(this.API_URL, grupaIntervencija).subscribe(data => {
      this.dialogData = grupaIntervencija;
    });
  }
  
  public updateGrupaIntervencija(grupaIntervencija: GrupaIntervencija): void {
    this._http.put(this.API_URL + '/' + grupaIntervencija.id, grupaIntervencija).subscribe(data => {
      this.dialogData = grupaIntervencija;
    });
  }

  public deleteGrupaIntervencija(id: number): void {
    this._http.delete(this.API_URL + '/' + id).subscribe(data => {
    });
  }

  public getNextID(grupaIntervencija: GrupaIntervencija) {
    this._http.get(this.API_URL + '/NextId').subscribe(
      data => {
      grupaIntervencija.id = data as number;
      this.addGrupaIntervencija(grupaIntervencija);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }
}

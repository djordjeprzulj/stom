import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { kvartalniIzvestaj } from 'src/app/models/kvartalniIzvestaj';
import { KvartalniIzvestajService } from 'src/app/services/kvartalni-izvestaj.service';
import { DatePipe } from '@angular/common';
import { stavkaKvartalniIzvestaj } from 'src/app/models/stavkaKvartalniIzvestaj';

@Component({
  selector: 'app-kvartalni-izvestaj',
  templateUrl: './kvartalni-izvestaj.component.html',
  styleUrls: ['./kvartalni-izvestaj.component.css']
})
export class KvartalniIzvestajComponent implements OnInit {
  displayedColumns = ['kategorije','predskolskaDeca','omladina','ostali','ukupno'];
  dataSource: MatTableDataSource<stavkaKvartalniIzvestaj>;
  hidden: boolean = true;
  pocIntervala: Date = new Date();
  krajIntervala: Date = new Date();
  _pocIntervala: String;
  _krajIntervala: String;

  constructor(private _kvartalniIzvestajServis: KvartalniIzvestajService, public datepipe: DatePipe) { }

  ngOnInit() {
  }

  public loadData() {
    this._pocIntervala = this.datepipe.transform(this.pocIntervala, 'MM-dd-yyyy');
    this._krajIntervala = this.datepipe.transform(this.krajIntervala, 'MM-dd-yyyy');
    
    this._kvartalniIzvestajServis.getKvartalniIzvestaj(this._pocIntervala,this._krajIntervala).subscribe(
      data=>{
        console.log(data);
        this.napraviNiz(data);
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('finish');
      }
    );
  }

  public napraviNiz(_kvartalniIzvestaj: kvartalniIzvestaj){
    const elementiNiza: stavkaKvartalniIzvestaj[] = [
      {kategorija: 'Posete-ukupno', predskolskaDeca: _kvartalniIzvestaj.poseteUkupno.predskolskaDeca, omladina:_kvartalniIzvestaj.poseteUkupno.omladina, ostali:_kvartalniIzvestaj.poseteUkupno.ostali, ukupno: _kvartalniIzvestaj.poseteUkupno.ukupno},
      {kategorija: 'Prve posete', predskolskaDeca: _kvartalniIzvestaj.prvePosete.predskolskaDeca, omladina:_kvartalniIzvestaj.prvePosete.omladina, ostali:_kvartalniIzvestaj.prvePosete.ostali, ukupno: _kvartalniIzvestaj.prvePosete.ukupno},
      {kategorija: 'Serijske posete', predskolskaDeca: _kvartalniIzvestaj.serijskePosete.predskolskaDeca, omladina:_kvartalniIzvestaj.serijskePosete.omladina, ostali:_kvartalniIzvestaj.serijskePosete.ostali, ukupno: _kvartalniIzvestaj.serijskePosete.ukupno},
      {kategorija: 'Plombirani zubi - bez lecenja', predskolskaDeca: _kvartalniIzvestaj.plombiraniZubiBezLecenja.predskolskaDeca, omladina:_kvartalniIzvestaj.plombiraniZubiBezLecenja.omladina, ostali:_kvartalniIzvestaj.plombiraniZubiBezLecenja.ostali, ukupno: _kvartalniIzvestaj.plombiraniZubiBezLecenja.ukupno},
      {kategorija: 'Plombirani zubi - sa lecenjem', predskolskaDeca: _kvartalniIzvestaj.plombiraniZubiSaLecenjem.predskolskaDeca, omladina:_kvartalniIzvestaj.plombiraniZubiSaLecenjem.omladina, ostali:_kvartalniIzvestaj.plombiraniZubiSaLecenjem.ostali, ukupno: _kvartalniIzvestaj.plombiraniZubiSaLecenjem.ukupno},
      {kategorija: 'Hirurske intervencije - vadjenje', predskolskaDeca: _kvartalniIzvestaj.hirurskeIntervencijeVadjenje.predskolskaDeca, omladina:_kvartalniIzvestaj.hirurskeIntervencijeVadjenje.omladina, ostali:_kvartalniIzvestaj.hirurskeIntervencijeVadjenje.ostali, ukupno: _kvartalniIzvestaj.hirurskeIntervencijeVadjenje.ukupno},
      {kategorija: 'Hirurske intervencije - ostalo', predskolskaDeca: _kvartalniIzvestaj.hirurskeIntervencijeOstalo.predskolskaDeca, omladina:_kvartalniIzvestaj.hirurskeIntervencijeOstalo.omladina, ostali:_kvartalniIzvestaj.hirurskeIntervencijeOstalo.ostali, ukupno: _kvartalniIzvestaj.hirurskeIntervencijeOstalo.ukupno},
      {kategorija: 'Pokretne proteze - totalne', predskolskaDeca: _kvartalniIzvestaj.pokretneProtezeTotalne.predskolskaDeca, omladina:_kvartalniIzvestaj.pokretneProtezeTotalne.omladina, ostali:_kvartalniIzvestaj.pokretneProtezeTotalne.ostali, ukupno: _kvartalniIzvestaj.pokretneProtezeTotalne.ukupno},
      {kategorija: 'Pokretne proteze - parcijalne', predskolskaDeca: _kvartalniIzvestaj.pokretneProtezeParcijalne.predskolskaDeca, omladina:_kvartalniIzvestaj.pokretneProtezeParcijalne.omladina, ostali:_kvartalniIzvestaj.pokretneProtezeParcijalne.ostali, ukupno: _kvartalniIzvestaj.pokretneProtezeParcijalne.ukupno},
      {kategorija: 'Fiksne proteze - krunice', predskolskaDeca: _kvartalniIzvestaj.fiksneProtezeKrunice.predskolskaDeca, omladina:_kvartalniIzvestaj.fiksneProtezeKrunice.omladina, ostali:_kvartalniIzvestaj.fiksneProtezeKrunice.ostali, ukupno: _kvartalniIzvestaj.fiksneProtezeKrunice.ukupno},
      {kategorija: 'Fiksne proteze - clanovi', predskolskaDeca: _kvartalniIzvestaj.prvePosete.predskolskaDeca, omladina:_kvartalniIzvestaj.prvePosete.omladina, ostali:_kvartalniIzvestaj.prvePosete.ostali, ukupno: _kvartalniIzvestaj.prvePosete.ukupno},
      {kategorija: 'Ortodoncija - prvi pregledi', predskolskaDeca: _kvartalniIzvestaj.prvePosete.predskolskaDeca, omladina:_kvartalniIzvestaj.prvePosete.omladina, ostali:_kvartalniIzvestaj.prvePosete.ostali, ukupno: _kvartalniIzvestaj.prvePosete.ukupno},
      {kategorija: 'Ortodoncija - terapeutske intervencije', predskolskaDeca: _kvartalniIzvestaj.prvePosete.predskolskaDeca, omladina:_kvartalniIzvestaj.prvePosete.omladina, ostali:_kvartalniIzvestaj.prvePosete.ostali, ukupno: _kvartalniIzvestaj.prvePosete.ukupno},
      {kategorija: 'Ortodoncija - pokretni aparati', predskolskaDeca: _kvartalniIzvestaj.prvePosete.predskolskaDeca, omladina:_kvartalniIzvestaj.prvePosete.omladina, ostali:_kvartalniIzvestaj.prvePosete.ostali, ukupno: _kvartalniIzvestaj.prvePosete.ukupno},
      {kategorija: 'Ortodoncija - fiksni aparati', predskolskaDeca: _kvartalniIzvestaj.prvePosete.predskolskaDeca, omladina:_kvartalniIzvestaj.prvePosete.omladina, ostali:_kvartalniIzvestaj.prvePosete.ostali, ukupno: _kvartalniIzvestaj.prvePosete.ukupno},
      {kategorija: 'Lecenje mekih tkiva usne supljine', predskolskaDeca: _kvartalniIzvestaj.prvePosete.predskolskaDeca, omladina:_kvartalniIzvestaj.prvePosete.omladina, ostali:_kvartalniIzvestaj.prvePosete.ostali, ukupno: _kvartalniIzvestaj.prvePosete.ukupno}
    ];
    this.dataSource = new MatTableDataSource<stavkaKvartalniIzvestaj>(elementiNiza);
    this.hidden = false;
  }

}

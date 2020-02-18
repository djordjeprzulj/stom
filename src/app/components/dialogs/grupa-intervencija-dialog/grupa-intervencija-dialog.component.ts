import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GrupaIntervencija } from 'src/app/models/grupa-intervencija';
import { GrupaIntervencijaService } from 'src/app/services/grupa-intervencija.service';

@Component({
  selector: 'app-grupa-intervencija-dialog',
  templateUrl: './grupa-intervencija-dialog.component.html',
  styleUrls: ['./grupa-intervencija-dialog.component.css']
})
export class GrupaIntervencijaDialogComponent implements OnInit {
  flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<GrupaIntervencijaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: GrupaIntervencija,
              public grupaIntervencijaService: |GrupaIntervencijaService
  ) { }

  ngOnInit() {  }

  public add(): void {
    this.grupaIntervencijaService.addGrupaIntervencija(this.data);
    this.snackBar.open('Uspešno dodata grupa intervencije','U redu',
    {
      duration: 2500
    });
  }

  public update(): void {
    this.grupaIntervencijaService.updateGrupaIntervencija(this.data);
    this.snackBar.open('Uspešno modifikovana grupa intervencije','U redu',
    {
      duration: 2500
    });
  }

  public delete(): void {
    this.grupaIntervencijaService.deleteGrupaIntervencija(this.data.id);
    this.snackBar.open('Uspešno dodata grupa intervencije','U redu',
    {
      duration: 2500
    });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste','U redu',
    {
      duration: 1000
    });
  }

  public compareTo(a, b) {
    return a.id === b.id;
  }

}

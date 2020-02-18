import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatSnackBarModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VrstaIntervencije } from '../../../models/vrsta-intervencije';
import { VrstaIntervencijeService } from '../../../services/vrsta-intervencije.service';
import { Status } from '../../../models/status';
import { StatusService } from '../../../services/status.service';
import { GrupaIntervencija } from 'src/app/models/grupa-intervencija';
import { GrupaIntervencijaService } from 'src/app/services/grupa-intervencija.service';



@Component({
  selector: 'app-vrsta-intervencije-dialog',
  templateUrl: './vrsta-intervencije-dialog.component.html',
  styleUrls: ['./vrsta-intervencije-dialog.component.css']
})
export class VrstaIntervencijeDialogComponent implements OnInit {
  sviStatusi: Status[];
  sveGrupeIntervencija: GrupaIntervencija[];
  flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<VrstaIntervencijeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: VrstaIntervencije,
              public vrstaIntervencijeService: VrstaIntervencijeService,
              public statusService: StatusService,
              public grupaIntervencijaService: GrupaIntervencijaService
  ) { }

  ngOnInit() {
    this.statusService.getAllStatus().subscribe(status =>
      this.sviStatusi = status
    );
    this.grupaIntervencijaService.getAllGrupaIntervencija().subscribe(grupaIntervencija =>
      this.sveGrupeIntervencija = grupaIntervencija
    );
  }

  public add(): void {
    this.vrstaIntervencijeService.getNextID(this.vrstaIntervencijeService.addVrstaIntervencije, this.data);
    this.snackBar.open('Uspešno dodata vrsta intervencije ', 'U redu',
      {
        duration: 2500
      });
  }

  public update(): void {
    this.vrstaIntervencijeService.updateVrstaIntervencije(this.data);
    this.snackBar.open('Uspešno modifikovana vrsta intervencije ', 'U redu',
      {
        duration: 2500
      });
  }

  public delete(): void {
    this.vrstaIntervencijeService.deleteVrstaIntervencije(this.data.id);
    this.snackBar.open('Uspešno obrisana vrsta intervencije ', 'U redu',
    {
      duration: 2500
    });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'U redu',
      {
        duration: 1000
      });
  }

  public compareTo(a, b) {
    return a.id === b.id;
  }

}

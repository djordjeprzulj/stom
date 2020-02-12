import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { GrupaIntervencija } from 'src/app/models/grupa-intervencija';
import { GrupaIntervencijaService } from 'src/app/services/grupa-intervencija.service';
import { GrupaIntervencijaDialogComponent } from '../dialogs/grupa-intervencija-dialog/grupa-intervencija-dialog.component';


@Component({
  selector: 'app-grupa-intervencija',
  templateUrl: './grupa-intervencija.component.html',
  styleUrls: ['./grupa-intervencija.component.css']
})
export class GrupaIntervencijaComponent implements OnInit {
  displayedColumns = ['id' , 'naziv', 'add', 'edit', 'delete'];
  dataSource: MatTableDataSource<GrupaIntervencija>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _grupaIntervencija: GrupaIntervencijaService, public dialog: MatDialog) {}

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this._grupaIntervencija.getAllGrupaIntervencija().subscribe(
      data => {
        this.dataSource = new MatTableDataSource<GrupaIntervencija>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('finish');
      }
    );
  }
  
  public openDialog(flag: number, id: number, naziv: String) {
    const dialogRef = this.dialog.open(GrupaIntervencijaDialogComponent, {
      data: {id: id, naziv: naziv}
    });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }
  applyFilter (filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}

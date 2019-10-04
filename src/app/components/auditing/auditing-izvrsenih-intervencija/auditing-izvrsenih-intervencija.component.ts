import { Component, OnInit } from '@angular/core';
import { IzvrsenaIntervencijaService } from 'src/app/services/izvrsena-intervencija.service';
import { map } from 'rxjs/operators';
import { IzvrsenaIntervencijaAudit } from 'src/app/models/izvrsenaIntervencijaAudit';
import { PageEvent } from '@angular/material';
import { PageRequest } from 'src/app/models/pageRequest';

@Component({
  selector: 'app-auditing-izvrsenih-intervencija',
  templateUrl: './auditing-izvrsenih-intervencija.component.html',
  styleUrls: ['./auditing-izvrsenih-intervencija.component.css']
})
export class AuditingIzvrsenihIntervencijaComponent implements OnInit {
  public dataSource = [];
  public length: number;
  public index = 0;
  public pageSize = 5;
  public displayedColumns = ["id", "radnoMjesto", "pacijent", "zaposleni", "createdBy", "createdDate", "lastModifiedBy", "lastModifiedDate"]
  public pageEvent: PageEvent;
  constructor(private intervencijaServis: IzvrsenaIntervencijaService) { }

  ngOnInit() {
    this.fetchData({
      pageNumber: this.index, 
      pageSize: this.pageSize
    });
  }

  public fetchData(pageRequest: PageRequest) {
    this.intervencijaServis.getSveIzvrseneIntervenije(pageRequest).subscribe(res => {
      this.length = res.totalElements;
      this.dataSource = res.content || [];
      this.dataSource.map(row => {
        return new IzvrsenaIntervencijaAudit(row);
      })
    })
  }

  pageChange(pageEvent: PageEvent) {
    this.fetchData({
      pageNumber: pageEvent.pageIndex,
      pageSize: pageEvent.pageSize
    });
  }
}

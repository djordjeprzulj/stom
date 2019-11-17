import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar, MatSnackBarModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { Pacijent } from '../../models/pacijent'
import { PacijentService } from '../../services/pacijent.service'
import { PacijentComponent } from '../pacijent/pacijent.component'

@Component({
  selector: 'app-pacijent-edit',
  templateUrl: './pacijent-edit.component.html',
  styleUrls: ['./pacijent-edit.component.css']
})

export class PacijentEditComponent implements OnInit {

  @Input() pacijent: Pacijent;

  constructor(
  	private route: ActivatedRoute,
  	private pacijentService: PacijentService,
  	private location: Location,
  ) { }

  ngOnInit(): void {
  	this.getPacijent();
  }

  // Get the pacijent using the id extracted from the URL
  getPacijent(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.pacijentService.getPacijent(id).subscribe(pacijent => this.pacijent = pacijent);
  }

  // Update the pacijent via pacijentService and go back (to pacijent list)
  save(): void {
  	this.pacijentService.updatePacijent(this.pacijent);
  	this.goBack();
  }

  // Go back to previous URL (pacijent list)
  goBack(): void {
  	this.location.back();
  }

}

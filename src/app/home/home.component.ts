import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crudService';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  records:any;
  
  constructor(private CrudService:CrudService) { }

  ngOnInit(): void {
    this.CrudService.getAllRecords().subscribe(
      ( result:any )=>{
       
        this.records=result.data;
       console.log(this.records);
       }
     )
  }
}

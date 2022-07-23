import { Component, OnInit , AfterViewInit ,ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrudService } from '../crudService';
import { DialogComponent } from '../dialog/dialog.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-gold-bar',
  templateUrl: './gold-bar.component.html',
  styleUrls: ['./gold-bar.component.css']
})
export class GoldBarComponent implements OnInit {
records:any;

  constructor(private CrudService :CrudService ,  private dialog: MatDialog) { }

  ngOnInit(): void {
    this.CrudService.getGoldRecords().subscribe(
    ( result:any )=>{
        this.records=result.data;
       //console.log(this.records);
       }
     )}
     openDialog() {
      this.dialog.open(DialogComponent, {
       width:'30%'
      }).afterClosed().subscribe(val=>{
        if(val === 'save'){
          this.CrudService.getGoldRecords().subscribe(
            ( result:any )=>{
                this.records=result.data;
               //console.log(this.records);
               }
             )
        }
      })
    }
    deleteGRecords (records:any){

      this.CrudService.deleteGRecords(records.G_ID).subscribe(data=>{
        this.records = this.records.filter((u:any) => u !== records);
        console.log(records);
      })
    }
    editGRecords (records:any) {
      this.dialog.open(DialogComponent,{
        width:'30%',
        data:records
      })
    }
}

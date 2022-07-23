import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crudService';

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css']
})
export class InventoriesComponent implements OnInit {
  records:any;

  constructor(private CrudService : CrudService) { }

  ngOnInit(): void {
    this.CrudService.getInventoryRecords().subscribe(
      ( result:any )=>{
          this.records=result.data;
         //console.log(this.records);
         }
       )
  }

}

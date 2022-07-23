import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crudService';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {
  records:any;

  constructor(private CrudService : CrudService) { }

  ngOnInit(): void {
    this.CrudService.getBranchesRecords().subscribe(
      ( result:any )=>{
          this.records=result.data;
         //console.log(this.records);
         }
       )
  }

}

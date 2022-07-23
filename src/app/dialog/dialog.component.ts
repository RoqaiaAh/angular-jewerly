import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CrudService } from '../crudService';
import { records } from '../records';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
goldForm !:FormGroup;
actionBtn:any ="Save";
  constructor(private CrudeService :CrudService,private FormBuilder:FormBuilder , private dialofReg : MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA)public editRecord:any) {}

  ngOnInit(): void {
   this.goldForm=this.FormBuilder.group({
     G_Name:['',Validators.required],
     G_Price:['',Validators.required],
     G_Size:['',Validators.required],
     G_Standard:['',Validators.required]
   })
  if(this.editRecord){
    this.actionBtn="Update";
    this.goldForm.controls['G_Name'].setValue(this.editRecord.G_Name);
    this.goldForm.controls['G_Price'].setValue(this.editRecord.G_Price);
    this.goldForm.controls['G_Size'].setValue(this.editRecord.G_Size);
    this.goldForm.controls['G_Standard'].setValue(this.editRecord.G_Standard);
  }
  }
  
  addGold (){
    if(!this.editRecord){
      if(this.goldForm.valid)
    {
      this.CrudeService.addGold(this.goldForm.value).subscribe({
        next:(res)=>{
          alert('record added succefully !');
          this.goldForm.reset();
          this.dialofReg.close('save');
          
        },
        error:()=>{
          alert("Error , couldnt add the record !");
        }
      })
    }
  }
  else {
    this.updateRecord(records);
  }
    }
    updateRecord(records:any){
     this.CrudeService.updateRecord(this.goldForm.value,this.editRecord.G_ID).subscribe({
       next:(res)=>{
         alert("updated succefully !");
         this.goldForm.reset();
         this.dialofReg.close('update');
         console.log(res);
       },
       error:()=>{
         alert("Error while updating the records !");
       }
     })
    }
}

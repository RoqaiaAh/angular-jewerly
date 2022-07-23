import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { records } from './records';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  baseUrl:string ='http://localhost/api/';

  getAllRecords () {
    return this.http.get<records[]>(this.baseUrl+'view.php');
  }
  getBranchesRecords (){
    return this.http.get<records[]>(this.baseUrl+'viewbranch.php');
  }
  getGoldRecords () {
    return this.http.get<records[]>(this.baseUrl+'viewgoldbar.php');
  }
  getInventoryRecords (){
    return this.http.get<records[]>(this.baseUrl+'viewinventory.php');
  }
  
  deleteGRecords (G_ID : any) {
    return this.http.delete(this.baseUrl+'deletegold.php?G_ID='+G_ID);
  }
  addGold (record:any){
    return this.http.post(this.baseUrl+'insertnewgold.php',record);
  }
  updateRecord(record:any , G_ID:number){
    return this.http.put(this.baseUrl+'updategold.php'+G_ID,record);
  }
}

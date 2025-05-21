import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-data',
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-data.component.html',
  styleUrl: './employee-data.component.scss'
})
export class EmployeeDataComponent implements OnInit{

  @ViewChild('empModal') empModal: ElementRef | undefined;
  employeeList: any[] = [];
  employeeObj: any = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "contactNo": "",
    "city": "",
    "address": ""
  
  }

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllEmployees();
  }

  openModal(){
    if(this.empModal){
      this.empModal.nativeElement.style.display = 'block';
    }
  }
  closeModal(){
    if(this.empModal){
      this.empModal.nativeElement.style.display = 'none';
    }
  }

  getAllEmployees(){
    this.http.get('https://localhost:7047/api/employeemaster').subscribe((res: any)=>{
      this.employeeList = res;
    })
  }

  onSave(){
    this.http.post('https://localhost:7047/api/employeemaster',this.employeeObj).subscribe((res: any)=>{
      this.getAllEmployees()
      this.closeModal();
    })
  }
  
  onUpdate(){
    this.http.put('https://localhost:7047/api/employeemaster/' + this.employeeObj.employeeId,this.employeeObj).subscribe((res: any)=>{
      this.getAllEmployees()
      this.closeModal();
    })

  }  
  editEmployee(data: any){
    this.openModal();
    this.employeeObj = data;
  }
  deleteEmployee(data: any){
    const isDelete = confirm("¿Estas seguro que quieres elminarlo?");
    if(isDelete){
      this.http.delete('https://localhost:7047/api/employeemaster/' + data.employeeId).subscribe((res: any)=>{
        this.getAllEmployees()
  
    })
    }

  }

}

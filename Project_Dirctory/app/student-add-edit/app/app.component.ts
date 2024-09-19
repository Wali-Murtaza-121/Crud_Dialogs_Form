import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentAddEditComponent } from './student-add-edit/student-add-edit.component';
import { StudentsService } from './services/students.service';
import {MatTableModule} from '@angular/material/table';

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  gender: string;
  degree: string;
  semester: string;
  cnic: string;
  fatherName: string;
  phone: string;
}

const ELEMENT_DATA: Student[] = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'degree',
    'semester',
    'cnic',
    'fatherName',
    'phone',
    'action',
  ];
  dataSource: Student[] = ELEMENT_DATA;

constructor(
  private _dialog:MatDialog,
  private _studentService: StudentsService
  ){}
  ngOnInit(): void {
    this.getStudents();
  }

openAddEditDialog(){
  const DialogRef = this._dialog.open(StudentAddEditComponent);
  DialogRef.afterClosed().subscribe({
    next:(val)=>{
      if(val){
this.getStudents();
      }
    }
  });
}

getStudents() {
  this._studentService.getStudentList().subscribe({
    next: (res: Student[]) => {
      this.dataSource = res;
    },
    error: console.error
  });
}

deleteStudents(id:number){
this._studentService.deleteStudentList(id).subscribe({
next:(res)=>{
alert('Student Deleted Successfully!');
this.getStudents();
},
error:console.log,
});
}
openEditDialog(data:any){
 const DialogRef =  this._dialog.open(StudentAddEditComponent,{
    data,
  });
  DialogRef.afterClosed().subscribe({
    next:(val)=>{
      if(val){
this.getStudents();
      }
    }
  });
}

}

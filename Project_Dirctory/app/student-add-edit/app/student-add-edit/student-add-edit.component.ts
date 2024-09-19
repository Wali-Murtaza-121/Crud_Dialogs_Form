import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../services/students.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-student-add-edit',
  templateUrl: './student-add-edit.component.html',
  styleUrl: './student-add-edit.component.css'
})
export class StudentAddEditComponent implements OnInit {

  degree: string[] = [
    'Computer Science',
    'Software Engineering',
    'Information Technology',
    'Artificial Intelligence',
    'Cyber Security',
    'Data Science',
    'Mass Communication',
    'LLB',
    'Chemistry',
    'Physics',
  ];

  semester: any[] = [
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
    '6th',
    '7th',
    '8th',
  ];

  studentForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _studentService: StudentsService,
    private _dialogRef: MatDialogRef<StudentAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.studentForm = this._fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required],
      dob: ['',Validators.required],
      gender: ['',Validators.required],
      degree: ['',Validators.required],
      semester: ['',Validators.required],
      cnic: ['',Validators.required],
      fatherName: ['',Validators.required],
      phone: ['',Validators.required],
    });
  }
  ngOnInit(): void {
this.studentForm.patchValue(this.data);
  }

  onSubmit() {
    if (this.studentForm.valid) {
      if(this.data){
        console.log(this.studentForm.value);
        this._studentService.updateStudent(this.data.id,this.studentForm.value).subscribe({
          next: (val: any) => {
            alert('Student Updated Successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      } else{
        console.log(this.studentForm.value);
        this._studentService.addStudent(this.studentForm.value).subscribe({
          next: (val: any) => {
            alert('Student Added Successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      }
    }
  }

  closeDialog(){
    this._dialogRef.close();
  }

}

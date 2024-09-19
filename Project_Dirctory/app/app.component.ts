import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentAddEditComponent } from './student-add-edit/student-add-edit.component';
import { StudentsService } from './services/students.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  petCategory: string[] = [
    'Cat',
    'Dog',
    'Birds',
    'Fish',
    'Horse',
    'Rabbits',
    'Caged Pet',
    'Ferret',
    'Hamster',
    'Parrot',
    'Mice',
    'Turtle',
    'Bearded Dragon',
  ];

  routine: string[] = [
    'Morning',
    'Evening',
    'Night',
    'After 1 Day',
    'After 3 Day',
    'After 1 Week',
    'After 1 Month',
    'Three Times in Day',
  ];

  dietRoutine: string[] = [
    'Morning',
    'Evening',
    'Night',
    'After 1 Hour',
    'Three Times in Day',
  ];

  doseType: string[] = [
    'Ointment',
    'Liquid',
    'Drops',
    'Therapeutic Dose',
    'Sub-Therapeutic Dose',
    'Toxic Dose',
    'Lethal Dose (LD50)',
    'Median Effective Dose (ED50)',
    'Prophylactic Dose',
  ];

  doseRoutine: string[] = [
    'Morning',
    'Evening',
    'Night',
    'After 1 Hour',
    'Three Times in Day',
  ];

  petForm: FormGroup;
  data: any;

constructor(
  private _fb:FormBuilder,
  private _PetService: StudentsService
  ){
    this.petForm = this._fb.group({
      petName: ['', Validators.required],
      petAge: ['', Validators.required],
      dateOfAdd: ['', Validators.required],
      dateOfExit: ['', Validators.required],
      petGender: ['', Validators.required],
      petCategory: ['', Validators.required],
      petRoutine: ['', Validators.required],
      petFood: ['', Validators.required],
      petDietRoutine: ['', Validators.required],
      petDose: ['', Validators.required],
      petDoseRoutine: ['', Validators.required],
    });
  }
  onSubmit(): void {
    console.log(this.petForm.value);
    this._PetService.petPost(this.petForm.value).subscribe(
      response => {
        console.log('Pet details submitted successfully', response);
        this.petForm.reset();
      },
      error => {
        console.error('Error submitting pet details', error);
      }
    );
  }
cancel(){
  this.petForm.reset();
}
}

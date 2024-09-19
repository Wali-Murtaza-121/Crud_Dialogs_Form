import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _http:HttpClient) { }
addStudent(data:any):Observable<any>{
return this._http.post('http://localhost:3000/Students',data);
}
updateStudent(id:number,data:any):Observable<any>{
  return this._http.put(`http://localhost:3000/Students/${id}`,data);
  }
getStudentList():Observable<any>{
  return this._http.get('http://localhost:3000/Students');
  }

  deleteStudentList(id:number):Observable<any>{
  return this._http.delete(`http://localhost:3000/Students/${id}`);
    }

}

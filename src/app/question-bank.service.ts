import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './question.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionBankService {

  constructor(public http:HttpClient ) { }

  //retrieve the json data from json-server and converted into product array
  getAllQuizDetails():Observable<Question[]>{
    return this.http.get<Question[]>("http://localhost:3000/quiz");
  }
}

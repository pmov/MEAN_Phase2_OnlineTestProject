import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuestionBankService } from '../question-bank.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-view-test',
  templateUrl: './view-test.component.html',
  styleUrls: ['./view-test.component.css']
})
export class ViewTestComponent implements OnInit {

  questions: Array<Question> = []; //created empty array to load the data
  score: number = 0;
  submitted: boolean = false;
  showSubmitBtn: boolean = false;
  correctList:Array<String> = [];

  constructor(public qService: QuestionBankService) { }

  ngOnInit(): void {
  }

  loadJsonData(): void {
    console.log("Submitted" + this.submitted);
    this.score = 0;
    this.showSubmitBtn = true;
    this.qService.getAllQuizDetails().
      subscribe(result => this.questions = result, err => console.log(err));

  }

  submitAnswers(quizFormRef: NgForm) {
    this.submitted = true;
    this.score = 0;
    this.correctList.splice(0,this.correctList.length);

    console.log(quizFormRef.value);
    let answerObj = quizFormRef.value;
    console.log(this.questions);


    this.questions.forEach(q => {
      for (const prop in answerObj) {
        if (parseInt(prop) == q.id && answerObj[prop] == q.answer) {
          console.log(`${q.id} is correct`);
          this.score = this.score + 1;
          this.correctList.push(`Q.${q.id} is correct`);
        }
        else if(parseInt(prop) == q.id && answerObj[prop] != q.answer)
        {
          console.log(`${q.id} is correct`);
          this.correctList.push(`Q.${q.id} is incorrect. Correct answer is ${q.answer}`);
        }
      }
    }

    );

  }


}


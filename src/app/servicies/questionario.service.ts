import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/api.config';
import { NewQuestionarioDTO } from '../models/newQuestionario.dto';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${API_URL}questionario`);
  }

  saveOne(questionario: NewQuestionarioDTO): Observable<any> {
    return this.http.post(`${API_URL}questionario`, questionario);
  }
}

import { Component, OnInit } from '@angular/core';
import { NewQuestionarioDTO } from '../models/newQuestionario.dto';
import { QuestaoDTO } from '../models/questao.dto';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionarioService } from '../servicies/questionario.service';

@Component({
  selector: 'app-cadastrar-questionario',
  templateUrl: './cadastrar-questionario.component.html',
  styleUrls: ['./cadastrar-questionario.component.css']
})
export class CadastrarQuestionarioComponent implements OnInit {

  questionario: NewQuestionarioDTO;
  questao: QuestaoDTO = {
    pergunta: "",

    alternativaCerta: "",
    feedBackCerta: "",

    alternativaErrada1: "",
    feedBackErrada1: "",
    alternativaErrada2: "",
    feedBackErrada2: "",
    alternativaErrada3: "",
    feedBackErrada3: ""
  };
  formulario: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private messageService: MessageService,
    private apiService: QuestionarioService) {
    this.formulario = this.formBuilder.group({
      pergunta: ['Teste', [Validators.required, Validators.maxLength(255)]],

      alternativaCerta: ['Teste', [Validators.required, Validators.maxLength(255)]],
      feedBackCerta: ['Teste', [Validators.required, Validators.maxLength(255)]],

      alternativaErrada1: ['Teste', [Validators.required, Validators.maxLength(255)]],
      feedBackErrada1: ['Teste', [Validators.required, Validators.maxLength(255)]],
      alternativaErrada2: ['Teste', [Validators.required, Validators.maxLength(120)]],
      feedBackErrada2: ['Teste', [Validators.required, Validators.maxLength(120)]],
      alternativaErrada3: ['Teste', [Validators.required, Validators.maxLength(120)]],
      feedBackErrada3: ['Teste', [Validators.required, Validators.maxLength(120)]],
    })
  }

  ngOnInit() {
    this.questionario = {
      idProfessor: 1,
      questoes: []
    };
  }

  salvarQuestao() {
    this.questionario.questoes.push(this.formulario.value);
    this.formulario.reset();
    this.messageService.add({
      severity: 'success',
      summary: 'Questão adicionada ao questionário com sucesso!'
    });

  }

  terminarQuestionario() {
    //this.questionario.questoes.forEach(questao => console.log(questao));
    this.apiService.saveOne(this.questionario)
      .subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Questionário salvo com sucesso!'
        })
      },
        res => {
          let msg = "Erro inesperado. Tente novamente!"

          if (res.error.message) {
            msg = res.error.message;
          }

          this.messageService.add({
            severity: 'error',
            summary: msg
          })

        })
  }

}

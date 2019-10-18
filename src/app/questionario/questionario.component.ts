import { Component, OnInit } from '@angular/core';
import { NewQuestionarioDTO } from '../models/newQuestionario.dto';
import { QuestionarioService } from '../servicies/questionario.service';
import { QuestaoDTO } from '../models/questao.dto';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  questionario: NewQuestionarioDTO;
  questaoAtual: QuestaoDTO = {
    alternativaCerta: "",
    alternativaErrada1: "",
    alternativaErrada2: "",
    alternativaErrada3: "",
    feedBackCerta: "",
    feedBackErrada1: "",
    feedBackErrada2: "",
    feedBackErrada3: "",
    pergunta: ""
  };
  posicao: number = 0;

  id: number;

  val1: any = 0;
  cabecalho: string = "";

  respondido: boolean = false;

  feedBack: string = "";

  interator: number = 0;

  acertos: number = 0;
  erros: number = 0;

  constructor(private route: ActivatedRoute,
    private r: Router,
    private service: QuestionarioService) {
    this.route.params.subscribe(param => {
      this.id = +param['id'];
    });


  }

  ngOnInit() {
    this.service.getById(this.id)
      .subscribe(req => {
        this.questionario = <any>req;
        this.questaoAtual = this.questionario.questoes[this.interator];
        this.cabecalho = `Questão ${this.interator + 1}/${this.questionario.questoes.length}`
        this.getRandomPosition();

      });

  }

  proxima() {
    this.interator++;
    if (this.interator == this.questionario.questoes.length) {
      console.log('entrou')
      this.r.navigate(['/fim', this.acertos, this.erros, this.questionario.questoes.length]);
    } else {
      this.questaoAtual = this.questionario.questoes[this.interator];
      this.getRandomPosition();
      this.respondido = false;
    }
  }

  responder() {
    let resposta = this.val1;

    switch (resposta) {

      case "certa":
        this.feedBack = this.questaoAtual.feedBackCerta;
        this.acertos++;
        break;

      case "errada1":
        this.feedBack = this.questaoAtual.feedBackErrada1;
        this.erros++;
        break;

      case "errada2":
        this.feedBack = this.questaoAtual.feedBackErrada2;
        this.erros++;
        break;

      case "errada3":
        this.feedBack = this.questaoAtual.feedBackErrada3;
        this.erros++;
        break;
    }

    this.respondido = true;
  }

  getFeedBack() {
    return this.feedBack;
  }

  desabilitarResposta() {
    if (!isNaN(this.val1)) {
      return true;
    }
    return false;
  }

  getRandomPosition() {
    let aux = 0;
    do {
      aux = Math.floor(Math.random() * 10);
    } while (aux > 3);
    this.posicao = aux
  }

}

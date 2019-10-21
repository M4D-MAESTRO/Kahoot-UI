import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-questionario-fim',
  templateUrl: './questionario-fim.component.html',
  styleUrls: ['./questionario-fim.component.css']
})
export class QuestionarioFimComponent implements OnInit {

  acertos: number = 0;
  erros: number = 0;
  size: number = 0;

  data: any;

  constructor(private route: ActivatedRoute,
    private r: Router) {
    this.route.params.subscribe(param => {
      this.acertos = +param['acertos'];
      this.erros = +param['erros'];
      this.size = +param['size'];
    });

    this.data = {
      labels: ['Acertos', 'Erros'],
      datasets: [
        {
          data: [this.acertos, this.erros],
          backgroundColor: [
            "#36A2EB",
            "#FF6384"
          ],
          hoverBackgroundColor: [
            "#36A2EB",
            "#FF6384"
          ]
        }]
    };
  }

  ngOnInit() {

  }

  home() {
    this.r.navigate(['']);
  }

  getFeed(): string {
    if (this.acertos == this.size) {
      return "EXCELENTE!";
    }

    if (this.acertos > this.erros + 1) {
      return "MUITO BOM!";
    }

    if (this.acertos == this.erros) {
      return "PRECISA MELHORAR!";
    }

    if (this.acertos > this.erros - 1) {
      return "RUIM!";
    }

    if (this.erros == this.size) {
      return "PÉSSIMO!";
    }
  }

  getResultado(): string {
    return `Resultado: ${this.acertos}/${this.size}`
  }

}

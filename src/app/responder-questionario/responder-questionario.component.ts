import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-responder-questionario',
  templateUrl: './responder-questionario.component.html',
  styleUrls: ['./responder-questionario.component.css']
})
export class ResponderQuestionarioComponent implements OnInit {

  public codigo: number = 0;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  acessar() {
    this.route.navigate(['/responder', this.codigo]);
  }

  desabilitar(): boolean {
    if (!isNaN(this.codigo)) {
      return false;
    } else {
      return true;
    }
  }

}

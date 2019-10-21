import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  direcionar(opcao: number) {
    switch (opcao) {
      case 0:
        this.route.navigateByUrl("https://www.unicarioca.edu.br/");
        break;
    }
  }


}

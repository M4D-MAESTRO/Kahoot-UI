import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kahoot-ui';

  items: MenuItem[];
  opcao: number;

  ngOnInit() {
    this.items = [
      {
        label: 'Opções do professor',
        icon: 'pi pi-fw pi-id-card',
        items: [{
          label: 'Cadastrar',
          icon: 'pi pi-fw pi-plus',
          items: [
            {
              label: 'Questionário',
              icon: 'pi pi-fw pi-align-justify',
              command: () => {
                this.opcao = 1
                this.changeMenu()
              },
              routerLink: "/cadastrar"
            }]
        }]
      },
      {
        label: 'Opções do aluno',
        icon: 'pi pi-fw pi-info',
        items: [
          {
            label: 'Responder Questionário',
            icon: 'pi pi-fw pi-pencil',
            routerLink: "/responder"
          }
        ]
      }];
  }

  changeMenu() {
    
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarQuestionarioComponent } from './cadastrar-questionario/cadastrar-questionario.component';
import { ResponderQuestionarioComponent } from './responder-questionario/responder-questionario.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { QuestionarioFimComponent } from './questionario-fim/questionario-fim.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
    {
        path: '',
        pathMatch: "full",
        redirectTo: '/home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'cadastrar',
        component: CadastrarQuestionarioComponent
    },
    {
        path: 'responder',
        component: ResponderQuestionarioComponent
    },
    {
        path: 'responder/:id',
        component: QuestionarioComponent
    },
    {
        path: 'fim/:acertos/:erros/:size',
        component: QuestionarioFimComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
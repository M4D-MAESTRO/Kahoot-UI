import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarQuestionarioComponent } from './cadastrar-questionario/cadastrar-questionario.component';
import { ResponderQuestionarioComponent } from './responder-questionario/responder-questionario.component';
import { QuestionarioComponent } from './questionario/questionario.component';



const routes: Routes = [
    
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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
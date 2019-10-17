import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CadastrarQuestionarioComponent } from './cadastrar-questionario/cadastrar-questionario.component';
import { ResponderQuestionarioComponent } from './responder-questionario/responder-questionario.component';
import { QuestionarioComponent } from './questionario/questionario.component';

import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent,
    CadastrarQuestionarioComponent,
    ResponderQuestionarioComponent,
    QuestionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    PanelModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    InputTextareaModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

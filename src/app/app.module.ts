import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CadastrarQuestionarioComponent } from './cadastrar-questionario/cadastrar-questionario.component';
import { ResponderQuestionarioComponent } from './responder-questionario/responder-questionario.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { QuestionarioFimComponent } from './questionario-fim/questionario-fim.component';
import { HomeComponent } from './home/home.component';

import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [
    AppComponent,
    CadastrarQuestionarioComponent,
    ResponderQuestionarioComponent,
    QuestionarioComponent,
    QuestionarioFimComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    PanelModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    InputTextareaModule,
    ToastModule,
    CardModule,
    RadioButtonModule,
    ChartModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

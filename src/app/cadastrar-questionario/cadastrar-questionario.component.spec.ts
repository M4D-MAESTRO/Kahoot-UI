import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarQuestionarioComponent } from './cadastrar-questionario.component';

describe('CadastrarQuestionarioComponent', () => {
  let component: CadastrarQuestionarioComponent;
  let fixture: ComponentFixture<CadastrarQuestionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarQuestionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarQuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionarioFimComponent } from './questionario-fim.component';

describe('QuestionarioFimComponent', () => {
  let component: QuestionarioFimComponent;
  let fixture: ComponentFixture<QuestionarioFimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionarioFimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionarioFimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

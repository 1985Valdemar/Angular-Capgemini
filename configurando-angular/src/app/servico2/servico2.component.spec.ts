import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servico2Component } from './servico2.component';

describe('Servico2Component', () => {
  let component: Servico2Component;
  let fixture: ComponentFixture<Servico2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Servico2Component]
    });
    fixture = TestBed.createComponent(Servico2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

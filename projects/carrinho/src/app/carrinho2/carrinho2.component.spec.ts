import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrinho2Component } from './carrinho2.component';

describe('Carrinho2Component', () => {
  let component: Carrinho2Component;
  let fixture: ComponentFixture<Carrinho2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carrinho2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Carrinho2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

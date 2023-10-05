import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpessoasComponent } from './listpessoas.component';

describe('ListpessoasComponent', () => {
  let component: ListpessoasComponent;
  let fixture: ComponentFixture<ListpessoasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListpessoasComponent]
    });
    fixture = TestBed.createComponent(ListpessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

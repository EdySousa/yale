import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPagesComponent } from './default-pages.component';

describe('DefaultPagesComponent', () => {
  let component: DefaultPagesComponent;
  let fixture: ComponentFixture<DefaultPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

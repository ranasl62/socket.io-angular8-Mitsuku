import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWithServerComponent } from './chat-with-server.component';

describe('ChatWithServerComponent', () => {
  let component: ChatWithServerComponent;
  let fixture: ComponentFixture<ChatWithServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatWithServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatWithServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

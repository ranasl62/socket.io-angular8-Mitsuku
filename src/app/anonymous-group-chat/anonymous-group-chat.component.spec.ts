import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymousGroupChatComponent } from './anonymous-group-chat.component';

describe('AnonymousGroupChatComponent', () => {
  let component: AnonymousGroupChatComponent;
  let fixture: ComponentFixture<AnonymousGroupChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnonymousGroupChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymousGroupChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

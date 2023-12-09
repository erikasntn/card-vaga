import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostarVagaComponent } from './postar-vaga.component';

describe('PostarVagaComponent', () => {
  let component: PostarVagaComponent;
  let fixture: ComponentFixture<PostarVagaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostarVagaComponent]
    });
    fixture = TestBed.createComponent(PostarVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

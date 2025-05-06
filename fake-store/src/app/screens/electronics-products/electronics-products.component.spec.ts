import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsProductsComponent } from './electronics-products.component';

describe('ElectronicsProductsComponent', () => {
  let component: ElectronicsProductsComponent;
  let fixture: ComponentFixture<ElectronicsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectronicsProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

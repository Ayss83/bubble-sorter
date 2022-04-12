import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe("populateElements", () => {
    it("should set elementList property with an array of length matching received parameter", () => {
      component.elementList = [];

      component.populateElements(15);

      expect(component.elementList.length).toBe(15);
    });
  });

  describe("createElements", () => {
    it("should return an array numbers", () => {
      const createResult = component.createElements(18);

      expect(createResult.every(element => typeof element === "number")).toBeTrue();
    });

    it("should return an array of length corresponding to received parameter", () => {
      const createResult = component.createElements(40);

      expect(createResult.length).toBe(40);
    });
  });

  describe("bubbleSorter", () => {
    it("should sort elementList array in place", () => {
      component.elementList = [5,6,7,2,4,10,1];
      const backupList = component.elementList;

      component.bubbleSorter();

      expect(backupList).toBe(component.elementList);
      expect(component.elementList).toEqual([1,2,4,5,6,7,10]);
    });
  });
});

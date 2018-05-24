import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {By} from '@angular/platform-browser';
import {MaterialModule} from './material.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents()
  ));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have title as Broken Todos`, async(() => {
    const title = fixture.debugElement.query(By.css('mat-toolbar > span')).nativeElement.innerText.trim();

    expect(title).toEqual('Broken Todos');
  }));
});

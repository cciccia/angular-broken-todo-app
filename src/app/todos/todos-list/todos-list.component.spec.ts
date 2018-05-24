import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodosListComponent} from './todos-list.component';
import {By} from '@angular/platform-browser';
import {MaterialModule} from '../../material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('TodosListComponent', () => {
  let component: TodosListComponent;
  let fixture: ComponentFixture<TodosListComponent>;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MaterialModule],
      declarations: [TodosListComponent]
    }).compileComponents()
  ));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list item for each default todo', async(() => {
    const listItems = fixture.debugElement.queryAll(By.css('mat-list-item'))
      .map(listItem => listItem.nativeElement.innerText.trim());

    expect(listItems).toEqual([
      'Buy bread',
      'Learn Angular 6',
      'Read about Ivy',
      'Pick up the kids'
    ]);
  }));

  it('should be able to add a new todo to the list', async(() => {
    component.addNewTodo('Test TODO');

    fixture.detectChanges();

    const listItems = fixture.debugElement.queryAll(By.css('mat-list-item'))
      .map(listItem => listItem.nativeElement.innerText.trim());

    expect(listItems).toEqual([
      'Buy bread',
      'Learn Angular 6',
      'Read about Ivy',
      'Pick up the kids',
      'Test TODO'
    ]);
  }));
});

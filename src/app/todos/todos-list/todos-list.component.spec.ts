import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodosListComponent} from './todos-list.component';
import {By} from '@angular/platform-browser';
import {MaterialModule} from '../../material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('TodosListComponent', () => {
  let component: TodosListComponent;
  let fixture: ComponentFixture<TodosListComponent>;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MaterialModule, FormsModule, ReactiveFormsModule],
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

    const listItems = fixture.debugElement.queryAll(By.css('mat-list-item .todo-value'))
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

    const listItems = fixture.debugElement.queryAll(By.css('mat-list-item .todo-value'))
      .map(listItem => listItem.nativeElement.innerText.trim());

    expect(listItems).toEqual([
      'Buy bread',
      'Learn Angular 6',
      'Read about Ivy',
      'Pick up the kids',
      'Test TODO'
    ]);
  }));

  it('should become invalid when todo field is of improper length', async(() => {
    expect(component.todosForm.valid).toBeFalsy();
    component.todosForm.controls['todo'].setValue('cool');
    expect(component.todosForm.valid).toBeTruthy();
    component.todosForm.controls['todo'].setValue('sd');
    expect(component.todosForm.valid).toBeFalsy();
    component.todosForm.controls['todo'].setValue(
      'egforororoegforororoegforororoegforororoegforororoegforororgforororoegforororoegforororoegforororoegforororoegforororo'
    );
    expect(component.todosForm.valid).toBeFalsy();
  }));
});

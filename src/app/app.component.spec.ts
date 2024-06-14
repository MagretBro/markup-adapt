import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    // блок импортирует формы, объявляет аппкомпонент
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    // fixture -это ComponentFixture, обертка тестируемого компонента. имеет доступ к комп и DOM
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance; // присваеваем получение доступа к комп и его сво-вам и методам. чтоб делать тесты
    fixture.detectChanges();
  });

  it('should create the app', ()=>{
    expect(component).toBeTruthy();
  });

  // 'should identify "Аргентина манит негра" as a palindrome'
  it("Аргентина манит негра", () => {
    component.inputText = "Аргентина манит негра";
    component.isPalindrome();
    expect(component.result).toBe(true)
  })

  it("Hello", () => {
    component.inputText = "Hello";
    component.isPalindrome();
    expect(component.result).toBe(false)
  })

  it("empty", () => {
    component.inputText = '';
    component.isPalindrome();
    expect(component.result).toBe(true);
  });

  it("A man, a plan, a canal, Panama", () => {
    component.inputText = "A man, a plan, a canal, Panama";
    component.isPalindrome();
    expect(component.result).toBe(true)
  });

  it('should identify "12321" as a palindrome', () => {
    component.inputText = '12321';
    component.isPalindrome();
    expect(component.result).toBe(true);
  });

  it('should identify "12345" as not a palindrome', () => {
    component.inputText = '12345';
    component.isPalindrome();
    expect(component.result).toBe(false);
  });


  ////////// ispalindrome2


  // 'should identify "Аргентина манит негра" as a palindrome'
  it("Аргентина манит негра", () => {
    component.inputText2 = "Аргентина манит негра";
    component.isPalindrome2();
    expect(component.result2).toBe(true)
  })

  it("Hello", () => {
    component.inputText2 = "Hello";
    component.isPalindrome2();
    expect(component.result2).toBe(false)
  })

  it("empty", () => {
    component.inputText2 = '';
    component.isPalindrome2();
    expect(component.result2).toBe(true);
  });


  it("A man, a plan, a canal, Panama", () => {
    component.inputText2 = "A man, a plan, a canal, Panama";
    component.isPalindrome2();
    expect(component.result2).toBe(true)
  });

  it('should identify "12321" as a palindrome', () => {
    component.inputText2 = '12321';
    component.isPalindrome2();
    expect(component.result2).toBe(true);
  });

  it('should identify "12345" as not a palindrome', () => {
    component.inputText2 = '12345';
    component.isPalindrome2();
    expect(component.result2).toBe(false);
  });



});


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  firstNumber = 0;
  secondNumber = 0;
  operation = '';
  result = 0;

  reset(): void {
    this.operation = '';
    this.result = 0;
  }

  calculate(op: string): void {
    this.operation = op;

    if (op === '+') {
      this.result = this.firstNumber + this.secondNumber;
    } else if (op === '-') {
      this.result = this.firstNumber - this.secondNumber;
    } else if (op === '*') {
      this.result = this.firstNumber * this.secondNumber;
    } else if (op === '/') {
      this.result = this.firstNumber / this.secondNumber;
    }
  }
}

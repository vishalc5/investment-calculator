import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UserInput} from "./userInput";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() userInput = new EventEmitter<UserInput>();

  formData = {
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: '',
  }

  onSubmit() {
    this.userInput.emit({
      initialInvestment: parseFloat(this.formData.initialInvestment),
      annualInvestment: parseFloat(this.formData.annualInvestment),
      duration: parseFloat(this.formData.duration),
      expectedReturn: parseFloat(this.formData.expectedReturn)
    })
  }
}

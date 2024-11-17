import {Component} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserInputComponent} from "./user-input/user-input.component";
import {InvestmentResults, InvestmentResultsComponent} from "./investment-results/investment-results.component";
import {UserInput} from "./user-input/userInput";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  annualData: InvestmentResults[] = [];

  calculateInvestmentResults(userInput: UserInput) {
    let investmentValue = userInput.initialInvestment;

    for (let i = 0; i < userInput.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (userInput.expectedReturn / 100);
      investmentValue += interestEarnedInYear + userInput.annualInvestment;
      const totalInterest =
        investmentValue - userInput.annualInvestment * year - userInput.initialInvestment;
      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: userInput.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: userInput.initialInvestment + userInput.annualInvestment * year,
      });
    }
  }
}

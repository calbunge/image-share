import { Component } from '@angular/core';
import { FormControl, FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  firstName = 'First Name';
  lastName = 'Last Name';

  submit(){
    console.log(this.firstName);
    console.log(this.lastName);
  }
}

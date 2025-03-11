import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Import FormsModule
  templateUrl: './login/login.component.html',
  styleUrls: ['./login/login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('Login Data:', this.credentials);
    // Add your login logic here
  }
}
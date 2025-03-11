import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule], // Import FormsModule
  templateUrl: './register/register.component.html',
  styleUrls: ['./register/register.component.css']
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Registration Data:', this.user);
    // Add your registration logic here
    this.router.navigate(['/login']); // Navigate to Login after registration
  }
}
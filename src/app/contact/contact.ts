import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // for ngModel
import { HttpClient, HttpClientModule } from '@angular/common/http'; // for API call

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  name = '';
  email = '';
  message = '';
  successMessage = '';

  constructor(private http: HttpClient) {}

  sendMessage() {
    if (!this.name || !this.email || !this.message) {
      alert('Please fill all fields!');
      return;
    }

    // Replace with your backend API URL or EmailJS endpoint
    const payload = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.http.post('https://your-backend-api/send', payload).subscribe({
      next: () => {
        this.successMessage = 'Message sent successfully!';
        this.name = '';
        this.email = '';
        this.message = '';
      },
      error: () => {
        this.successMessage = 'Oops! Something went wrong.';
      }
    });
  }
}

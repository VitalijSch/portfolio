import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactData } from '../interfaces/contact-data';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  http = inject(HttpClient);

  contactData: ContactData = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  mailTest: boolean = true;
  isChecked: boolean = false;
  showErrorCheckbox: boolean = false;

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      if (this.isChecked) {
        this.http.post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {
              ngForm.resetForm();
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => console.info('send post complete'),
          });
        this.handleCheckbox();
        this.showErrorCheckbox = false;
      } else {
        this.showErrorCheckbox = true;
      }
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      if (this.isChecked) {
        ngForm.resetForm();
        this.handleCheckbox();
        this.showErrorCheckbox = false;
      } else {
        this.showErrorCheckbox = true;
      }
    }
  }

  handleCheckbox() {
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      this.showErrorCheckbox = false;
    }
  }
}

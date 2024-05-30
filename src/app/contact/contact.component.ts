import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactData } from '../interfaces/contact-data';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  http: HttpClient = inject(HttpClient);

  contactData: ContactData = {
    name: '',
    email: '',
    message: '',
  };

  post: Post = {
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

  public onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      if (this.isChecked) {
        this.submitContactForm(ngForm);
      } else {
        this.showErrorCheckbox = true;
      }
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      if (this.isChecked) {
        this.resetFormAndCheckboxes(ngForm);
      } else {
        this.showErrorCheckbox = true;
      }
    }
  }

  private submitContactForm(ngForm: NgForm) {
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
  }

  private resetFormAndCheckboxes(ngForm: NgForm) {
    ngForm.resetForm();
    this.handleCheckbox();
    this.showErrorCheckbox = false;
  }

  public handleCheckbox() {
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      this.showErrorCheckbox = false;
    }
  }
}

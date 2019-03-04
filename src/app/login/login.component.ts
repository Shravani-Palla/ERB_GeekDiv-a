import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    loginForm: FormGroup;
    msgs = [];

    constructor(private router: Router, private fb: FormBuilder) { }

    ngOnInit() {
        this.createLoginForm();
    }

    login() {
        let formData = this.loginForm.getRawValue();
        if (formData.email == 'emp@ggktech.com') {
            this.router.navigate(['/my-referrals']);
        } else if (formData.email == 'HR@ggktech.com') {
            this.router.navigate(['/admin/dashboard']);
        } else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Invalid credentials' });
        }
    }

    createLoginForm() {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}

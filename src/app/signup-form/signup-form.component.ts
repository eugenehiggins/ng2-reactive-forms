import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../signup';

@Component({
    selector: 'signup-form',
    template: `
        <form novalidate (ngSubmit)="onSubmit(user)" [formGroup]="user">
            <label>
                <span>Full name</span>
                <input
                    type="text"
                    formControlName="name"
                    placeholder="Your full name">
            </label>
            <div
                class="error"
                *ngIf="user.get('name').hasError('required') && user.get('name').touched">
                Name is required
            </div>
            <div
                class="error"
                *ngIf="user.get('name').hasError('minlength') && user.get('name').touched">
                Minimum of 2 characters
            </div>
            
            <div formGroupName="account">
                <label>
                    <span>Email address</span>
                    <input
                        type="email"
                        formControlName="email"
                        placeholder="Your email address">
                </label>
                <label>
                    <span>Confirm address</span>
                    <input
                        type="email"
                        formControlName="confirm"
                        placeholder="Confirm your email address">
                </label>
            </div>
            <div
                class="error"
                *ngIf="user.get('account').get('email').hasError('required') && user.get('account').get('email').touched">
                Email is required
            </div>
            <div
                class="error"
                *ngIf="user.get('account').get('confirm').hasError('required') && user.get('account').get('confirm').touched">
                Confirming email is required
            </div>
            <button type="submit" [disabled]="user.invalid">Sign up</button>
        </form>
    `
})
export class SignupFormComponent implements OnInit {

    user: FormGroup;

    constructor() {
    }

    ngOnInit() {
        this.user = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(2)]),
            account: new FormGroup({
                email: new FormControl('', Validators.required),
                confirm: new FormControl('', Validators.required)
            })
        })
    }

    onSubmit({ value, valid }: { value: User, valid: boolean}){
        console.log(value, valid);
    }

}

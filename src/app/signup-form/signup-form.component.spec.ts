/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
ç
import { SignupFormComponent } from './signup-form.component';

describe('SignupFormComponent', () => {
    let component: SignupFormComponent;
    let fixture: ComponentFixture<SignupFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignupFormComponent],
            imports: [
                ReactiveFormsModule,
                FormsModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SignupFormComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('form invalid when empty', () => {
        expect(component.user.valid).toBeFalsy();
    });

    it('name field validity', () => {
        let name = component.user.controls['name'];
        //expect(name.valid).toBeFalsy();

        let errors = {};
        name.setValue("");
        errors = name.errors || {};
        //expect(errors['required']).toBeTruthy();
        console.log("howdy", errors);
        expect(errors['minLength']).toBeTruthy();
    });

    // it('email field validity', () => {
    //     let errors = {};
    //     let email = component.user.controls['account'].controls['email'];
    //
    //     email.setValue('eee');
    //     errors = email.errors || {};
    //     console.log(email.errors)
    //     expect(errors['pattern']).toBeTruthy();
    // })
});

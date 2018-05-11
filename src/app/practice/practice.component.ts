import { Component,OnInit} from "@angular/core";
import { FormGroup, FormControl, NgForm, Validators, FormArray } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'app-practice',
    templateUrl: './practice.component.html'
    
})
export class PracticeComponent implements OnInit {
    toggleUnless: boolean = false;
    value: number = 10;

    //Reactive form
    genders: string[] = ["Male", "Female"]
    signUpForm: FormGroup;

    //custom validator
    forbiddenUserNames = ['Reshu', 'Test'];

    // async validator
    forbiddenEmail = ['test@test.com', 'reshu@test.com']

    //animations
    state = "normal";

    ngOnInit() {
        this.signUpForm = new FormGroup({
            'username': new FormControl(null, [Validators.required, this.validateUserName.bind(this)]),
            'email': new FormControl(null, [Validators.required, Validators.email], this.validateEmail.bind(this)),
            'gender': new FormControl('Male'),
            'userData': new FormGroup({
                'testGroup': new FormControl(null, Validators.required),
            }),
            'hobbies': new FormArray([])
        });

        //to listen value change
        // this.signUpForm.valueChanges.subscribe(
        //     (value)=>console.log(value)
        // )

        //To listen status
        // this.signUpForm.statusChanges.subscribe(
        //     (status)=>console.log(status)
        // )

        //To set value of whole form
        // this.signUpForm.setValue({
        //     'username': 'reshu garg',
        //     'email': 'reshu@sit.com',
        //     'gender': 'Femail',
        //     'userData': {
        //         'testGroup': 'testGroupName'
        //     },
        //     'hobbies': []
        // })

        //To set value of part of form
        this.signUpForm.patchValue({
            'userData': {
                'testGroup': 'testGroupName'
            }
        })
    }

    submitLogin(loginForm: NgForm) {
        console.log(loginForm);
        //To reset form
        this.signUpForm.reset();
    }

    onAddHobby() {
        let hobbyControl = new FormControl(null, Validators.required);
        (<FormArray>this.signUpForm.get('hobbies')).push(hobbyControl);
    }

    validateUserName(control: FormControl): { [s: string]: boolean } {
        if (this.forbiddenUserNames.indexOf(control.value) >= 0) {
            return { 'nameForbidden': true }
        }
        return null;
    }

    validateEmail(control: FormControl): Promise<any> | Observable<any> {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.forbiddenEmail.indexOf(control.value) >= 0) {
                    resolve({ 'emailForbidden': true });
                }
                else {
                    resolve(null);
                }
            }, 1500);
        })
        return promise;
    }
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    msgs: Message[] = [];
    
    constructor(private formBuilder: FormBuilder, private router: Router) {}
    
    ngOnInit() {
        this.loginForm = this.formBuilder.group ({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    
    login(loginForm) {
        this.msgs = [];

        let username = loginForm.controls.username.value;
        let password = loginForm.controls.password.value;
        
        if (username == "mertcan.diken@primetek.com" && password == "123") {
            this.router.navigateByUrl('/crud');
        } else {
            this.msgs.push({severity:'error', summary:'Error Message', detail:'Login failed'});    
        }
    }
    
}

export interface Message {
    severity?: string;
    summary?: string;
    detail?: string;
}

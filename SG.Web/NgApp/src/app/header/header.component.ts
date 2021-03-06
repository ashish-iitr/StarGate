﻿import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [AuthService]
})
export class HeaderComponent implements OnInit {

    constructor(private _authService: AuthService) {
    }

    ngOnInit() {

    }

    SignUpSignInSocial() {
        this._authService.socialLogin();
    }

    SignUpSignInO365() {
        this._authService.internalLogin();
    }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Http, Headers, Response } from '@angular/http';

@Injectable()

export class AuthService {

    constructor(private http: Http) { }

    internalLogin() {
        return this.http.get('/Account/SignUpSignInO365')
            .map((response: Response) => {
                //login successfull 
                let user = response.json();
                console.log(user);
            })
            .catch(this.handleError);
    }

    socialLogin() {
        return this.http.get('/Account/SignUpSignInO365')
            .map((response: Response) => {
                //login successfull 
                let user = response.json();
                console.log(user);
            })
            .catch(this.handleError);
    }

    signOut() {
        return this.http.get('/Account/SignOut')
            .map((response: Response) => {
                //logout successfull 
            })
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
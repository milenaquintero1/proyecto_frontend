// ANGULAR
import { Component } from '@angular/core';

// TS
import { User } from '../_models/user';

// SERVICE
import { AccountService } from '../_services/account.service';



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
  })
export class HomeComponent {
    user: User | null;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
}
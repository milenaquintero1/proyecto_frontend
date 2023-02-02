// Angular.
import { Injectable } from '@angular/core';

// Angular Material.
import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable({ providedIn: 'root' })
export class MessageService {

  constructor( private matSnackback: MatSnackBar ) { }

  errorMessage(error: string): void {
    this.matSnackback.open(error, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['message-error-style']
    });
  }
}
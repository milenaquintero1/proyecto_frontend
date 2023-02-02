import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';

import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from '../../core/services/authentication.service';
import { RouterModule } from '@angular/router';
import { ColeccionComponent } from './components/coleccion/coleccion.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ColeccionComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [AuthenticationService]
})
export class DashboardModule { }

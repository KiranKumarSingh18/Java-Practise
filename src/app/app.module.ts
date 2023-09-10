import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShowbooksComponent } from './showbooks/showbooks.component';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module';
import { ShowbooksModule } from './showbooks/showbooks.module';
import { AuthService } from './auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { CartModule } from './cart/cart.module';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    // AdminComponent,
    // CartComponent,
    // LoginComponent,
    // RegistrationComponent,
    // ShowbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegistrationModule,
    ShowbooksModule,
    CartModule,
    AdminModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

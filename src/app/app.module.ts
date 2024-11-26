import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserService } from './service/user.service'; // Import UserService

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent, // Declare components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Import FormsModule
  ],
  providers: [UserService], // Provide UserService
  bootstrap: [AppComponent],
})
export class AppModule {}

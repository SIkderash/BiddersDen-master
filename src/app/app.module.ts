import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { SortComponent } from './sort/sort.component';
import { SellComponent } from './sell/sell.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { UserService } from './user.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FooterComponent } from './footer/footer.component';
import { BidsComponent } from './bids/bids.component';
<<<<<<< Updated upstream
import { ChatComponent } from './chat/chat.component';
=======
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SortComponent,
    NavbarComponent,
    ProductsComponent,
    SellComponent,
    SignupComponent,
    SidebarComponent,
    UserProfileComponent,
    FooterComponent,
    BidsComponent,
<<<<<<< Updated upstream
    ChatComponent,
=======
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

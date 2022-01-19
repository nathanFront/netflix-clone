import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { MovieImagenPipe } from './pipes/movieImagenPipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ModalComponent } from './modal/modal.component';
import { SliderComponent } from './slider/slider.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserViewComponent } from './user-view/user-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieImagenPipe,
    FooterComponent,
    LoginComponent,
    MainPageComponent,
    ModalComponent,
    SliderComponent,
    UserComponent,
    UserViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

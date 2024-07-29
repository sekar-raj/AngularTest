import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormsModule } from '@angular/forms';
import { userformComponent } from './userform/userform.component';
import { fieldComponent } from './field/field.component';
import { AppService } from './app.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomHttpInterceptor } from './http.intercepter';
import { HelloFormComponent } from './hello/hello.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    userformComponent,
    fieldComponent,
    HelloFormComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppService, {provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

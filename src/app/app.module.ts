import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormsModule } from '@angular/forms';
import { userformComponent } from './userform/userform.component';
import { fieldComponent } from './field/field.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    userformComponent,
    fieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

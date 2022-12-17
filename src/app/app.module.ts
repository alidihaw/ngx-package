import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from '@layouts/navbar/navbar.module';
import { FooterModule } from '@layouts/footer/footer.module';
import { CopyrightModule } from '@layouts/copyright/copyright.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    NavbarModule,
    FooterModule,
    CopyrightModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

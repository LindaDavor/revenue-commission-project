import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaySheetComponent } from './pay-sheet/pay-sheet.component';
import { HeaderComponent } from './header/header.component';
import { BackgroundimageComponent } from './backgroundimage/backgroundimage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaySheetComponent,
    HeaderComponent,
    BackgroundimageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, BackgroundimageComponent]
})
export class AppModule { }

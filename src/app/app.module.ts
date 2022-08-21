import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SaludoComponent } from './saludo/saludo.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { BannersComponent } from './banners/banners.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalleComponent } from './detalle/detalle.component';
import {HttpClientModule} from '@angular/common/http';
import { ConcatenarPipe } from './concatenar.pipe'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SaludoComponent,
    HomeComponent,
    RegistroComponent,
    BannersComponent,
    CatalogoComponent,
    DetalleComponent,
    ConcatenarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

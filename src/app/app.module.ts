import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AcercaDeComponentComponent } from './acerca-de-component/acerca-de-component.component';
import { EducacionComponentComponent } from './educacion-component/educacion-component.component';
import { HabilidadesHySComponentComponent } from './habilidades-hy-scomponent/habilidades-hy-scomponent.component';
import { HabilidadesWebComponentComponent } from './habilidades-web-component/habilidades-web-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AcercaDeComponentComponent,
    EducacionComponentComponent,
    HabilidadesHySComponentComponent,
    HabilidadesWebComponentComponent,
    ProyectosComponentComponent,
    ContactoComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

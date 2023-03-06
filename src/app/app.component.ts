import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Menu Principal';
  opciones:String[] = ['Inicio','Acerca de','Educacion','Soft & Hard Skills','Web Skills','Proyectos','Login'];
}

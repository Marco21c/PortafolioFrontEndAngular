import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades-hy-scomponent',
  templateUrl: './habilidades-hy-scomponent.component.html',
  styleUrls: ['./habilidades-hy-scomponent.component.css']
})
export class HabilidadesHySComponentComponent {
      habilidades:any[]=[{nombre:'Nivel de Ingles',porcentaje:65,ari:'"65"'},{nombre:'Resolucion de problemas',porcentaje:80,ari:'"65"'},
      {nombre:'Creatividad',porcentaje:70,ari:'"65"'},{nombre:'Analisis de Sistemas',porcentaje:80,ari:'"65"'},{nombre:'Adaptabilidad e Integridad',porcentaje:85,ari:'"65"'}];
}

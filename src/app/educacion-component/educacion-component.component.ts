import { Component } from '@angular/core';

@Component({
  selector: 'app-educacion-component',
  templateUrl: './educacion-component.component.html',
  styleUrls: ['./educacion-component.component.css']
})
export class EducacionComponentComponent {
 
  instituciones:any[]= [{titulo:'Secundario Nº 36',descripcion:'Some quick example text to build on the card title and make up the bulk of the',imgUrl:'https://png.pngtree.com/png-clipart/20190903/original/pngtree-cartoon-school-png-image_4426439.jpg'},{
    titulo:'Unju - Facultad de Ingenieria',descripcion:'Some quick example text to build on the card title and make up the bulk of the',imgUrl:'https://fi.unju.edu.ar/images/LOGOS-FI-UNJU/logo-fi-unju-gran-formato-vertical-3000x2746.jpg'},{
      titulo:'Argentina Programa',descripcion:'Some quick example text to build on the card title and make up the bulk of the',imgUrl:'https://argentinaprograma.inti.gob.ar/pluginfile.php/232166/course/overviewfiles/MINIATURA-ARGEPROGR.jpg'}];
};

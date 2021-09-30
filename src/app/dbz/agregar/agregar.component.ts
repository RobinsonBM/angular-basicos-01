import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  // @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();
   constructor (private dbzService: DbzService) {}

  agregar () {
    //Validar el metodo, si no se agrego nada se sale del metodo
    if (this.nuevo.nombre.trim().length === 0) {return;}

    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregraPersonaje( this.nuevo );

    this.nuevo = {nombre :'', poder:0}  //Reinicia los input con estos valores (Purgar el form)
  }
}

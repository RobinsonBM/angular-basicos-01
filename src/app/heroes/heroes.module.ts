import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule ({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  exports: [        //Que cosas quiero hacer publicas fuera de este module
    ListadoComponent
  ],
  imports: [
    CommonModule    //Simepre
  ]
})
export class HeroesModule {

}

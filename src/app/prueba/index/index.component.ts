import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../services/prueba.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {

  data = {
    jsonParametros:{
      fecha_produccion:"2019-12-19"
    },
    jsonCabecera:{
      fecha_produccion:"2019-12-19",
      tipo_integracion:"N_DES",
      tipo_proceso:"NO"
    },
    detalle:[
      {
        id_posicion:"1",
        campoa:"campoa"
      },
      {
        id_posicion:"2",
        campoa:"campoa"
      },

    ]
  }

  constructor(private pruebaService:PruebaService) { }

  ngOnInit(): void {
    this.pruebaService.obtenerIdIntegracion();
    this.pruebaService.obtenerData();
  }

  enviarData():void{
    this.pruebaService.enviarData(this.data)
        .subscribe(resp=>{
          console.log(resp);
        })
  }

}

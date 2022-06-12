import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from "socket.io-client";


@Injectable({
  providedIn: 'root',
})
export class PruebaService {

    socket = io("http://localhost:8080");
    notificaciones:any[] = [];

    baseUrl = "http://localhost:9001/sap/enviar";
 
  constructor(
    private http:HttpClient
  ) {}
    
    obtenerIdIntegracion(){
      this.socket.on('id-integracion',(id_integracion)=>{
        console.log(id_integracion);
        //this.notificaciones = notificaciones;
      })
    }

    obtenerData(){
        this.socket.on('connect', () => {
            //console.log("conectado!"); 
        });

        this.socket.on('recibir-notificaciones',(notificaciones)=>{
            console.log(notificaciones);
            this.notificaciones = notificaciones;
        })
    }
    enviarData(payload:any):Observable<any>{
      return this.http.post<Observable<any>>(this.baseUrl,payload);
    }
}
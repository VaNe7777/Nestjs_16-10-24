import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entities/Student.entity';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}



  // ENDPOINT: Puerta de proyecto
  //          - Acepta peticiones de clientes bajo una URL Semantica
  //          - Retornar el(los) datos esperados a cliente

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Segunso ENDPOINT - ESTRUCTURAR UN ENDPOINT
  //         1. Verbo (Metodo) HTTP sobre el cual recibir
  //            junto a la ruta a invocar
  //            Métodos disponibles: GET, POST, PUT, DELETE
  //         2. Nombre/ Firma del método a ejecutar 
  //            cuando se invoque el endpoint

  @Get("/ficha")
  getFicha(): String{
    return "endpoint de la ficha 2902093"
  }



  //  Tercer endpoint 
  //  Parametro de ruta = @Param 
  // "+"" = Conversion de tipo de dato, en el ej de string a number

    @Get("/identificacion/:id/ciudad/:ciudad")
    identificacion(@Param ('id') id:string,
                   @Param ('ciudad') ciudad:string,
                   @Query ('nombre') nombre:string,
                   @Query ('edad') edad:number): Student{

      return new Student(+id, nombre , edad, ciudad);

    }

}



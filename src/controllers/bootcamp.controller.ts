import { Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';

@Controller('bootcamp')
export class BootcampController {

    @Get()
    getAllBootCamp(): string{
        return "Aqui se mostraran todos los bootcamps"
    }


    @Get(":id")
    getBootcampById(@Param('id') id:string) : string{
        return `Aqui se va a mostar el bootcamp con id: ${id}`
    }

    @Post(":id")
    createBootcamp(): string{
        return "Aqui se van a crear bootcamps"
    }

    @Put(":id")
    updateBootcamp(@Param ('id') id: string) : string{
        return `aqui se va a actualizar bootcamp : ${id}`
    } 

    @Delete(":id")
    deleteBootcamp (@Param ("id") id: string) : string{
        return `aqui se va a eliminar el bootcamp: ${id}`
    }

}

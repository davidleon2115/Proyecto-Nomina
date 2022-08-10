console.log('oli');

class Persona{
    private nombre:string;
    private edad:number;
    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }
    public GetInfo(){
        return this.nombre +' '+this.edad;
    }
}

class Empleados extends Persona{
    private sueldo:number;
    constructor(sueldo:number, nombre:string, edad:number){
        super(nombre,edad);
        this.sueldo= sueldo;
    }
    getSueldo(){
        return this.sueldo;
    }
}


// Ejemplo de colaboración
class Jefe{
    private informacion:string;
    private nombre :string;
    private cargo:string;
    private edad:number;
    constructor(nombre:string,edad:number, cargo:string){
        this.nombre = nombre;
        this.cargo = cargo;
        this.edad = edad;
        this.informacion = new Persona(this.nombre, this.edad).GetInfo();
    }
    getStatus(){
        return this.informacion + ' '+ this.cargo;
    }

}
const Persona1 = new Persona('Juan', 18);
console.log(Persona1.GetInfo());
const Empleado1 = new Empleados(15000, 'Juan Daniel', 18);
console.log(Empleado1.GetInfo());
console.log(Empleado1.getSueldo());
const Boss = new Jefe('Juan', 19, 'Senior');
console.log(Boss.getStatus());

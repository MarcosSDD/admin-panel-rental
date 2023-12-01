export class Client {
    id?: string;
    rut: string;
    name: string;

    constructor(name: string, rut: string ){
        this.name = name;
        this.rut = rut;
    }
}
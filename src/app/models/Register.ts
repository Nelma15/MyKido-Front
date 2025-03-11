import { Adress } from './Adress'; 
import { Role } from './roleEnum'; 

export class Register {
    public lastName: string;
    public firstName: string;
    public email: string;
    public password: string;
    public phone: string;
    public adress: Adress;
    public role: Role;

    constructor (lastName: string,firstName: string,email: string,password: string,phone: string,adress: Adress,role: Role){
        this.lastName=lastName;
        this.firstName=firstName;
        this.email=email;
        this.password=password;
        this.phone=phone;
        this.adress=adress;
        this.role=role;
    }

}
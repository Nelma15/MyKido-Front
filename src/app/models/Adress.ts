export class Adress {
    public streetName: string;
    public streetNumber: string;
    public city: string;
    public postalCode: string;
    
    constructor(streetName: string, streetNumber: string, city: string, postalCode: string) {
        this.streetName = streetName;
        this.streetNumber = streetNumber;
        this.city = city;
        this.postalCode = postalCode;
    }
}
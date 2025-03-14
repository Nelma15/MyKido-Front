export class Child {
public lastName: string;
public firstName: string;
public birthDate: string;
public allergies: string;
public parentId: number;
public notes: string;
public  id: number;
;

constructor (lastName: string,firstName: string,birthDate: string,allergies: string,parentId: number,notes: string,id: number){
this.lastName=lastName; 
this.firstName=firstName;
this.birthDate=birthDate;
this.allergies=allergies;
this.parentId=parentId;
this.notes=notes;
this.id=id;
}
}
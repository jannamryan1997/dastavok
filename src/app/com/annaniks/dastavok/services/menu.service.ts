import {Injectable} from "@angular/core";

@Injectable()

export class MenuService{

    public isOpen:boolean;


public openMenu(){
this.isOpen=true;
console.log(this.isOpen);


}

public closeMenu(){
    this.isOpen=false;
    console.log(this.isOpen,"close");
    
}

}
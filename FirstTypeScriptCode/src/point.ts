export class Point{

    constructor(private _x?:number, private _y?:number){
    }

    draw(){
        console.log("these are the coordinates of the points: X" + this._x + " and Y: " + this._y)
    }

    // Adding properties instead of getters and setters

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    set x(value){

        if (value<0){
            throw new Error ("the value can not be less than 0");
        }
        else
        this._x=value;
    }

    set y(value){

        if (value<0){
            throw new Error ("the value can not be less than 0");
        }
        else
        this._y=value;
    } 

}
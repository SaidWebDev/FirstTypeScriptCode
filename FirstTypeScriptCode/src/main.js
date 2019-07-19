class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    draw() {
        console.log("these are the coordinates of the points: X" + this._x + " and Y: " + this._y);
    }
    // Adding properties instead of getters and setters
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set x(value) {
        if (value < 0) {
            throw new Error("the value can not be less than 0");
        }
        else
            this._x = value;
    }
    set y(value) {
        if (value < 0) {
            throw new Error("the value can not be less than 0");
        }
        else
            this._y = value;
    }
}
let p = new Point(1, 3);
let x = p.x;
p.x = 10;
p.draw();
// adding getters and setters
/*  getX(){
     return this.x;
 }

 getY(){
     return this.y;
 }
 
 setX(value){

     if (value<0){
         throw new Error ("the value can not be less than 0");
     }
     else
     this.x=value;
 }

 setY(value){

     if (value<0){
         throw new Error ("the value can not be less than 0");
     }
     else
     this.x=value;
 } */

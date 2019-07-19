class Point{

    constructor(private _x?:number, private _y?:number){
    }

    draw(){
        console.log("these are the coordinates of the points: X" + this.x + " and Y: " + this.y)
    }

    // adding getters and setters

    getX(){
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
    }

}

let p= new Point(1,3);
p.getX();
p.setX(10);
p.draw();


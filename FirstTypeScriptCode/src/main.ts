class Point{

    x:number;
    y:number;

    constructor(x:number, y:number){
        this.x=x;
        this.y=y;
    }

    draw(){
        console.log("these are the coordinates of the points: X" + this.x + " and Y: " + this.y)
    }
}


let p= new Point(1,3);

p.draw();


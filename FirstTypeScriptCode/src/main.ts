class Point{

    x:number;
    y:number;

    draw(){
        console.log("these are the coordinates of the points: X" + this.x + " and Y: " + this.y)
    }
}

let p= new Point();
p.x=1;
p.y=2;
p.draw();


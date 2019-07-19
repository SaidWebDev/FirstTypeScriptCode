class Point{

    constructor(private x?:number, private y?:number){
    }

    draw(){
        console.log("these are the coordinates of the points: X" + this.x + " and Y: " + this.y)
    }
}

let p= new Point(1,3);

p.draw();


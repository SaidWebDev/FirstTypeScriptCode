var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("these are the coordinates of the points: X" + this.x + "Y: " + this.y);
    };
    return Point;
}());
var p = new Point();
p.x = 1;
p.y = 2;
p.draw();

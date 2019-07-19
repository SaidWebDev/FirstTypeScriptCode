var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("these are the coordinates of the points: X" + this.x + " and Y: " + this.y);
    };
    return Point;
}());
var p = new Point(1, 3);
p.draw();

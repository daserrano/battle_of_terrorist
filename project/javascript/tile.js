function tile(width, heigth, walk, colour)
{
    this.width = width;
    this.heigth = heigth;
    this.walk = walk;
    this.colour = colour;
}

tile.prototype.draw = function(context, x, y) {
    context.fillStyle = '#444';
    context.fillRect = (this.width*x, this.heigth*y, this.width, this.heigth);
    context.fillStyle = this.colour;
    context.fillRect(this.width*x+1, this.heigth*y+1, this.width-2, this.heigth-2);
};

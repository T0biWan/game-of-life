export default class Cell {
    constructor (context, position_x, position_y, size) {
        this.context = context
        this.position_x = position_x
        this.position_y = position_y
        this.size = size

        this.alive = Math.random() > 0.5
    }

    draw() {
        this.context.fillStyle = this.alive ? '#60A5FA' : '#303030'
        this.context.fillRect(this.position_x * this.size, this.position_y * this.size, this.size, this.size)
    }
}
import Cell from '~/scripts/cell'


export default class Game {
    constructor (canvas_id) {
        this.canvas = document.getElementById(canvas_id);
        this.context = this.canvas.getContext('2d');
        this.game_objects = [];
        this.is_running = false
        this.columns = this.canvas.width / 10
        this.rows = this.canvas.height / 10

        this.create_grid();
    }

    create_grid () {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.columns; x++) {
                this.game_objects.push(new Cell(this.context, x, y, 10));
            }
        }
    }

    is_outside_grid (x, y) { return (x < 0 || x >= this.columns || y < 0 || y >= this.rows) }

    is_alive (x, y) {
        if (this.is_outside_grid(x, y)) return false
        else return this.game_objects[this.get_index_from_position(x, y)].alive ? 1 : 0
    }

    get_index_from_position (x, y) { return x + (y * this.columns) }

    get_surrounding_cells (x, y) {
        const kernel = [
            [x - 1, y -1],            
            [x, y -1],
            [x + 1, y -1],
            [x - 1, y],
            [x + 1, y],
            [x - 1, y + 1],
            [x, y + 1],
            [x + 1, y + 1]
        ]
        
        const surrounding_cells_inside_grid = kernel.filter(position => {
            if (!this.is_outside_grid(position[0], position[1])) return position
        })
        const cells = surrounding_cells_inside_grid.map(position => this.get_index_from_position(position[0], position[1]))
        return cells
    }

    check_surroundings () {
        for (let x = 0; x < this.columns; x++) {
            for (let y = 0; y < this.rows; y++) {
                const surrounding_cell_indices = this.get_surrounding_cells(x, y)
                const number_of_cells_alive = surrounding_cell_indices.filter(cell_index => this.game_objects[cell_index].alive).length
                const cell = this.game_objects[this.get_index_from_position(x, y)]

                if (number_of_cells_alive === 2) cell.next_alive = cell.alive;
                else if (number_of_cells_alive === 3) cell.next_alive = true;
                else cell.next_alive = false;
            }
        }

        this.game_objects.map(cell => cell.alive = cell.next_alive)
    }

    tick () {
        this.check_surroundings();
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.game_objects.map(cell => cell.draw())

        if (this.is_running) {
            setTimeout(() => { window.requestAnimationFrame(() => this.tick()) }, 100)
        }
    }
}

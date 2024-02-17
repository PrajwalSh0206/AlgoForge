class MinStack {
    constructor() {
        this.high = -1
        this.stack = []
        this.min = []
    }
    push(val) {
        this.stack.push(val)
        this.high++
        if (val <= this.min[this.min.length - 1] || this.min.length == 0) this.min.push(val)
    }
    pop() {
        let value = this.stack.pop()
        if (value == this.min[this.min.length - 1])
            this.min = this.min.slice(0, this.min.length - 1)
        this.high--

    }
    top() {
        return this.stack[this.high]
    }
    getMin() {
        return this.min[this.min.length - 1]
    }
}

var obj = new MinStack()
obj.push(10)
obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()
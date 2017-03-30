var memory = new Float64Array(1024);
var head = 0;

var allocate = function(size) { // reserves a contiguous block of memory, returns pointer to first box (or null)
    if (head + size > memory.length) {
        return null;
    }
    var start = head;
    head += size;
    return start;
};

var free = function(ptr) { // frees block of reserved memory
};

var copy = function(to, from, size) { // copies `size` boxes of data
    if (from === to) {
        return;
    }
    else if (from > to) {
        // Iterate forwards
        for (var i=0; i<size; i++) {
            set(to + i, get(from + i));
        }
    }
    else {
        // Iterate backwards
        for (var i=size - 1; i>=0; i--) {
            set(to + i, get(from + i));
        }
    }
};

var get = function(ptr) { // returns value stored at a memory address
    return memory[ptr];
};

var set = function(ptr, value) { // sets value stored at a memory address
    memory[ptr] = value;
};

exports.allocate = allocate;
exports.free = free;
exports.copy = copy;
exports.get = get;
exports.set = set;

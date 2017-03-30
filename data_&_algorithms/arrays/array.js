var memory = require('./memory_simulation');

var Array = function() {
	this.length = 0;
	this._capacity = 0;
	this.ptr = memory.allocate(this.length);
}
Array.SIZE_RATIO = 3;

Array.prototype.push = function(val) {
	if (this.length >= this._capacity) {
		this._resize((this.length + 1) * Array.SIZE_RATIO);
	}
	memory.set(this.ptr + this.length, val);
	this.length++;
}

Array.prototype._resize = function(size) {
	var oldPtr = this.ptr;
	this.ptr = memory.allocate(size);
	if (this.ptr === null) {
		throw new Error('Out of memory');
	}
	memory.copy(this.ptr, oldPtr, this.length);
	memory.free(oldPtr);
	this._capacity = size;
}

Array.prototype.get = function(idx) {
	if (idx < 0 || idx >= this.length) {
		throw new Error('Index error');
	}
	console.log(memory.get(this.ptr + idx));
	return memory.get(this.ptr + idx);
}

Array.prototype.pop = function() {
	if (this.length == 0) {
		throw new Error('Index error');
	}
	var value = memory.get(this.ptr + this.length - 1);
	this.length--;
	console.log(value);
	return value;
}

Array.prototype.insert = function(idx, val) {
	if (idx < 0 || idx >= this.length) {
		throw new Error('Index error');
	}

	if (this.length >= this._capacity) {
		this._resize((this.length + 1) * Array.SIZE_RATIO);
	}

	memory.copy(this.ptr + idx + 1, this.ptr + idx, this.length - idx);
	memory.set(this.ptr + idx, val);
	this.length++
}

Array.prototype.remove = function(idx) {
	if (idx < 0 || idx >= this.length) {
		throw new Error('Index error');
	}
	memory.copy(this.ptr + idx, this.ptr + idx + 1, this.length - idx - 1);
	this.length--;
}

Array.prototype.shift = function() {
	memory.copy(this.ptr, this.ptr + 1, this.length - 1);
	this.length--;
}

Array.prototype.unshift = function(val) {
	if (this.length >= this._capacity) {
		this._resize((this.length + 1) * Array.SIZE_RATIO);
	}

	memory.copy(this.ptr + 1, this.ptr, this.length)
	memory.set(this.ptr, val);
	this.length++
}

var colors = new Array;
colors.push(1);
colors._resize(10);
colors.push(17);
colors.push(1001);
colors.push(6);
console.log(colors);
colors.get(0);
colors.unshift(8);
console.log(colors);
colors.get(0);
colors.get(1);

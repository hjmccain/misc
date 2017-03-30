// constructor function
var HashMap = function(initialCapacity) {
	this.length = 0;
	this._slots = []; // array _slots will hold data
	this._capacity = initialCapacity || 8;
	this._deleted = 0;
};

HashMap.MAX_LOAD_RATIO = 0.9; // highest allowed ratio of length to capacity
HashMap.SIZE_RATIO = 3;

// djb2 hashing algorithm
HashMap._hashString = function(string) {
	var hash = 5381;
	for (var i = 0; i < string.length; i++) {
		hash = (hash << 5) + hash + string.charCodeAt(i);
		hash = hash & hash
	}
	return hash >>> 0;
}

// adding items to the hash map
HashMap.prototype.set = function(key, value) {
	var loadRatio = (this.length + 1) / this._capacity;
	if (loadRatio > HashMap.MAX_LOAD_RATIO) {
		this._resize(this._capacity * HashMap.SIZE_RATIO);
	}

	var index = this._findSlot(key);
	this._slots[index] = {
		key,
		value,
		deleted: false
	};

	this.length++;
}

HashMap.prototype._findSlot = function(key) {
	var hash = HashMap._hashString(key);
	var start = hash % this._capacity;

	for (var i = start; i < start + this._capacity; i++) {
		var index = i % this._capacity;
		var slot = this._slots[index];
		if (slot === undefined || slot.key == key && !slot.deleted) {
			return index;
		}
	}
}

// resizing hash map
HashMap.prototype._resize = function(size) {
	var oldSlots = this._slots;
	this._capacity = size;
	// reset length — it will be rebuilt as items are added back
	this.length = 0;
	this._deleted = 0;
	this._slots = [];
	for (var i = 0; i < oldSlots.length; i++) {
		var slot = oldSlots[i];
		if (slot !== undefined && !slot.deleted) {
			this.set(slot.key, slot.value);
		}
	}
}

// deleting items
// to avoid problems w/ searching and finding empty slots before the end of
// the array, set property to delete instead of actually deleting an item
HashMap.prototype.remove = function(key) {
	var index = this._findSlot(key);
	var slot = this._slots[index];
	if (slot === undefined) {
		throw new Error('Key error');
	}

	slot.deleted = true;
	this.length--;
	this._deleted++;
}

// interview questions //

hashy = new HashMap();

hashy.set('', );

console.log(hashy);













//

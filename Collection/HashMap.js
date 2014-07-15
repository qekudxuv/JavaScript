function HashMap() {
    var size = 0;

    var entry = new Object();

    //add
    this.put = function (key, value) {
        if (!this.containsKey(key)) {
            size++;
        }
        entry[key] = value;
    }

    //get
    this.get = function (key) {
        if (this.containsKey(key)) {
            return entry[key];
        }
        else {
            return null;
        }
    }

    //delete
    this.remove = function (key) {
        if (delete entry[key]) {
            size--;
        }
    }

    //containsKey
    this.containsKey = function (key) {
        return (key in entry);
    }

    //containsValue
    this.containsValue = function (value) {
        for (var prop in entry) {
            if (entry[prop] == value) {
                return true;
            }
        }
        return false;
    }

    //get all values
    this.values = function () {
        var values = new Array(size);
        for (var prop in entry) {
            values.push(entry[prop]);
        }
        return values;
    }

    //get all keys
    this.keys = function () {
        var keys = new Array(size);
        for (var prop in entry) {
            keys.push(prop);
        }
        return keys;
    }

    //size
    this.size = function () {
        return size;
    }
}
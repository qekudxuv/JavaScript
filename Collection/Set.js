/**
* A Javascript Class that represents a set of unique values
* 
* Usage:
* 
* var s = new jsSet();
* 
* s.add('a1'); s.add('a2');
* 
* s.list(); >> ['a1','a2']
* 
* s.remove('a1'); s.list(); >> ['a2']
* 
* s.contains('a1') >> false
* 
* s.contains('a2') >> true
* 
* can be chained
* s.add(null).add('hello');
* 
* add array
* s.addAll([ null, 'a', 'b' ]);
* 
* remove array
* s.addAll([ null, 'a', 'b' ]);
* 
* retrieve the elements as a list
* s.list();
* 
* size of the set
* s.size();
* 
*/
function Set() {

    // null can also be an element of the set, but needs
    // a separate indication to differentiate it from
    // the string "null" as well
    this.isNullAdded = false;

    // private member variable hence no 'this'
    var map = {};

    //  Scope for optimization
    //  could be cached instead of generating each time
    //  this.uniqueList = [];

    //  returns true if the element is in this set, false otherwise
    this.contains = function (key) {

        if (key === null)
            return this.isNullAdded;
        else if (key === undefined)
            return false;
        else
            return map[key] ? true : false;
    };

    //  adds the element to the set
    this.add = function (val) {

        if (val === null)
            this.isNullAdded = true;
        else if (val !== undefined)
            map[val] = true;
        return this;
    };

    //  adds all the elements of the array to the set
    this.addAll = function (val) {

        if (val !== null && val !== undefined && val instanceof Array) {
            for (var idx = 0; idx < val.length; idx++) {
                this.add(val[idx]);
            }
        }
        return this;
    };

    //  removes the specified element from the set
    this.remove = function (val) {
        if (val === null)
            this.isNullAdded = false;
        else if (val !== undefined)
            delete map[val];
        return this;
    };

    //  removes all the element in the array from the set
    this.removeAll = function (val) {

        if (val !== null && val !== undefined && val instanceof Array) {
            for (var idx = 0; idx < val.length; idx++) {
                console.log('val: %s:%s', idx, val[idx]);
                this.remove(val[idx]);
            }
        }
        return this;
    };

    //  empties the set of all values
    this.clear = function () {

        this.isNullAdded = false;
        map = {};
        return this;
    };

    //  returns the number of elements in the set
    this.size = function () {

        return this.list().length;
    };

    //  returns true if the set is empty, false otherwise
    this.isEmpty = function () {

        return this.list().length > 0 ? false : true;
    };

    //  returns the elements of the set as a list
    this.list = function () {
        var arr = [];

        if (this.isNullAdded)
            arr.push(null);

        for (o in map) {
            // protect from inherited properties such as
            //  Object.prototype.test = 'inherited property';
            if (map.hasOwnProperty(o))
                arr.push(o);
        }
        return arr;
    };
};
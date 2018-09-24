const assert = require("assert");
describe("Array API exploration", function() {

    it("indexOf vs. includes", function() {
        let arr = [1, NaN, 2];

        assert(arr.includes(NaN), "Includes can find NaNs, uses SameValueZero");
        assert(arr.indexOf(NaN) === -1, "indexOf cannot find NaN");
    });
    it("indexOfNaN - finding NaN index in Array", function() {
        let arr = [1, NaN, 2];
        // this works
        assert(indexOfNaN(arr) === 1);

        function indexOfNaN(arr) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== arr[i]) return i;
            }
            return -1;
        }
    });

    it("TODO: indexOf(NaN) - indexOf with SameValueZero", function() {
        let arr = [1, NaN, 2, 0, -0, 'afoj'];

        assert(indexOf(arr, 1) === 0);
        assert(indexOf(arr, NaN) === 1);
        assert(indexOf(arr, 0) === 3);
        assert(indexOf(arr, -0) === 3);
        assert(indexOf(arr,'afoj')=== 5);

        function indexOf(arr, what) {
            for (let i = 0; i < arr.length; i++) {
              if (typeof(what) === 'number' &&  'number' === typeof(arr[i]) && isNaN(what) && isNaN(arr[i])){
                return i;
              }
              else if (arr[i] === what) {
                  return i;
              }
            }
        }
    });
    it("TODO: indexOf(NaN) - indexOf with SameValue", function() {
        let arr = [1, NaN, 2, 0, -0, 'ahoj'];

       	assert(indexOf(arr, 1) === 0);

        assert(indexOf(arr, NaN) === 1);
        assert(indexOf(arr, 0) === 3);
        assert(indexOf(arr, -0) === 4); //!
        assert(indexOf(arr, 'ahoj') === 5);

        function indexOf(arr, what) {
          for (let i = 0; i < arr.length; i++) {
            if (typeof(what) === 'number' &&  'number' === typeof(arr[i]) && isNaN(what) && isNaN(arr[i]))
              return i;
            else if (arr[i] == what && (1/what === 1/arr[i]) )
              return i;
            else if (typeof(what) === 'string' && typeof(arr[i]) === 'string' && what === arr[i])
              return i;
          }
        }
    });

});

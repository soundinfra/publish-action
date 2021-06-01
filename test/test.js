var assert =  require('assert');
const {get} = require("../index.js");

describe("Get", function() {
    it("do a get", function () {
      url = 'https://jsonplaceholder.typicode.com/users'
      assert.equal(get("hello"), url)
    });
});
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when value is not present', function() {
            assert.equal([1, 2, 3].indexOf(4), -1)
        });
    });
});

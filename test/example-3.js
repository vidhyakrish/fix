/* -------------------------------------------------------------------------------
 *  The below code has been submitted as PR, this shows all Unit Tests passing
 *  Please highlight all the issues you can find with this code.
 * -------------------------------------------------------------------------------
 */

// dependencies:
const expect = require('chai').expect;

// sample data source:
var data = [{ name: 'Brendan Eich', age: 56 }, { name: 'Douglas Crockford', age: 61 }, { name: 'Kyle Simpson', age: 41 }];

function cleanDataItAndSortIt(data) {
    var newData = [];
    for(var i = 0; i < data.length; i++) {
        var newObj = {};
        newObj.age = parseInt(data[i].age,10);

        if(data[i].name.split(" ").length > 2) {
            data[i].name = data[i].name.split(" ")[0] + " " + data[i].name.split(" ")[0];
        }
        newObj.firstName = data[i].name.split(" ")[0];
        newObj.secondName = data[i].name.split(" ")[1];
        newData.push(newObj);
    }
    return newData.sort(function(a, b) {
        return a.secondName > b.secondName;
    });
}

// unit test example, these are just an example:
describe.skip('Sanitising data function', function() {

    var newData;

    beforeEach(function() {
         newData = cleanDataItAndSortIt(data);
    });

    it('SHOULD return an array', function() {
        expect(newData).to.be.a('array');
    });

    it('SHOULD return a list of clean data sorted by second name', function() {
        const obj = { secondName: 'Crockford' };
        expect(newData[0].secondName).equal(obj.secondName);
    });

});

/* Please consider the following:
 > clean code
 > functional programming
 > seperation of concerns
 > defensive coding
*/

// dependencies:
const expect = require('chai').expect;

 // implement this:
 function b(x){
   // return "b"+ x;
   //  return (x) =>  "bo" + x;
  () =>  (x) => return "boo" + x;
}
// unit tests:
describe("implement function b", function() {
    it("SHOULD work for the following cases", function() {
      console.log(b()("m"));
        // expect(b("m")).to.equal("bm");
        // expect(b()("m")).to.equal("bom");
        expect(b()()("m")).to.equal("boom");
        // expect(b()()()("m")).to.equal("booom");
        // expect(b()()()()("t")).to.equal("boooot");
    });
});

 // dependencies:
const expect = require('chai').expect;

 // implement this:

 function b(lastLetter, prefix = "b") {
  if (lastLetter) {
    //if we're ending the chain, return everything so far with the last letter on the end
    return prefix + lastLetter;
  }
  //if not, then return   this function with a slightly longer prefix
  return lastLetter => b(lastLetter, prefix + "o");
}
// unit tests:
describe("implement function b", function() {
  it("SHOULD work for the following cases", function() {
    console.log(b()("m"));
    expect(b("m")).to.equal("bm");
    expect(b()("m")).to.equal("bom");
    expect(b()()("m")).to.equal("boom");
    expect(b()()()("m")).to.equal("booom");
    expect(b()()()()("t")).to.equal("boooot");
  });
});

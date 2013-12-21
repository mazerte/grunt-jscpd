var chai = require('chai')
  , expect = chai.expect
  , should = chai.should()
  , chaiFS = require('chai-fs');

chai.use(chaiFS);

describe("Grunt JSCPD", function() {

  it("javascript", function() {

    expect("test/js-output.xml").to.be.a.file().and.not.empty;

  });

  it("coffeescript", function() {

    expect("test/coffee-output.xml").to.be.a.file().and.not.empty;

  });

});
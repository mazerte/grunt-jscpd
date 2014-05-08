var chai = require('chai'), 
    expect = chai.expect,
    fs = require('fs'),
    chaiFS = require('chai-fs');

chai.use(chaiFS);

describe("Grunt JSCPD", function() {

  describe("Javascript", function() {

    it("Generates non-empty file with JSCPD results", function() {

      expect("test/js-output.xml").to.be.a.file().and.not.empty;

    });

    it("Generates non-empty file with JSCPD results in unexisted output dir", function () {

      expect("test/unexisted/output/dir/js-output.xml").to.be.a.file().and.not.empty;

    });

    var javascriptOutput = fs.readFileSync("test/js-output.xml", 'utf8');
    it("Identifies code duplication in 'file_3.js'", function() {

      expect(javascriptOutput).to.contain("file_3.js");

    });

    var javascriptOutputExcludeString = fs.readFileSync("test/js-exclude-string-output.xml", 'utf8');
    it("Honours option `exclude` of type string", function() {

      /*
       * Requires true negative test above to have passed (js-output.xml needs to have file_3.js)
       * otherwise this test is meaningless
       */

      // True positive Test
        expect(javascriptOutputExcludeString).not.to.contain("file_3.js");
    });

    var javascriptOutputExcludeArray = fs.readFileSync("test/js-exclude-array-output.xml", 'utf8');
    it("Honours option `exclude` of type array", function() {

      /*
       * Requires true negative test above to have passed (js-output.xml needs to have file_3.js)
       * otherwise this test is meaningless
       */

      // True positive Test
        expect(javascriptOutputExcludeArray)
            .not.to.contain("file_2.js")
            .and.not.to.contain("file_3.js");
    });

  });

  describe("Coffeescript", function() {

    it("Generates non-empty file with JSCPD results", function() {

      expect("test/coffee-output.xml").to.be.a.file().and.not.empty;

    });

  });
});
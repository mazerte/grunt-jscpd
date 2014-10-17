Grunt JSCPD
===========

[![Build Status](https://travis-ci.org/mazerte/grunt-jscpd.png?branch=master)](https://travis-ci.org/mazerte/grunt-jscpd)
[![Dependency Status](https://gemnasium.com/mazerte/grunt-jscpd.png)](https://gemnasium.com/mazerte/grunt-jscpd)
[![Code Climate](https://codeclimate.com/github/mazerte/grunt-jscpd.png)](https://codeclimate.com/github/mazerte/grunt-jscpd)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

[![NPM](https://nodei.co/npm/grunt-jscpd.png?downloads=true&stars=true)](https://nodei.co/npm/grunt-jscpd/) 

Grunt task for use [jscpd](https://github.com/kucherenko/jscpd/).
`jscpd` is a tool for detect copy/past "design pattern" in JavaScript and CoffeeScript code.

Installation
------------

```bash
npm install grunt-jscpd
```

```javascript
// Gruntfile.js
grunt.loadNpmTasks('grunt-jspcpd');
```

Usage
-----

Create a "jscpd" section in your Gruntfile
```javascript
// Gruntfile.js
grunt.initConfig({
  jscpd: {
    javascript: {
      path: 'lib/js/',
      exclude: ['globalize/**', 'plugins/**']
    }
  }
}
```

Example with coffee option
```coffeescript
// Gruntfile.js
grunt.initConfig({
  jscpd: {
    coffeescript: {
      options: {
        coffee: true
      },
      path: 'src/coffee/'
    }
  }
}
```

Options
-------

### Data

#### path
Type: `String`

Path to source folder

#### exclude
Type: `String|Array` - optional

Glob pattern for files to exclude from the analysis. 

#### output
Type: `String` - optional 

Path to the output file

#### exclude
Type: `String` or `Array` - optional

Path to directory or files to ignore

### Options

#### coffee
Type: `Boolean` - `default: false`

Source type is in CoffeeScript language

#### min-lines
Type: `Number` - `default: 5`

Min size of duplication in code lines to include it in report

#### min-tokens
Type: `Number` - `default: 70`

Min size of duplication in code tokens

Thanks
------

Thanks to [Andrey Kucherenko](https://github.com/kucherenko) to [jscpd](https://github.com/kucherenko/jscpd)





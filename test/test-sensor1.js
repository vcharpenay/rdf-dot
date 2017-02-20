var RDF = require('rdf');
// var DOT = require('rdf-dot');
var DOT = require('../src/DOTSerializer.js');
var fs = require('fs');

var data = fs.readFileSync('test/sensor1.nt', 'utf-8');
var parser = new RDF.TurtleParser();
var serializer = new DOT.DOTSerializer();
parser.parse(data, g => {
  var dot = serializer.serialize(g);
  fs.writeFileSync('test/sensor1.dot', dot, 'utf-8');
  // then, run "dot -Tpng -osensor1.png sensor1.dot"
});

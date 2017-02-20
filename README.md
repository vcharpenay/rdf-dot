# RDF DOT Serializer

`rdf-dot` is an npm package that provides an RDF serializer for
[DOT](http://graphviz.org/content/dot-language), a textual graph representation
format, used among others as base representation in Graphviz.

The serializer implements the
[`DataSerializer`](https://www.w3.org/TR/rdf-interfaces/#data-serializers)
interface, part of the W3C
[RDF Interfaces](https://www.w3.org/TR/rdf-interfaces) recommendation, specified
by the RDF Web Applications Working Group. This package may be used as an
extension of any package complying with the recommendation (e.g.
[`rdf`](https://www.npmjs.com/package/rdf) or
[`rdfstore`](https://www.npmjs.com/package/rdfstore)).

Usage:

```javascript
var dot = require('rdf-dot');
var graph; // must implement the Graph interface

var serializer = new dot.DOTSerializer();
var dotstring = serializer.serialize(graph);
```

(See also `test/test-sensor1.js`.)

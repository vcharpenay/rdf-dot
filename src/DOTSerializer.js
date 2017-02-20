/*
 * MIT License
 *
 * Copyright (c) 2017 Victor Charpenay
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
'use strict';

class DOTSerializer { // TODO extends DataSerializer?

  constructor(rdfEnvironment) {
    this._env = rdfEnvironment; // TODO compact URI if prefix is defined
  }

  serialize(graph) {
    var id = ''; // TODO parameterize

    var nodes = graph.toArray().reduce((nodes, t) => (nodes
      .add('"' + t.subject + '"')
      .add('"' + t.object + '"')), // TODO literals
    new Set());
    nodes = [...nodes];

    var edges = graph.toArray().map(t =>
      ('"' + t.subject + '" -> "' + t.object + '" [label="' + t.predicate + '"]'));

    var colonsep = (str, elem) => (str.length > 0 ? str + ';' + elem : elem);
    var dot = 'digraph ' + id + ' {' +
      nodes.reduce(colonsep, '') +
      edges.reduce(colonsep, '') +
    '}';

    return dot;
  };

}

exports.DOTSerializer = DOTSerializer;

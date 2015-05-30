/* */ 
"format cjs";
"use strict";

exports.__esModule = true;
exports.Func /*tion*/ = Func;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _regenerator = require("regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _types = require("../../../types");

var t = _interopRequireWildcard(_types);

var _astTypes = require("ast-types");

var metadata = {
  group: "regenerator"
};

exports.metadata = metadata;

function Func(node) {
  if (node.async || node.generator) {
    // Although this code transforms only the subtree rooted at the given
    // Function node, that node might contain other generator functions
    // that will also be transformed. It might help performance to ignore
    // nested functions, and rely on the traversal to visit them later,
    // but that's a small optimization. Starting here instead of at the
    // root of the AST is the key optimization, since huge async/generator
    // functions are relatively rare.
    _regenerator2["default"].transform(convertTraversalPathToNodePath(this));
  }
}

// Given a TraversalPath, return a NodePath that includes full ancestry
// information (up to and including the Program node). This is complicated
// by having to include intermediate objects like blockStatement.body
// arrays, in addition to Node objects.
function convertTraversalPathToNodePath(path) {
  var programNode;
  var keysAlongPath = [];

  while (path) {
    var pp = path.parentPath;
    var parentNode = pp && pp.node;
    if (parentNode) {
      keysAlongPath.push(path.key);

      if (parentNode !== path.container) {
        var found = Object.keys(parentNode).some(function (containerKey) {
          if (parentNode[containerKey] === path.container) {
            keysAlongPath.push(containerKey);
            return true;
          }
        });

        if (!found) {
          throw new Error("Failed to find container object in parent node");
        }
      }

      if (t.isProgram(parentNode)) {
        programNode = parentNode;
        break;
      }
    }

    path = pp;
  }

  if (!programNode) {
    throw new Error("Failed to find root Program node");
  }

  var nodePath = new _astTypes.NodePath(programNode);

  while (keysAlongPath.length > 0) {
    nodePath = nodePath.get(keysAlongPath.pop());
  }

  return nodePath;
}
const path = require('path');

module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true,
    "jquery": true,
  },
  "extends": [
    "airbnb",
  ],
  "globals": {
    "Highcharts": true,
    "dagre": true,
  },
  "rules": {
    "react/jsx-handler-names": [2, {
      "eventHandlerPrefix": "handle",
      "eventHandlerPropPrefix": "on"
    }],
    "react/sort-comp": [2, {
      order: [
        'type-annotations',
        'static-methods',
        'lifecycle',
        'everything-else',
        'render',
      ],
    }],
    "max-len": [1, 120, 2, {
      "ignoreUrls": true,
      "ignoreComments": false
    }],
    "no-continue": 0,
    "no-param-reassign": [2, {"props": false}],
    "no-unused-vars": ["error", { "vars": "all", "args": "none" }],
    "prefer-template": 0,
    "no-underscore-dangle": 0,
    "no-mixed-operators": 0,
    "no-plusplus": 0,
    "valid-typeof": [2, { "requireStringLiterals": false }],
    "import/no-extraneous-dependencies": 0,
    "class-methods-use-this": 0,
    "import/first": 0,
    "no-restricted-syntax": [
      2,
      "DebuggerStatement",
      "LabeledStatement",
      "WithStatement"
    ],
    "react/forbid-prop-types": 0,
    "react/jsx-no-bind": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/no-autofocus": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/href-no-hash": 0,
    "valid-jsdoc": [1, {
      "requireReturn": false, // for now!
      "requireReturnType": false, // for now!
      "requireParamDescription": false, // for now!
      "requireReturnDescription": false, // for now!
    }],
    "require-jsdoc": [1, {
      "require": {
        "FunctionDeclaration": false, // for now!
        "MethodDefinition": true,
        "ClassDeclaration": false, // for now!
      }
    }],
    "import/no-named-as-default": 0
  },
};

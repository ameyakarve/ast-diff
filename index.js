var antlr4 = require('antlr4');
var JavaLexer = require('./JavaLexer');
var JavaParser = require('./JavaParser');


var input = 'java-code-goes-here';
var chars = new antlr4.InputStream(input);
var lexer = new JavaLexer.JavaLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new JavaParser.JavaParser(tokens);
parser.buildParseTrees = true;

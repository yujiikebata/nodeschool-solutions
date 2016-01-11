var test = require('../node_modules/tape');
var fancify = require(process.argv[2]);

test('fancify(str) returns the str wrapped in ~*~', function(t) {
	t.equal(fancify('fancy'), '~*~fancy~*~');
	t.end();
});

test('It takes an optional second argument that converts the string into ALLCAPS', function(t) {
	t.equal(fancify('fancy', true), '~*~FANCY~*~');
	t.end();
});

test('It takes a third optional argument that determines the character in the middle', function(t) {
	t.equal(fancify('fancy', false, '!'), '~!~fancy~!~');
	t.end();
});
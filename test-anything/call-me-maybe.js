var test = require('tape');
var repeatCallback = require(process.argv[2]);

test('repeatCallback', (t) => {
	t.plan(5);
	repeatCallback(5, () => {
		t.pass('callback called');
	});
});
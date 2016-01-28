var test = require('tape');
var feedCat = require(process.argv[2]);

test('try to feed the cat mouse', (t) => {
  t.equal(feedCat('mouse'), 'yum');
  t.end();
});

test('try to feed the cat chocolate', (t) => {
  t.throws(() => {
    feedCat('chocolate');
  });
  t.end();
});

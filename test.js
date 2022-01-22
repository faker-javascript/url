import test from 'ava';
import url from './index.js';

test('url return type to be string', t => {
    t.is(typeof url(), 'string');
});

test('url with protocol https contains protocol https', t => {
    t.true(url({protocol: 'https'}).includes('https'));
});

test('url with tld com contains tld com', t => {
    t.true(url({tld: 'com'}).includes('com'));
});

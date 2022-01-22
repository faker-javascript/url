import {expectType} from 'tsd';
import url from './index.js';

expectType<string>(url());
expectType<string>(url({protocol: 'http', tld: 'com'}));

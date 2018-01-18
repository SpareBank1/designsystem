import { assert } from 'chai';

import { getFileContent } from '../src/file-content';
import MockedFileReader from './mocked-file-reader';

global.window = { FileReader: MockedFileReader };

describe('Read file content into memory', () => {
    it('should resolve to base64 encoded data uri', done => {
        getFileContent({ filename: 'test.jpg' })
            .then(content => {
                assert.equal(content, 'data:application/pdf;base64,abcd1234');
                done();
            })
            .catch(done);
    });
});

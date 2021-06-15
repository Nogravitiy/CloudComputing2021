const expect = require('chai').expect;

const shorturl = require('../url.controller');


describe('invalid_url test', () => {
    it('invalid url 1', async () => {
        if(!shorturl.checkUrl("google.de")) { throw new Error('Wrong result 1')};
    });
    it('invalid url 2', async () => {
        if(!shorturl.checkUrl("hp://google.de")) { throw new Error('Wrong result 2')};
    });
    it('invalid url 3', async () => {
        if(!shorturl.checkUrl("http//google.de")) { throw new Error('Wrong result 3')};
    });
    it('invalid url 4', async () => {
        if(!shorturl.checkUrl("http:/google.de")) { throw new Error('Wrong result 4')};
    });
    it('invalid url 5', async () => {
        if(!shorturl.checkUrl("http:google.de")) { throw new Error('Wrong result 5')};
    });
});  
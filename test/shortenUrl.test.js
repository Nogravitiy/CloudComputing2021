const { ENETRESET } = require('constants');
const http = require('http'); // or 'https' for https:// URLs


describe('shorten_url tests', ()=> {
    it('..', () => {

        const request_original = http.get("http://localhost:3000/test.html", function(res) {
            res.on("data", function(orginal_chunk) {
                const request_short = http.get("http://localhost:3000/HH", function(sres) {
                    eres.on("data", function(short_chunk) {
                        if(orginal_chunk != short_chunk) {
                            throw new Error('not indentical')
                        }
                    });
                });
            });
        });
    
    });
})

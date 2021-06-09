const expect = require('chai').expect;
const shorturl = require('../url.controller');

describe('only_five_characters tests', () => {
    it('should only be 5 characters long', () => {

       for(let i=0; i<1000; i++){
        let lang = shorturl.generate();
        if(lang.length>5){
            throw new Error('shorturl ist to long')
        }
       }
        

        
    });
})


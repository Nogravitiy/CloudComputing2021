const expect = require('chai').expect;

const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

var readline = require('readline');
var fs = require('fs');

const Url = require('../url.model');

const shorturl = require('../url.controller');

describe('unique_url tests', () => {
    describe('url.controller.createshortLink() Test', () => {
        it('should be unique', () => {

            let names = [] ;

            var myInterface = readline.createInterface({
                input: fs.createReadStream('./test/urlList.txt')
              });
              
              var lineno = 0;
              myInterface.on('line', function (line) {
                lineno++;
                let unique_name = shorturl.shortLink_create();
                if(!names.includes(unique_name)){
                    names.push(unique_name);
                }else {
                    throw new Error('sorry, unique_name already exists :(' );
                }
              });

        });
    });
}) 






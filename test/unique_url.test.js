const expect = require('chai').expect;

const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

const Url = require('../url.model');

const shorturl = require('../url.controller');

describe('unique_url tests', () => {
    describe('url.controller.createshortLink() Test', () => {
        it('should be unique', () => {

            let names = [];

            for(let i=0; i<1000; i++){
                let unique_name = shorturl.shortLink_create();

                if(!names.includes(unique_name)){
                    names.push(unique_name);
                }else {
                    throw new Error('sorry, unique_name already exists :(' );
                }
            }

        });
    });
}) 





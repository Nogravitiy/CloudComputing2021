const expect = require('chai').expect;

const shorturl = require('../url.controller');


describe('valid_url test', () => {
    it('test urls', async () => {
        if(shorturl.checkUrl("google.de")) { throw new Error('Wrong result 0')};
        if(shorturl.checkUrl("hp://google.de")) { throw new Error('Wrong result 1')};
        if(shorturl.checkUrl("http//google.de")) { throw new Error('Wrong result 2')};
        if(shorturl.checkUrl("http:/google.de")) { throw new Error('Wrong result 3')};
        if(shorturl.checkUrl("http:google.de")) { throw new Error('Wrong result 4')};
        if(!shorturl.checkUrl("http://google.de")) { throw new Error('Wrong result 5')};
        if(!shorturl.checkUrl("https://google.de")) { throw new Error('Wrong result 6')};
        if(!shorturl.checkUrl("https://github.com/Nogravitiy/CloudComputing2021")) { throw new Error('Wrong result 7')};
        if(!shorturl.checkUrl("https://saml.dhbw-stuttgart.de/idp/profile/SAML2/Redirect/SSO?execution=e1s1")) { throw new Error('Wrong result 8')};
        if(!shorturl.checkUrl("https://dualis.dhbw.de/scripts/mgrqispi.dll?APPNAME=CampusNet&PRGNAME=COURSERESULTS&ARGUMENTS=-N999294960049353,-N000307,")) { throw new Error('Wrong result 9')};
    })
})


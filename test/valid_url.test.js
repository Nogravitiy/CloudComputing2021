const expect = require('chai').expect;

const shorturl = require('../url.controller');


describe('valid_url test', () => {
    it('valid url 1', async () => {
        if(!shorturl.checkUrl("http://google.de")) { throw new Error('Wrong result 1')};
    });
    it('valid url 2', async () => {
        if(!shorturl.checkUrl("https://google.de")) { throw new Error('Wrong result 2')};
    });
    it('valid url 3', async () => {
        if(!shorturl.checkUrl("https://github.com/Nogravitiy/CloudComputing2021")) { throw new Error('Wrong result 3')};
    });
    it('valid url 4', async () => {
        if(!shorturl.checkUrl("https://saml.dhbw-stuttgart.de/idp/profile/SAML2/Redirect/SSO?execution=e1s1")) { throw new Error('Wrong result 4')};
    });
    it('valid url 5', async () => {
        if(!shorturl.checkUrl("https://dualis.dhbw.de/scripts/mgrqispi.dll?APPNAME=CampusNet&PRGNAME=COURSERESULTS&ARGUMENTS=-N999294960049353,-N000307,")) { throw new Error('Wrong result 5')};
    });
})




//import Url model
const Url = require('./url.model.js');
const validUrl = require('valid-url');

//This is basically your domain name
const baseUrl = process.env.BASE_URL || 'http://localhost:3000';

const createShortLink = async (req, res) => {
    //get the originalUrl and unique_name from the request's body
    let { originalUrl } = req.body;

    if(!checkUrl(originalUrl)) {
        return res.status(400).json({ok : false, error : 'Invalid URL'});
    }
    
    try {

        let shortUrl = await shortLink_create(originalUrl);

        if(shortUrl == "") {
            return res.status(403).json({
                error: "Unique name already exists, choose another",
                ok : false
            }) 
        }

        return res.json({
            message : 'success',
            ok : true,
            shortUrl
        });
        
    } catch (error) {
        ///catch any error, and return server error
        console.error(error);
        return res.status(500).json({ok : false, error : 'Server error'});
    }
};

const openShortLink = async (req, res) => {
    //get the unique name from the req params (e.g olamide from shorten.me/olamide)
    const { unique_name } = req.params;

    try{
      //find the Url model that has that unique_name
      let url = await Url.findOne({ unique_name });

       /** if such Url exists, redirect the user to the originalUrl 
       of that Url Model, else send a 404 Not Found Response */
        if(url){
            return res.redirect(url.originalUrl);
        } else {
            return res.status(404).json({error : 'Not found'});
        }  
    } catch(err) {
       //catch any error, and return server error to user
        console.log(err);
        res.status(500).json({error : 'Server error'});
    } 
};

const shortLink_create = async (originalUrl) => {
    let nameExists = true;
    let maxCount = 100;
    let counter = 0;
    let unique_name = "";
    let shortUrl = ""

    while(nameExists){
        unique_name = generate();
        //check if unique_name alredy exists
        nameExists = await Url.findOne({ unique_name });
        /** if unique_name already exists, send a response with an
        error message, else save the new unique_name and originalUrl */

        counter += 1;
        if(counter >= maxCount) {
            unique_name = "";
            break;
        }

    }
    if (unique_name != "") {
        shortUrl = baseUrl + '/' + unique_name;
        
        url = new Url({
            originalUrl,
            shortUrl,
            unique_name
        });
        //save
        const saved = await url.save();
    }
    return shortUrl;
}

function generate() {
    const map = new String("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");
        const size = Math.floor(Math.random() * 5) +1;
        let newNumber = "";

        for (var _i = 0; _i < size; _i++) {
            newNumber += map[Math.floor(Math.random() * 61)];
            
        }
        console.log(newNumber);
        return newNumber;
}

function checkUrl (url) {
    if(url.toLowerCase().startsWith('http://') || url.toLowerCase().startsWith('https://')){
        if (validUrl.isUri(url)) {
            return true;
        } 
    } 
    return false;
    
}

module.exports = {
    createShortLink, openShortLink, generate, shortLink_create, checkUrl
}
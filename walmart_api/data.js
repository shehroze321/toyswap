const request = require("request");
const APIkey = "nqrumpyy4ptmubmu5ffqfjc6";

let fetchToys = function () {
    //URL for the walmart api. Searches for the top 10 best seller toys. 
    this.requestStr = "http://api.walmartlabs.com/v1/search?apiKey=" + APIkey + "&query=toys&sort=bestseller";
    //Declare an empty array where the result will be stored.
    this.result = [];

    //Function that executes the request and takes in a callback function as parameter.
    this.getToyData = function (cb) {
        request(this.requestStr, (error, response, body) => {
            this.error = error;
            this.body = JSON.parse(body);

            if (error)
                console.log(`Error: ${this.error}`);
            else {
                this.resultCnt = this.body.items.length; //gets the count of data received. API max is 10 by default.
                for (let i = 0; i < this.resultCnt; i++) {
                    this.result.push({ //creates an object out of the data retrieved and adds it to array.
                        name: this.body.items[i].name,
                        price: this.body.items[i].salePrice,
                        description: this.body.items[i].shortDescription,
                        image: this.body.items[i].largeImage
                    });
                }
                if (this.result)
                    cb(this.result); //Callback function executes only if there is any data.
            }
        });
    };
};

module.exports = fetchToys;
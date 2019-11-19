var request = require("request"),
    assert = require('assert'),
    helloWorld = require("../app.js"),
    base_url = "http://localhost:8000/";

describe("Function Test", function(done) {
    describe("GET /", function() {
        it("returns status code 200", function(done) {
            request.get(base_url, function(error, response, body) {
                //expect(response.statusCode).toBe(200);
                assert.equal(200, response.statusCode);
                done();
            });
        });
        /*
               it("returns String", function(done) {
                   request.get(base_url, function(error, response, body) {
                       //expect(body).toBe("Welcome to My Application!");
                       assert.equal("Welcome to My Application!", body);
                       //helloWorld.closeServer();
                       done();
                   });
               }); 
        */
    });
});
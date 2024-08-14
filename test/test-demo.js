// const { expect, should } = require('chai');
// const request = require('supertest');

import request from 'supertest';
import { expect } from 'chai';
import assert from 'assert';
import should from 'should';

// describe ('Test Suite Name', () => {
//     it('Test Case 1', () => {
//         console.log("isi dari test case 1")
//     });

//     it('Test Case 2', () => {
//         console.log("isi dari test case 2")
//     });
// })

// const request = require('supertest');
// describe('API Test for "restful-api.dev"', () =>){
    
// }

// GET
it('GET objects', async () => {
    const response = await request("https://api.restful-api.dev/").get("objects");
    console.log('status: ' + response.statusCode);
    console.log('isi bodynya: ' + response.body);

    //assertion
});

//POST
it('POST objects', async () => {
    const body = {
        "name": "MacBook Pro",
        "data": {
            "year": 2024,
            "price": 10000,
            "CPU model": "Intel Core i7",
            "Hard disk size": "1 TB"
        }
    }
    const response = await request("https://api.restful-api.dev/")
    .post("/objects")
    .send(body);
    console.log(response.statusCode);
    console.log(response.body);
});

// Assertion
it('Assertion', async () => {
    const response = await request("https://api.restful-api.dev/").get("objects");
    // // assertion dengan assert syntax
    // assert.equal(response.status, 200);
    // // assertion dengan assert syntax
    // expect(response.status).to.equal(200);
    // // assertion dengan assert syntax
    // should(response.status === 200)

    expect(response.status).to.equal(200);
    expect(response.body[0].id).to.equal('1');
    expect(response.body[0].name).to.equal('Google Pixel 6 Pro');
});
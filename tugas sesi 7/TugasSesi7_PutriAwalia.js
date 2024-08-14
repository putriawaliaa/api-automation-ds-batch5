import request from 'supertest';
import { expect } from 'chai';
import assert from 'assert';
import should from 'should';

// GET
it('GET objects', async () => {
    const response = await request("https://reqres.in").get("/api/users?page=2");
    console.log('status: ' + response.statusCode);
    console.log('isi bodynya: ' + response.body);

    //assertion
    expect(response.status).to.equal(200);
});

//POST
it('POST objects', async () => {
    const body = {
        "name": "morpheus",
        "job": "leader"
    }
    const response = await request("https://reqres.in")
    .post("/api/users")
    .send(body);
    console.log(response.statusCode);
    console.log(response.body);
    expect(response.status).to.equal(201);
});

//DELETE
it('DELETE objects', async () => {
    const response = await request("https://reqres.in")
    .delete("/api/users/2")
    console.log(response.statusCode);
    expect(response.status).to.equal(204);
});

//PUT
it('PUT objects', async () => {
    const body = {
        "name": "morpheus",
        "job": "resident evil"
    }
    const response = await request("https://reqres.in")
    .put("/api/users/2")
    .send(body);
    console.log(response.statusCode);
    console.log(response.body);
    expect(response.status).to.equal(200);
});



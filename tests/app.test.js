const request = require("supertest");
const { expect } = require("chai");
const app = require("../app");

describe("GET /", function () {
  it('responds with text "Hello"', async function () {
    const res = await request(app).get("/").expect(200);

    expect(res.text).to.equal("Hello");
  });
});

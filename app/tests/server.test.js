const request = require("supertest");
const server = require("../src/server");

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(server)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});
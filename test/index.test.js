const sum = require("../core/index");
const request = require("supertest");
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

const baseUrl = "https://jsonplaceholder.typicode.com/";
describe("Todos endpoint", () => {
  it("should return a 200 status code", async () => {
    const response = await request(baseUrl).get("todos/1");
    const { body } = response;
    expect(body.userId).toBe(1);
  });
});

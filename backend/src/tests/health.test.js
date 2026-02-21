import request from "supertest";
import app from "../index.js";

describe("API Health", () => {
  it("GET / should return 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});

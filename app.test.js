
const test = require("node:test");
const assert = require("node:assert/strict");
const app = require("./app");

test("application loads successfully", () => {
  assert.equal(typeof app, "function");
});

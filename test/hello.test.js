const { helloWorld } = require("../src/hello");

test("deve retornar Hello World", () => {
  expect(helloWorld()).toBe("Hello World!");
});
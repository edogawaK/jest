const login = require("../core/login");

test("Login With Correct Email And Password", async () => {
  const status = await login(
    "kisenguyen1410263@gmail.com",
    "kisenguyen1410263@gmail.com"
  );
  expect(status).toBe(1);
});

test("Login With Wrong Or Not Exist Email And Password", async () => {
  const status = await login(
    "notexist@gmail.com",
    "kisenguyen1410263@gmail.com"
  );
  expect(status).toBe(0);
});

test("Login With Correct Email And Wrong Password", async () => {
  const status = await login(
    "notexist@gmail.com",
    "kisenguyen1410263@gmail.com"
  );
  expect(status).toBe(0);
});

test("Login With Invalid Email And Password", async () => {
  const status = await login(
    "notexistgmail.com",
    "kisenguyen1410263@gmail.com"
  );
  expect(status).toBe(0);
});
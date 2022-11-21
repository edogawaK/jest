const signup = require("../core/signup");

test("Signup With Existed Email", async () => {
  const payload = {
    email: "kisenguyen141063@gmail.com",
    name: "Edogawa",
    password: "kisenguyen1410263@gmail.com",
    district: "1",
    ward: "1",
    city: "1",
    street: "Seoul",
    phone: "0987654321",
  };
  const status = await signup(payload);
  expect(status).toBe(0);
});

test("Signup With Missing Some Info", async () => {
  const payload = {
    password: "kisenguyen1410263@gmail.com",
    district: "1",
  };
  const status = await signup(payload);
  expect(status).toBe(0);
});

test("Signup With Invalid Email", async () => {
  const payload = {
    email: "kisenguyen141063gmail.com",
    name: "Edogawa",
    password: "kisenguyen1410263@gmail.com",
    district: "1",
  };
  const status = await signup(payload);
  expect(status).toBe(0);
});

test("Signup Success With Valid Info", async () => {
  const payload = {
    email: "n@gmail.com",
    name: "Edogawa",
    password: "kisenguyen1410263@gmail.com",
    district: "1",
    ward: "1",
    city: "1",
    street: "Seoul",
    phone: "0987654321",
  };
  const status = await signup(payload);
  expect(status).toBe(1);
});

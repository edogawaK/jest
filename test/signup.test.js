const signup = require("../core/signup");

const data = [
  {
    testCase: "Signup With Valid Params",
    expect: 1,
    payload: {
      email: "kisenguyen141063@gmail.com",
      name: "Edogawa",
      password: "kisenguyen1410263@gmail.com",
      district: "1",
      ward: "1",
      city: "1",
      street: "Seoul",
      phone: "0987654321",
    },
  },
  {
    testCase: "Signup With Existed Email",
    expect: 0,
    payload: {
      email: "kisenguyenok141063@gmail.com",
      name: "Edogawa",
      password: "kisenguyen1410263@gmail.com",
      district: "1",
      ward: "1",
      city: "1",
      street: "Seoul",
      phone: "0987654321",
    },
  },
  {
    testCase: "Signup With Missing Some Info",
    expect: 0,
    payload: {
      password: "kisenguyen1410263@gmail.com",
      district: "1",
    },
  },
  {
    testCase: "Signup With Invalid Email",
    expect: 0,
    payload: {
      email: "kisenguyen141063gmail.com",
      name: "Edogawa",
      password: "kisenguyen1410263@gmail.com",
      district: "1",
    },
  },
];

data.forEach((i) => {
  test(i.testCase, async () => {
    const payload = i.payload;
    const status = await signup(payload);
    expect(status).toBe(i.expect);
  });
});

const login = require("../core/login");

const data = [
  {
    testCase: "Login With Correct Email And Password",
    expect: 1,
    payload: {
      email: "kisenguyen141063@gmail.com",
      password: "kisenguyen1410263@gmail.com",
    },
  },
  {
    testCase: "Login With Wrong Or Not Exist Email And Password",
    expect: 0,
    payload: {
      email: "notexist@gmail.com",
      password: "kisenguyen1410263@gmail.com",
    },
  },
  {
    testCase: "Login With Correct Email And Wrong Password",
    expect: 0,
    payload: {
      email: "kisenguyen1410263@gmail.com",
      password: "kisengkkjjkljlkjlkuyen1410263@gmail.com",
    },
  },
  {
    testCase: "Login With Invalid Email And Password",
    expect: 0,
    payload: {
      email: "notexistgmail.com",
      password: "kisenguyen1410263@gmail.com",
    },
  },
];

data.forEach((i) => {
  test(i.testCase, async () => {
    const payload = i.payload;
    const status = await login(
      i.payload.email,
      i.payload.password
    );
    console.log(status);
    expect(status).toBe(i.expect);
  });
});
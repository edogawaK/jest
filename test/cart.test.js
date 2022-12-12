const cart = require("../core/cart");

/* -------------------------------------------------------------------------- */
/*                              Test Add To Cart                              */
/* -------------------------------------------------------------------------- */
test("Add To Cart Sucess", async () => {
  const status = await cart.addToCart(2, 1, 1);
  expect(status).toBe(1);
});

test("Add To Cart Failed Because Quantity Not Enough", async () => {
  const status = await cart.addToCart(5, 1, 100);
  expect(status).toBe(0);
});

test("Add To Cart Failed Because Product Not Existed", async () => {
  const status = await cart.addToCart(100000, 1, 1);
  expect(status).toBe(0);
});

test("Add To Cart Failed Because Size Not Existed", async () => {
  const status = await cart.addToCart(5, 10000, 1);
  expect(status).toBe(0);
});

test("Add To Cart Failed Because Invalid Payload", async () => {
  const status = await cart.addToCart("1000asas", true, false);
  expect(status).toBe(0);
});

/* -------------------------------------------------------------------------- */
/*                              Test Update Cart                              */
/* -------------------------------------------------------------------------- */
// test("Update Cart Success", async () => {
//   const status = await cart.updateCart(5, 2);
//   expect(status).toBe(1);
// });

// test("Update Cart Failed Because Quantity Not Enough", async () => {
//   const status = await cart.updateCart(5, 100000000);
//   expect(status).toBe(0);
// });

// test("Update Cart Faild Because Invalid Quantity", async () => {
//   const status = await cart.updateCart(5, -1000);
//   expect(status).toBe(0);
// });

// test("Update Cart Faild Because Not Existed Cart", async () => {
//   const status = await cart.updateCart(10000, -1000);
//   expect(status).toBe(0);
// });

/* -------------------------------------------------------------------------- */
/*                              Remove From Cart                              */
/* -------------------------------------------------------------------------- */
// test("Remove Cart Success", async () => {
//   const status = await cart.removeFromCart(2);
//   expect(status).toBe(1);
// });

// test("Remove Cart Failed Not Existed Cart Item", async () => {
//   const status = await cart.removeFromCart(1234);
//   expect(status).toBe(0);
// });

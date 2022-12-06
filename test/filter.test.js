const filter = require("../core/filter");

test("Filter product by category success", async () => {
  const data = await filter({ category: 2 });
  let status = 1;
  for (let i = 0; i < data.length; i++) {
    if (data[i].categoryId != 2) {
      status = 0;
      break;
    }
  }
  expect(status).toBe(1);
});

test("Filter product is null when filter by not existed category", async () => {
  const data = await filter({ category: -1 });
  let status = 1;
  // console.log(data);
  if (data.length != 0) {
    status = 0;
  }
  expect(status).toBe(1);
});

test("Filter product by minPrice and maxPrice", async () => {
  const maxPrice = 200000;
  const minPrice = 100000;
  const data = await filter({ minPrice, maxPrice });
  let status = 1;
  for (let i = 0; i < data.length; i++) {
    if (data[i].price > maxPrice || data[i].price < minPrice) {
      status = 0;
      break;
    }
  }
  expect(status).toBe(1);
});

test("Sort product by min price to max", async () => {
  const data = await filter({ sort: "price" });
  let status = 1;
  for (let i = 1; i < data.length; i++) {
    if (data[i].price < data[i - 1].price) {
      status = 0;
      break;
    }
  }
  expect(status).toBe(1);
});

test("Sort product by max price to min", async () => {
  const data = await filter({ sort: "price", sortMode: "desc" });
  let status = 1;
  for (let i = 1; i < data.length; i++) {
    if (data[i].price > data[i - 1].price) {
      status = 0;
      break;
    }
  }
  expect(status).toBe(1);
});

test("Sort product by min sold to max", async () => {
  const data = await filter({ sort: "price" });
  let status = 1;
  for (let i = 1; i < data.length; i++) {
    if (data[i].sold < data[i - 1].sold) {
      status = 0;
      break;
    }
  }
  expect(status).toBe(1);
});

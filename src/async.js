function fetchFood(error) {
  if (error === "error") {
    return Promise.reject("네트워크 에러");
  }
  return Promise.resolve({ name: "황금올리브", price: 20000 });
}

module.exports = fetchFood;

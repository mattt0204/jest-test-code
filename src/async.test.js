const fetchFood = require("./async");

describe(" async food", () => {
  it("fetchFood", async () => {
    fetchFood().then((food) =>
      expect(food).toEqual({ name: "황금올리브", price: 20000 }),
    );
  });
  it("got error when rejected", async () => {
    expect(fetchFood("error")).rejects.toBe("네트워크 에러");
  });
});

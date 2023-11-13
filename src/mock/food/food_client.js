class FoodClient {
  async fetchChickens() {
    return [
      { name: "황금올리브", brand: "BBQ", isFresh: true },
      { name: "뿌링클", brand: "BHC", isFresh: false },
    ];
  }
}

module.exports = FoodClient;

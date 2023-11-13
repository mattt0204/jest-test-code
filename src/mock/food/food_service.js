class FoodService {
  constructor(foodClient) {
    this.foodClient = foodClient;
  }

  fetchFreshChickens() {
    return this.foodClient
      .fetchChickens()
      .then((items) => items.filter((item) => item.isFresh));
  }
}

module.exports = FoodService;

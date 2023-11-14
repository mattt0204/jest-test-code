const FoodService = require("./food_service");
const FoodClient = require("./food_client");

// 함수의 실행전후로 객체의 상태나 함수의 리턴값을 검증하는 방식을 stub
describe("mock food client, test service - stub", () => {
  let foodService;
  beforeEach(() => {
    foodService = new FoodService(new FoodClient());
  });

  it("should filter out only fresh", async () => {
    const chickens = await foodService.fetchFreshChickens();
    expect(chickens.length).toBe(1);
    expect(chickens).toEqual([
      { name: "황금올리브", brand: "BBQ", isFresh: true },
    ]);
  });
});

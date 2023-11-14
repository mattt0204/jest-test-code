const UserService = require("./user_service");
const UserClient = require("./user_client");

jest.mock("./user_client");

// 로그인 했을 때 await login
// login 흉내내는 mock 이 몇번 콜받았는지

describe("mock user client, test service", () => {
  const login = jest.fn(() => {
    access_token: "tadfafafdafest";
  });

  // mockImplementation 을 통해 login 함수를 재정의
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });
  let userService;
  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it("login", async () => {
    // 이게 가짜
    await userService.login("test", "test");
    await userService.login("test", "test");
    // 행위에 대한 테스트
    expect(login).toHaveBeenCalledTimes(2);
  });
});

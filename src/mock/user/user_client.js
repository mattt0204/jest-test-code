class UserClient {
  login(id, password) {
    return fetch("http://www.naver.com/login/").then((response) =>
      response.json(),
    );
  }
}

module.exports = UserClient;

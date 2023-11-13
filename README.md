



초기 세팅

```
npm init --yes

# jest 글로벌 설치
npm install jest --global

# jest config 생성
jest --init

# 아래문답에 따라 config 설정
✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … no
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … no
✔ Which provider should be used to instrument code for coverage? › v8
✔ Automatically clear mock calls, instances, contexts and results before every test? … yes




# jest, @types/jest package.json에 추가
npm install --save-dev jest
npm install @types/jest


# 코드를 수정할 때마다 모든 테스트가 실행
jest --watchAll

```


## 공식문서


테스트 코드
https://jestjs.io/docs/en/getting-started
https://testing-library.com/docs/react-testing-library/intro/
https://legacy.reactjs.org/docs/testing.html
# 1. 프로젝트 Description

✔ 프로젝트명
✔ 어떤 프로젝트인지 소개
✔ 디렉토리 구조

# 2. 프로젝트 정보

✔ 설치방법(Getting Started / Installation)
✔ 컴파일 방법, 사용 환경, 브라우저 서포트, 개발스택, 구현 목록(명세)
✔ 간단한 사용 방법 및 예제

3. 프로젝트 결과물

✔ 기능별 사진 / 영상
✔ 코드설명, 후기(짧고 간결하게 써야함, 내용이 길어질 경우 블로그에 작성한뒤 링크로 연결해주는게 좋다)

4. Contribute

✔ 다른 사람들이 코드에 Contribute하기 쉽도록 방법 설명
✔ 어떤 류의 Contribute를 원하는지 또는 Contributing 규칙 등을 적을 수도 있다.

5. LICENSE

✔ 라이선스 : 저작물의 수정 배포에 대한 권한이나 저작권들에 대한 조항들
✔ 보통 MIT License를 많이 사용하고 BSD 라이선스도 많이 사용한다

6. 외부리소스 정보

✔ 프로젝트에 포함된 외부 코드나 리소스 정보(각각의 출처 및 배포 라이선스)

7. Code Status

✔ Shield라는 것을 사용하여 [build | passing]과 같은 정보를 줄 수 있다.
✔ 프로젝트가 커질수록 도움이 되는 부분

# Axios

중복된 부분을 효율적으로 사용하기 위해 Axios 인스턴스를 사용하였다.

##install
npm install --save styled-components
npm install react-router-dom --save
npm install axios --save

#문제점
firebase 첫 사용
로그인 후 main페이지로 이동하면 user정보를 state에 저장했음에도 불구하고 페이지가 이동되면 user정보가 사라졌다.
이걸 로컬스토리지에 저장한다.

#해결 방안
react의 상태(state)는 페이지 간에 유지되지 않기 때문에 당연한 결과이다.
상태는 컴포넌트가 다시 렌더링될 때마다 초기화되기 때문에 계속 user가 빈객체로 초기화된다.
따라서 localStorage를 이용해 사용자의 유저를 저장하고,
state의 initalstate값을 로컬스토리지로 얻은 user정보를 이용하므로 user정보를 계속해서 가지고 있을 수 있다.

# 2018.05.15
***
error:
  mysql INSERT INTO query는 한번에 한개 테이블에만 적용 가능함을 확인함
  transaction명령어를 사용하면 가능하다고 하나 그걸 쓰느니 schema를 단순화시키기로 결정
  userDetails 테이블을 삭제하고 tones 테이블을 users 테이블로 직접 연결함
  관련된 query 및 sql 수정.. schema 바뀔때마다 배고프다

***
help by: stack overflow
shovel time: 6시간

# 2018.05.16
***
before:
  /index.js
    app.use('/', express.static(path.join(__dirname, './../public')));
    app.use('/', router);

  /routes/users/index.js
    const signup = require('./signup');
    router.use('/signup', signup);

  /routes/users/signup.js
    const controller = require('../../controllers/users/signup');
    router.post('/signup', controller);

***
error:
   postman에서 request send를 할 경우 404 error가 발생
   routes/indes.js부터 routes/users/index.js, routes/users/signup.js까지 콘솔을 찍으며 확인한 결과
   /users/signup/signup으로 라우팅되고 있었음
   모듈화를 하면서 타고 들어가는 라우팅은 중첩되는 것을 확인함
   포스트맨 좀 좋은듯?

***
after:
  /index.js
    app.use('/', express.static(path.join(__dirname, './../public')));
    app.use('/api', router);  // api를 추가

  /routes/users/index.js
    const signup = require('./signup');
    router.use('/signup', signup);

  /routes/users/signup.js
    const controller = require('../../controllers/users/signup');
    router.post('/', controller); // signup을 삭제

***
help by: 구일모 멘토님
shovel time: 12시간

***
error:
    reviews와 wishLists 테이블의 참조값을 items에서 itemColors로 변경함
    fake값을 넣는 도중 확인했는데 이게 맞음. 왜 몰랐지?
    자꾸 바꾸다보니 foreign key 수정 정도는 뚞딲뚞딲 된다

***
help by: 까를로스 형님
shovel time: 1시간

***
#2018-05-17
***
error:
    포스트맨을 통해 api를 검사하면서 delItem api가 애매한 것을 발견.
    처음에 의도한 것처럼 구현하기 위해서 delColor api가 필요 -> schema 수정..

***
aws setting:
    $ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - # ver 6.x 대 설치
    $ sudo apt-get install -y nodejs # 설치
    $ sudo apt-get install -y build-essential # npm 네이티브 에드온 컴파일용 빌드 도구
    $ node -v # node.js 설치 체크

    $ sudo su - 관리자 권한 획득
    $ apt-get update - apt-get 의 패키지 업데이
    $ apt-cache search mysql-server - mysql 패키지가 존재하는지 확인
    $ apt-get install mysql-server-5.6 - mysql 설치 -> 비밀번호 설정하는 페이지로 이동

***
git folder:
    대소문자 변경은 push에 적용되지 않음. 수정하는 명령어가 있으나 그걸 쓰느니 폴더명을 바꾸는걸 추천

***
mysql root password change:
    mysql 접속후
    use mysql;
    update user set authentication_string=password('') where user='root';

***
#2018-05-18
***
req.query:
    ?color_id=[1,2,3]으로 클라이언트에서 요청시 json.stringfy되어 "[1,2,3]"으로 받음
    풀기 위해 당연히 JSON.parse(req.query.color_id)를 해야한다
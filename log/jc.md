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
        결 국deploy 를위 한세팅 이필요 한시기 가.옴. 개발모드 와프로덕션 모드 를세팅하려 고할때
 왜이 걸하냐 .. 이 틀넘 게삽질했던 게도움 이될 지모르겠.음

    reviews와 wishLists 테이블의  의dev server port 3000에서 는적용되 지않아서
이제부 터계 속빌드 를돌려 야된/... 우!왕참조값을 items에서 itemColors로 변경함
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
    $ apt-get install mysql-server-5.7 - mysql 설치 -> 비밀번호 설정하는 페이지로 이동

***
git folder:
    대소문자 변경은 push에 적용되지 않음. 수정하는 명령어가 있으나 그걸 쓰느니 폴더명을 바꾸는걸 추천

***
mysql root password change:
    mysql 접속후
    use mysql;
    update user set authentication_string=('password') where user='root';

***
#2018-05-18
***
req.query:
    ?color_id=[1,2,3]으로 클라이언트에서 요청시 json.stringfy되어 "[1,2,3]"으로 받음
    풀기 위해 당연히 JSON.parse(req.query.color_id)를 해야한다

***
fix:ㅋ
    API를 RESTful하게 수정함. 다음엔 처음부터 이렇게 해야지..

***
sql:
    여러 테이블을 합칠때 WHERE를 통해 foreign key를 연결하면 값이 없는 경우 안나옴.
    예를 들어 아이템과 리뷰 테이블을 합칠때 리뷰가 없는 경우 아이템이 안뜸.
    그래서 LEFT JOIN을 써서 해결함

***
#2018-05-19
***
sql:
    이미지를 저장하기 위해서 BLOB형태로 schema 변경이 필요.
    그래서 url로 되어있던 itemPhoto도 수정했는데 이건 아닌듯. 재수정 필요
    결론: itemPhoto 는 VARCHAR, reviewPhoto 는 BLOB
***
#2018-05-20
***
eslint:
    핫하다는 airbnb eslint를 설치하려고 기웃기웃
    결론은 eslint --init에서 populor setting에서 airbnb 선택하면 됨.

config:
    결국 deploy를 위한 세팅이 필요한 시기가 옴.. 개발모드와 프로덕션 모드를 세팅하려고 할때
    왜 이걸 하냐고.. 이틀 넘게 삽질했던게 도움이 될지 모르겠음.

#2018-05-23
***
server:
    불필요한 라인정리 및 파일 합치기. GraphQL을 써볼까하다가 RESTful하게 쓰는걸로..
    GraphQL은 클라이언트에서 쿼리에 대한 이해가 필요한 것 같음
#2018-05-24
***
axios:
    express-session에서 페이지 새로고침이나 다음 페이지로 넘어갈 때마다 세션 종료됨.
    문제는 axios에서 get 요청시마다 set cookie이 실행되어 sessionID가 바뀜.(cookie: connect sid <= token)
    해결방법은 axios.get(~~~, withcredentials: true)을 붙이면 됨.
    그리고 쿠키에 대한 내용은 C-R-A의 dev server port 3000에서는 적용되지 않아서
    이제부터 계속 빌드를 돌려야 된다... 우왕!

#2018-05-29
***
process.env:
  colorize 폴더에서
    export NODE_ENV=production
    export NODE_ENV=develpment

#2018-06-03
***
s3:
    웹 서버에서 파일 업로드 버퍼를 처리하되 물리적으로 파일을 저장하지 않기 위해 메모리 스토리지 타입의 객체를 생성
    웹 서버에 물리적으로 저장하는 것보다 아마존 S3 등을 이용하는 것이 좋은 이유는,
    로드 밸런서 등을 활용하여 여러 웹 서버가 같은 Node.js 웹 서비스를 제공할 때 특정 서버만 파일을 보유하게 되는 현상 등이 생기는 것을 미연에 방지

#2018-06-06
***
RDS:
    mysql -h colorize.clfod2la3omk.ap-northeast-2.rds.amazonaws.com -p colorize -u colorize
    mysql -h colorize.clfod2la3omk.ap-northeast-2.rds.amazonaws.com -p colorize -u colorize < server/8_mysql/schema.sql
    set time_zone = 'Asia/Seoul';

EC3:'ec2-13-125-176-32.ap-northeast-2.compute.amazonaws.com
    chmod 400 colorize.pem
    ssh -i "colorize.pem" ubuntu@ec2-13-125-176-32.ap-northeast-2.compute.amazonaws.com

node.js update:
    sudo apt-get purge --auto-remove nodejs
    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    sudo apt-get install -y nodejs

#2018-06-07
***
RDS:
    AWS에서 RDS mysql이 연결되지 않는 문제는
    RDS 보안그룹 인바운드에 모든 트래픽 허용 규칙을 추가해줘서 해결함
    안전한건지는 모르겠음 (EC2 포트만 연결하는 경우는 mysqlRDS 연결안됨)
    => 모든 트래픽 지우고 소스를 211.48.51.34/32 에서 0.0.0.0/0으로 수정
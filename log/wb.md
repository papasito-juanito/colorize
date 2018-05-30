#2018-05-17

1. params를 routing해서 api get해오는거 헷갈렷음

2. text area 수정 토글 readOnly

3. 라우팅 다함

***
#2018-05-17
1. params와 query에 대해 1~2시간 공부해봤다. 용어 혼동이 많이 온다

params가 parameter나 query parameter와 같은 말인지 query string이 query parameter와 같은 말인지

지금까지 이해한것만 써보면 두개는 특별히 다른 것 같지는 않다. 

parameter는 매개변수이니 그냥 parameter(params)는 /:id의 형식이어서
주소창에는 items/1이라고 표시된다. item/:id 라고 하면 / 뒤에 들어오는게 parameter이고 이건 렌더되는 컴포넌트 props에 {id: 내가 준 주소}로 들어오게된다

query string은 /item?color_id=1 ?뒤에를 query string이라고 한다. 왜 이렇게 쓰니냐? 잘 모르겠다. 정보를 URL에 표시해 주기 위해서?
김민준 블로그에서는 "URL 쿼리의 경우엔 컴포넌트 내에서 동적으로 사용 할 수 있고, params 의 경우엔 사용하기 전에 꼭 라우트에서 지정을 해주어야합니다" 라고 씌어 있는데 동적으로 사용한다는게 뭔지 예제를 봐도 잘 모르겠다.
https://www.youtube.com/watch?v=37-LglMzt8w를 보면 sorting할 때 쓰는 것 같다. 
//App.js
 <Route path='/' component={Dashboard}>

 //Dashboard.js
 componendDidmount(){
     log(serach)
     UrlSeachParams나 library로 파스한다.
     그리고

     fetch(value)
 }

 2. 로그인 모달창으로 바꾸려는데 nav에서 Link to 걸어놓은 것들 어떻게 바꾸는지

 해결: a tag로 바꾸고 Login component를 nav에서 클릭이벤트 걸어준다

 ***
#2018-05-21
1. modal창 클릭시 토글때문에 false 일때는 로그인이 안눌린다

해결: props로 함수 넘겨줘서 부모 state 바꿈

2. modal창에서 기존 signup으로 못넘어간다 다음과 같은 에러가 났다.
Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
Check the render method of `Signup`.

해결: Signup안에서 불러오는 컴포넌트를 내가 주석처리 했었는데 몰랐음.

***
#2018-05-22
1. 모달로 했을때 리다이렉트 문제
라우팅이 있으면 this.props로 location에 접근 할 수 있는데, 로그인 창이 아무데서나 열리도록 한 모달에서는 props가 없다. 

해결: history npm module 설치하니 history에 어떤 url에서 모달 로그인창에 접근 했는지 path가 나온다. 로그인시 api요청 res후 modal을 닫고 현재 pathname으로 push해준다

2. DOM 접근 문제
nav 클릭하면 사이드 바가 나오게 하려고 하는데 리액트에서의 돔접근은 다르다고 들음
document.getElementById("mySidenav").style.width = "250px"; 을 써도 문제 없이 돌아가지만

인터넷 검색해보고 
ReactDOM.findDOMNode(this.refs.mySidenav).style.width = '250px'
이렇게 바꿈

***
#2018-05-23
scroll 하면 header사라지고 scroll up하면 헤더나오게 하려고했음. 
tag에서 onscroll이 안먹는다.

해결: 
    componentDidMount(){
        window.addEventListener('scroll',this.hideNav());
    }
디드마운트에서 실행하니 된다

***
#2018-05-23
axios set cookie문제
api요청이 있을때마다 api가 계속 set-cookie를 해준다

해결: express session cookie secret true로 설정.

로그인 후 페이지 이동시 로그인이 끈긴다 => 위 문제 때문인줄 알았는데 그 후에도 계속 끊김
리액트 dev서버와 express서버가 달라서 생기는 문제 같은데 axios withcredentials true 후 빌드를 하면 해결된다. 하지만 CRA를 쓰는 모든 개발자들이 매번 빌드를 할 것 같지는 않다. 

***
#2018-05-24
서버 session에서 token으로 바꾸기로 했다. 모바일 환경에서도 더 용이하고, stateful하기 때문에 요새 많이 쓴다고.

***
#2018-05-25
HOC로 바꿔보려다가 모달창 보다는 login페이지가 있는 경우에 더 적합한 것 같다고 생각해서 안했다. 지금은 nav창에서 login state에 따라 모달을 띄울지 말지 하는데
HOC로 바꾸면 각 컴포넌트가 렌더 된 후 모달창이 뜰것 같다.

login페이지가 있었으면 redirect로 했으면 HOC를 해봤어도 괜찮을 것 같다.

url encode decode 해봤다. 

***
#2018-05-28
로그인 끝난줄 알았는데 주소를 직접 치고 들어오는 비 로그인 유저 핸들링이 안된다.

Private route하려고 하는데 첫 render시 무조건 false가 들어온다 그다음 didmount된 후
true로 바뀐다. 그래서 자꾸 리다이렉트를 함

***
#2018-05-29
sort란 주소로 바로 들어와 있을 때 그 상태이게

해결 : didmount시 history search를 찾아서 매치 할때 각각의 handler함수를 실행한다.













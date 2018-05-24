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





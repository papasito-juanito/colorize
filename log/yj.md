# 2018.05.19
***
1) 리뷰 생성시 전체리뷰들어올때 Map 함수 들어오면 레이아웃 깨짐 => 전체레이아웃 잡고 하위 영역 %로 수정
2) 리액트에서 dom 접근시 document.getElementById로 직접접근 하는거 아니고 this.ref로 접근



# 2018.05.21
***
브라우저에서 컴퓨터 로컬 이미지파일 업로드 방식 => 해결못함
브라우저에 올리는건 input file type 쓰면 업로드 가능
지금 프로젝트에서는 사이트 이용 유저의 리뷰이미지를 올려야 하니까 db에 저장해야함
base64, blob타입
자바스크립트 내장객체 filereader 사용 
reader.result 값으로 base64파일이 들어오고 이건 img src로 브라우저에서 바로 읽어서 렌더 가능 

1) 현재 db는 mysql 사용 
   mysql 은 img 파일을 blob 형태로 저장이 가능하다고 해서 찾아봄 
   브라우저에 올려질때는 base64 상태로 들어오고 blob으로 인코딩해서 db에 저장하려함 => 실패

2) 검색을 더 해보니 db에 직접 올리는게 가능하지만 속도가 느려지고 비효율적이라고함 
   파일을 올리면 서버에 올려서 로컬스토리지에 저장가능하게 하고 db는 그 경로만 가르키게 하여 불러오는 방법으로 바꿈 
   오늘 시간이 다가서 내일 진행
***

# 2018.05.22
***
어제 못한 img db에 저장하는거 진행 
서버로 올려서 public 폴더에 저장한 후 읽어오려했으나 클라이언트에서 파일깨짐현상발생
=> 알아보니 CRA로 리액트 클라이언트 파일 생성시 src 폴더 외부에 있는 파일은 컴파일 불가함 
=> eject 해서 설정을 바꿔야 하는데 시간관계상 힘들고 클라이언트 src폴더 안에 img 파일 저장하기로함
***
chart JS 값 나오게 수정 => dataset.plugin npm package에 바로 적용된다고 했는데 안나와서 고생함 => 여기저기 찾다가 github Q&A node module에서 직접 import 하라는 답변보고 해결


# 2018.05.23
***
메인페이지 수정
디테일 페이지 레이아웃 및 디자인 변경
infinite scroll => end 조건 주지 못해 미완성
라이브러리 많지만 쌩으로 구현 
scroll top , client height, scroll height

# 2018.05.24
***
infinite scroll => 원래 의도는 데이터 처리시 많은 데이터를 끊어오는거지만
한번에 받고 중간중간 끊어주는걸로 비쥬얼적으로만 구현
3개씩 끊어서 했을때 데이터 수보다 넘어가면 계속 에러발생
componentWillUpdate life cycle 사용하여 데이터 수 넘어갈때 마지막 데이터 까지만 받는걸로 수정해서 진행
문제점 : settimeout 함수가 뜨기전부터 실행되서 일정시간으로 fetch 해오지못함, 끝난후에도 렌더가 계속됨 

# 2018.05.25
***
review 에서 topreview allreview 한번에 받았는데 data 값 달라져서 처리안됨 두개 만듬

# 2018.05.26
***
fileupload 구현 
cra 내에서 src폴더 밖에 파일 불러오면 컴파일 못함 => 일단 클라이언트 폴더 내 저장 => 배포후 서버쪽으로 변경예정
reviewLike 구현
review update 구현중


# 2018.05.28
***
log in 유무에 따른 리뷰쓰는 창 화면 구현
lonin 안되있으면 리뷰쓰는 화면은 보이고 리뷰는 못쓰고 
login 되어있을시 리뷰 안썼으면 리뷰쓰는 화면 보이고 썼으면 내 리뷰 보이게 구현

*** axios chain ***
좋아요 버튼 눌렀을 시 toggle 버튼 구현 
axios 비동기 함수 post 후 get 구현해야하는데 비동기가 제대로 작동하지 않아 시간이 많이걸림
axios async로 검색해서 비동기 chain 처리 구현 
.then 뒤에 axios return 으로

# 2018.05.30
***
myreview 창 구현
map 함수 돌려서 생성된 여러가지 review 안에서 개별로 리뷰 수정, 삭제, 취소 기능 구현 필요함
=> 각 element에 id 값 부여해서 클릭시 event target id로 인덱스 검색해서 구현함



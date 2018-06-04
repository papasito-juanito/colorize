<5/30/2018>

deploy log

1. git pull
2. yarn install (in colorize & client)
3. build
4. yarn run pro

route 53 name server 사용해서 domain이랑 연결해줌.
매번 src/config.js의 url 바꾸기 힘들어서 의환님이 production mode 만들어줌

ssh로 서버 못 들어 갈 때는 ebs volume detach했다가 attach 하는 방법을 사용해야함. 해보지는 않았음.
아니면 그냥 다시 될 때까지 기다려도 됨... (오래걸림)
  관련링크: http://site.clairvoyantsoft.com/fixing-an-aws-ec2-instance-boot-up-issue/

원래 다 npm install/npm run build 했었는데 너무 오래걸려서 yarn으로 바꿈. 엄청 빨라짐.

forever 설치함
port 80으로 바꿈.

git으로 변경사항 받을 때...
***sudo su***
1. forever stop 0
2. git pull (colorize)
3. rm -r static (colorize/client/build)
4. yarn run build (colorize/client)
5. yarn run pro (colorize) (to check if it runs well)
6. forever start server/index.js
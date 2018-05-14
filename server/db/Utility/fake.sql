USE `colorize`;

INSERT INTO `items` (`categories2_id`,`brands_id`,`itemName`,`itemVolume`,`itemPrice`,`itemDetail`) VALUES
('1','1','뺴뺴로','10개입','2500','롯데뺴빼롱');
INSERT INTO `items` (`categories2_id`,`brands_id`,`itemName`,`itemVolume`,`itemPrice`,`itemDetail`) VALUES
('1','2','피자','2조각','7000','파파존스');
INSERT INTO `items` (`categories2_id`,`brands_id`,`itemName`,`itemVolume`,`itemPrice`,`itemDetail`) VALUES
('2','3','치킨','2마리','22000','티바두마리');
INSERT INTO `items` (`categories2_id`,`brands_id`,`itemName`,`itemVolume`,`itemPrice`,`itemDetail`) VALUES
('2','4','감자탕','대','12000','을지로거기');
INSERT INTO `items` (`categories2_id`,`brands_id`,`itemName`,`itemVolume`,`itemPrice`,`itemDetail`) VALUES
('3','5','순대국','1그릇','6000','맛업쪄');
INSERT INTO `items` (`categories2_id`,`brands_id`,`itemName`,`itemVolume`,`itemPrice`,`itemDetail`) VALUES
('3','1','빅맥','1세트','5000','맥도날드');
INSERT INTO `items` (`categories2_id`,`brands_id`,`itemName`,`itemVolume`,`itemPrice`,`itemDetail`) VALUES
('3','2','싸이버거','2개','6800','맘스때찌');
INSERT INTO `items` (`categories2_id`,`brands_id`,`itemName`,`itemVolume`,`itemPrice`,`itemDetail`) VALUES
('4','3','대출','25%','1000000','러시앤캐시');
INSERT INTO `items` (`categories2_id`,`brands_id`,`itemName`,`itemVolume`,`itemPrice`,`itemDetail`) VALUES
('4','4','엔빵','3명','10000','토스');
INSERT INTO `items` (`categories2_id`,`brands_id`,`itemName`,`itemVolume`,`itemPrice`,`itemDetail`) VALUES
('4','5','이슬','18%','4000','참이슬');

INSERT INTO `userDetails` (`tones_id`,`skins_id`) VALUES
('1','4');
INSERT INTO `userDetails` (`tones_id`,`skins_id`) VALUES
('2','3');
INSERT INTO `userDetails` (`tones_id`,`skins_id`) VALUES
('3','2');
INSERT INTO `userDetails` (`tones_id`,`skins_id`) VALUES
('4','1');
INSERT INTO `userDetails` (`tones_id`,`skins_id`) VALUES
('5','4');

INSERT INTO `users` (`userMail`,`userPassword`,`userName`,`userDetails_id`,`birthDate`,`gender`) VALUES
('admin@code.com','1234','admin','1','1999-09-09','male');
INSERT INTO `users` (`userMail`,`userPassword`,`userName`,`userDetails_id`,`birthDate`,`gender`) VALUES
('pizza@delivery.com','1234','pizza','2','1999-09-09','female');
INSERT INTO `users` (`userMail`,`userPassword`,`userName`,`userDetails_id`,`birthDate`,`gender`) VALUES
('sergay@gay.com','1234','sergay','3','1999-09-09','gay');
INSERT INTO `users` (`userMail`,`userPassword`,`userName`,`userDetails_id`,`birthDate`,`gender`) VALUES
('jwegw@code.com','1234','fffzz','4','1999-09-09','female');
INSERT INTO `users` (`userMail`,`userPassword`,`userName`,`userDetails_id`,`birthDate`,`gender`) VALUES
('visitor@code.com','1234','vegita','5','1999-09-09','trans');

INSERT INTO `itemColors` (`items_id`,`itemPhoto`,`itemColor`,`itemHex`,`itemDate`) VALUES
('1','김치','신당동할매','#224466',now());
INSERT INTO `itemColors` (`items_id`,`itemPhoto`,`itemColor`,`itemHex`,`itemDate`) VALUES
('2','김치','신당동며느리','#25626',now());
INSERT INTO `itemColors` (`items_id`,`itemPhoto`,`itemColor`,`itemHex`,`itemDate`) VALUES
('3','김치','일산칼국수','#663362',now());
INSERT INTO `itemColors` (`items_id`,`itemPhoto`,`itemColor`,`itemHex`,`itemDate`) VALUES
('4','김치','일산26남','#663363',now());
INSERT INTO `itemColors` (`items_id`,`itemPhoto`,`itemColor`,`itemHex`,`itemDate`) VALUES
('5','김치','대전텃밭','#221156',now());
INSERT INTO `itemColors` (`items_id`,`itemPhoto`,`itemColor`,`itemHex`,`itemDate`) VALUES
('6','김치','대전과수원','#225533',now());
INSERT INTO `itemColors` (`items_id`,`itemPhoto`,`itemColor`,`itemHex`,`itemDate`) VALUES
('7','김치','울산바위','#115533',now());
INSERT INTO `itemColors` (`items_id`,`itemPhoto`,`itemColor`,`itemHex`,`itemDate`) VALUES
('8','김치','울산아구찜','#994422',now());
INSERT INTO `itemColors` (`items_id`,`itemPhoto`,`itemColor`,`itemHex`,`itemDate`) VALUES
('9','김치','어둠제천','#13839',now());
INSERT INTO `itemColors` (`items_id`,`itemPhoto`,`itemColor`,`itemHex`,`itemDate`) VALUES
('10','김치','분당천당','#587333',now());

INSERT INTO `wishLists` (`items_id`,`users_id`) VALUES
('1','1');
INSERT INTO `wishLists` (`items_id`,`users_id`) VALUES
('2','1');
INSERT INTO `wishLists` (`items_id`,`users_id`) VALUES
('3','1');

INSERT INTO `reviews` (`items_id`,`reviewPhoto`,`reviewRating`,`users_id`,`reviewMessage`) VALUES
('1','포토','5','3','별로좋음');
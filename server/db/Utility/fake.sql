USE `colorize`;

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

INSERT INTO `wishLists` (`items_id`,`users_id`) VALUES
('1','1');
INSERT INTO `wishLists` (`items_id`,`users_id`) VALUES
('2','1');
INSERT INTO `wishLists` (`items_id`,`users_id`) VALUES
('3','1');

INSERT INTO `reviews` (`items_id`,`reviewPhoto`,`reviewRating`,`users_id`,`reviewMessage`) VALUES
('1','포토','5','3','별로좋음');
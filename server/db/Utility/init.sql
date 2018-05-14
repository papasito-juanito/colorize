USE `colorize`;

INSERT INTO `categories` (`categoryName`) VALUES
('Lip');
INSERT INTO `categories` (`categoryName`) VALUES
('Foundation');
INSERT INTO `categories` (`categoryName`) VALUES
('EyeShadow');

INSERT INTO `categories2` (`categories_id`,`category2Name`) VALUES
((SELECT `id` FROM `categories` WHERE `categoryName` = 'Lip'),'립스틱');
INSERT INTO `categories2` (`categories_id`,`category2Name`) VALUES
((SELECT `id` FROM `categories` WHERE `categoryName` = 'Lip'),'립글로스');
INSERT INTO `categories2` (`categories_id`,`category2Name`) VALUES
((SELECT `id` FROM `categories` WHERE `categoryName` = 'Lip'),'립틴트');
INSERT INTO `categories2` (`categories_id`,`category2Name`) VALUES
((SELECT `id` FROM `categories` WHERE `categoryName` = 'Lip'),'립밤');
INSERT INTO `categories2` (`categories_id`,`category2Name`) VALUES
((SELECT `id` FROM `categories` WHERE `categoryName` = 'Lip'),'립라커');

INSERT INTO `brands` (`brandName`) VALUES
('입생로랑');
INSERT INTO `brands` (`brandName`) VALUES
('아리따움');
INSERT INTO `brands` (`brandName`) VALUES
('에뛰드하우스');
INSERT INTO `brands` (`brandName`) VALUES
('세포라');
INSERT INTO `brands` (`brandName`) VALUES
('맥');

INSERT INTO `tones` (`toneName`) VALUES
('Spring');
INSERT INTO `tones` (`toneName`) VALUES
('Summer');
INSERT INTO `tones` (`toneName`) VALUES
('Autumn');
INSERT INTO `tones` (`toneName`) VALUES
('Winter');
INSERT INTO `tones` (`toneName`) VALUES
('Unknown');

INSERT INTO `skins` (`skinName`) VALUES
('건성');
INSERT INTO `skins` (`skinName`) VALUES
('지성');
INSERT INTO `skins` (`skinName`) VALUES
('중성/복합성');
INSERT INTO `skins` (`skinName`) VALUES
('민감성');

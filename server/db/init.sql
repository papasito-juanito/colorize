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

INSERT INTO `colorFamilies` (`familyName`,`familyRGB`) VALUES
('Nude','rgb(218, 140, 127)');
INSERT INTO `colorFamilies` (`familyName`,`familyRGB`) VALUES
('Coral','rgb(255, 104, 104)');
INSERT INTO `colorFamilies` (`familyName`,`familyRGB`) VALUES
('Orange','rgb(255, 92, 28)');
INSERT INTO `colorFamilies` (`familyName`,`familyRGB`) VALUES
('Red','rgb(229, 18, 32)');
INSERT INTO `colorFamilies` (`familyName`,`familyRGB`) VALUES
('Pink','rgb(255, 96, 162)');
INSERT INTO `colorFamilies` (`familyName`,`familyRGB`) VALUES
('Berry','rgb(167, 8, 73)');
INSERT INTO `colorFamilies` (`familyName`,`familyRGB`) VALUES
('Burgundy','rgb(128, 0, 32)');
INSERT INTO `colorFamilies` (`familyName`,`familyRGB`) VALUES
('Purple','rgb(128, 0, 128)');

INSERT INTO `tones` (`toneName`) VALUES
('Warm');
INSERT INTO `tones` (`toneName`) VALUES
('Cool');
INSERT INTO `tones` (`toneName`) VALUES
('Unknown');

INSERT INTO `toneDetails` (`tones_id`,`toneDetail`) VALUES
((SELECT `id` FROM `tones` WHERE `toneName` = 'warm'),'Spring');
INSERT INTO `toneDetails` (`tones_id`,`toneDetail`) VALUES
((SELECT `id` FROM `tones` WHERE `toneName` = 'cool'),'Summer');
INSERT INTO `toneDetails` (`tones_id`,`toneDetail`) VALUES
((SELECT `id` FROM `tones` WHERE `toneName` = 'warm'),'Autumn');
INSERT INTO `toneDetails` (`tones_id`,`toneDetail`) VALUES
((SELECT `id` FROM `tones` WHERE `toneName` = 'cool'),'Winter');
INSERT INTO `toneDetails` (`tones_id`,`toneDetail`) VALUES
((SELECT `id` FROM `tones` WHERE `toneName` = 'unknown'),'Unknown');

INSERT INTO `skins` (`skinName`) VALUES
('건성');
INSERT INTO `skins` (`skinName`) VALUES
('지성');
INSERT INTO `skins` (`skinName`) VALUES
('중성/복합성');
INSERT INTO `skins` (`skinName`) VALUES
('민감성');

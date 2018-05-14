USE `colorize`;
/*
INSERT INTO `items` (`categories2_id`,`itemPhoto`,`itemName`,`brands_id`,`colorFamilies_id`,`itemColor`,`itemRGB`,`itemVolume`,`itemPrice`,`itemRelease`,`itemDetail`) VALUES
((SELECT `id` FROM `categories2` WHERE `category2Name` = '중간카테고리'),
'아이템포토',
'아이템이름',
(SELECT `id` FROM `brands` WHERE `brandName` = '브랜드명'),
(SELECT `id` FROM `colorFamilies` WHERE `familyName` = '컬러페밀리'),
'컬러명',
'RGB',
'용량',
'가격',
'1111-11-11',
'상세설명');
*/

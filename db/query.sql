-- ***post***

-- users (usersDetails, toneDetails, tones) // 회원가입시 포스트

-- logs // 로그인, 페이지 이동시 포스트

-- reviews // 리뷰 작성시 포스트

-- wishLists // 위시리스트 추가시 포스트



-- ***get***

-- '/', 메인화면에서 8가지 색테마 보여줌
SELECT * FROM colorFamilies;

-- '/login', 로그인 호면에서 아이디 비번 확인
-- 아이디가 있는지 (1이면 가입된 사람)
SELECT COUNT(id) FROM users WHERE userMail = 'input';
-- 비번이 맞는지
SELECT userPassword FROM users WHERE userMail = 'input';

-- '/signup', 회원가입시 
-- 아이디가 있는지 (1이면 가입된 사람)
SELECT COUNT(id) FROM users WHERE userMail = 'input';
-- 아이디가 있는지 (1이면 가입된 사람)
SELECT COUNT(id) FROM users WHERE userName = 'input';

-- '/컬러', 메인화면에서 선택한 컬러와 비슷한 종류의 아이템 사진, RGB, 아이템 이름 출력
SELECT ic.itemPhoto photo, ic.itemColor color, ic.itemRGB RGB, b.brandName brand, i.itemName item
FROM brands b, items i, itemColors ic, colorFamilies cf, colorFamilies_itemColors ci
WHERE b.id = i.brands_id AND i.id = ic.items_id AND ic.id = ci.itemColors_id AND cf.id = ci.colorFamilies_id AND cf.familyName = 'Nude';

-- '/아이템', 컬러화면에서 선택한 아이템의 사진, 이름, 가격, 용량, 설명, 별점 출력
SELECT ic.itemPhoto photo, b.brandName brand, i.itemName item, i.itemPrice price, 
i.itemVolume volume, i.itemDetail description, r1.count 1star, r2.count 2star, 
r3.count 3star, r4.count 4star, r5.count 5star, rt.count total, r.rating average
FROM brands b, items i, itemColors ic, 
(SELECT COUNT(reviewRating) count FROM reviews WHERE reviewRating = '1') r1,
(SELECT COUNT(reviewRating) count FROM reviews WHERE reviewRating = '2') r2,
(SELECT COUNT(reviewRating) count FROM reviews WHERE reviewRating = '3') r3,
(SELECT COUNT(reviewRating) count FROM reviews WHERE reviewRating = '4') r4,
(SELECT COUNT(reviewRating) count FROM reviews WHERE reviewRating = '5') r5,
(SELECT COUNT(reviewRating) count FROM reviews) rt,
(SELECT items_id, AVG(reviewRating) AS rating FROM items, reviews GROUP BY items_id) r
WHERE b.id = i.brands_id AND i.id = ic.items_id AND i.itemName = '뺴뺴로';

-- '/아이템', 컬러화면에서 선택한 아이템에 대한 리뷰의 작성자 아이디, 나이, 피부, 아이템평가, 리뷰공감 출력
SELECT r.reviewPhoto photo, u.userName user, YEAR(NOW())-YEAR(u.birthDate) age, t.toneDetail tone, r.reviewRating rating, r.reviewMessage message, r.reviewTime writeAt, rl.likes
FROM toneDetails t, userDetails ud, users u, items i, reviews r, (SELECT COUNT(reviews_id) likes FROM reviewLikes, reviews, items WHERE items.id = reviews.items_id AND reviews.id = reviewLikes.reviews_id) rl
WHERE t.id = ud.toneDetails_id AND ud.id = u.userDetails_id AND u.id = r.users_id AND i.itemName = '뺴뺴로';

-- '/아이템', 글 작성화면시 로그인사용자 아이디, 나이, 피부 출력
SELECT u.userName user, YEAR(NOW())-YEAR(u.birthDate) age, t.toneDetail tone
FROM users u, userDetails ud, toneDetails t
WHERE t.id = ud.toneDetails_id AND ud.id = u.userDetails_id AND u.userMail = 'admin@code.com';


FROM reviews;
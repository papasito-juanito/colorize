module.exports = {
  info: `
SELECT u.userPhoto photo, u.userName name, t.toneName tone,
 YEAR(NOW())-YEAR(u.birthDate) age, u.gender gender, r.reviewMessage message
FROM users u, tones t, reviews r
WHERE u.userToggle='true' AND r.reviewToggle='true' AND
 t.id=u.tones_id AND u.id=r.users_id AND u.userMail=? AND r.itemColors_id=?;
 `,
  list: `
SELECT m.*, IFNULL(t.toggle,'false') toggle
FROM
  (SELECT r.id review_id, r.reviewPhoto photo, u.userName name, 
    YEAR(NOW())-YEAR(u.birthDate) age, t.toneName tone, r.reviewRating rating,
    r.reviewMessage message, r.reviewTime writeAt, rl.likes likes
  FROM itemColors ic, users u, reviews r, tones t, 
    (SELECT ri.id review_id, IFNULL(COUNT(CASE WHEN rli.likeToggle='true' THEN 1 END),0) likes  
    FROM reviews ri
    LEFT JOIN reviewLikes rli 
    ON ri.id=rli.reviews_id GROUP BY ri.id) rl
  WHERE ic.colorToggle='true' AND u.userToggle='true' AND r.reviewToggle='true' AND
    ic.id=r.itemColors_id AND u.id=r.users_id AND t.id=u.tones_id AND 
    r.id=rl.review_id AND ic.id=?) m
LEFT JOIN
  (SELECT rj.id review_id, rlj.likeToggle toggle 
  FROM users uj, reviews rj, reviewLikes rlj
  WHERE uj.userToggle='true' AND rj.reviewToggle='true' AND rlj.likeToggle='true' AND
    uj.id=rlj.users_id AND rj.id=rlj.reviews_id AND
    uj.userMail=?) t
ON m.review_id=t.review_id
ORDER BY writeAt DESC;
  `,
  rank: `
SELECT m.*, IFNULL(t.toggle,'false') toggle
FROM
  (SELECT r.id review_id, r.reviewPhoto photo, u.userName name, 
    YEAR(NOW())-YEAR(u.birthDate) age, t.toneName tone, r.reviewRating rating,
    r.reviewMessage message, r.reviewTime writeAt, rl.likes likes
  FROM itemColors ic, users u, reviews r, tones t, 
    (SELECT ri.id review_id, IFNULL(COUNT(CASE WHEN rli.likeToggle='true' THEN 1 END),0) likes 
    FROM reviews ri
    LEFT JOIN reviewLikes rli 
    ON ri.id=rli.reviews_id GROUP BY ri.id) rl
  WHERE ic.colorToggle='true' AND u.userToggle='true' AND r.reviewToggle='true' AND
    ic.id=r.itemColors_id AND u.id=r.users_id AND t.id=u.tones_id AND 
    r.id=rl.review_id AND ic.id=?) m
LEFT JOIN
  (SELECT rj.id review_id, rlj.likeToggle toggle 
  FROM users uj, reviews rj, reviewLikes rlj
  WHERE uj.userToggle='true' AND rj.reviewToggle='true' AND rlj.likeToggle='true' AND
    uj.id=rlj.users_id AND rj.id=rlj.reviews_id AND
    uj.userMail=?) t
ON m.review_id=t.review_id
ORDER BY likes DESC LIMIT 3;
  `,
  user: `
  SELECT r.id review_id, r.reviewPhoto photo, u.userName name, 
  YEAR(NOW())-YEAR(u.birthDate) age, t.toneName tone, r.reviewRating rating,
  r.reviewMessage message, r.reviewTime writeAt, rl.likes likes,
  ic.itemHex hex, ic.itemPhoto photo, c.category2Name category,
  ic.itemColor color, b.brandName brand, i.itemName name, i.itemPrice price,
  i.itemVolume volume, ic.itemDate date
FROM itemColors ic, users u, reviews r, tones t, 
  (SELECT ri.id review_id, IFNULL(COUNT(CASE WHEN rli.likeToggle='true' THEN 1 END),0) likes 
  FROM reviews ri
  LEFT JOIN reviewLikes rli 
  ON ri.id=rli.reviews_id GROUP BY ri.id) rl,
  categories2 c, brands b, items i
WHERE ic.colorToggle='true' AND u.userToggle='true' AND r.reviewToggle='true' AND
  c.id=i.categories2_id AND b.id=i.brands_id AND i.id=ic.items_id AND
  ic.id=r.itemColors_id AND u.id=r.users_id AND t.id=u.tones_id AND 
  r.id=rl.review_id AND u.userMail="admin@code.com";
  `,
};

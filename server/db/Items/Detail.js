const query = `
SELECT i.id id, ic.itemPhoto photo, b.brandName brand, i.itemName item, i.itemPrice price, 
i.itemVolume volume, i.itemDetail description, r1.count 1star, r2.count 2star, 
r3.count 3star, r4.count 4star, r5.count 5star, rt.count total, r.rating average
FROM brands b, items i, itemColors ic, 
(SELECT COUNT(reviewRating) count FROM reviews WHERE reviewRating='1') r1,
(SELECT COUNT(reviewRating) count FROM reviews WHERE reviewRating='2') r2,
(SELECT COUNT(reviewRating) count FROM reviews WHERE reviewRating='3') r3,
(SELECT COUNT(reviewRating) count FROM reviews WHERE reviewRating='4') r4,
(SELECT COUNT(reviewRating) count FROM reviews WHERE reviewRating='5') r5,
(SELECT COUNT(reviewRating) count FROM reviews) rt,
(SELECT items_id, AVG(reviewRating) AS rating FROM items, reviews GROUP BY items_id) r
WHERE i.itemToggle='true' AND b.id=i.brands_id AND i.id=ic.items_id AND i.itemName='뺴뺴로';
`
module.exports = query;

/* result
+----+--------+--------------+-----------+-------+----------+-----------------+-------+-------+-------+-------+-------+-------+---------+
| id | photo  | brand        | item      | price | volume   | description     | 1star | 2star | 3star | 4star | 5star | total | average |
+----+--------+--------------+-----------+-------+----------+-----------------+-------+-------+-------+-------+-------+-------+---------+
*/

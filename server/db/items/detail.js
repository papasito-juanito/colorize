const query = `
SELECT ic.id item_id, ic.itemPhoto photo, b.brandName brand, i.itemName item, i.itemPrice price, i.itemVolume volume, i.itemDetail description, r1.count 1star, r2.count 2star, r3.count 3star, r4.count 4star, r5.count 5star, rt.count total, r.rating average
FROM brands b, items i, itemColors ic, (SELECT COUNT(reviewRating) count FROM reviews WHERE reviewRating='1') r1, (SELECT COUNT(reviewRating) count FROM reviews WHERE reviewRating='2') r2, (SELECT COUNT(reviewRating) count FROM reviews WHERE reviewRating='3') r3, (SELECT COUNT(reviewRating) count FROM reviews WHERE reviewRating='4') r4, (SELECT COUNT(reviewRating) count FROM reviews WHERE reviewRating='5') r5, (SELECT COUNT(reviewRating) count FROM reviews) rt, (SELECT items_id, AVG(reviewRating) AS rating FROM items, reviews GROUP BY items_id) r
WHERE i.itemToggle='true' AND b.id=i.brands_id AND i.id=ic.items_id AND ic.id=?;
`
module.exports = query;


SELECT ic.id items_id, ic.itemPhoto photo, ic.itemHex hex, b.brandName brand, i.itemName item, i.itemPrice price, i.itemVolume volume, i.itemDetail description, ra.rating average, rn.reviews reviews
FROM brands b, items i, itemColors ic, (SELECT itemColors_id, AVG(reviewRating) rating FROM items, reviews GROUP BY itemColors_id) ra, (SELECT itemColors_id, COUNT(reviewRating) AS reviews FROM items, reviews GROUP BY itemColors_id) rn
WHERE b.id=i.brands_id AND i.id=ic.items_id AND ic.id=ra.itemColors_id AND ic.id=rn.itemColors_id AND ic.id IN (?);
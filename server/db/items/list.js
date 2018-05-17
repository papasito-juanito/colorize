const query = `
SELECT i.id item_id, ic.itemPhoto photo, ic.itemHex Hex, b.brandName brand, i.itemName item, i.itemPrice price, i.itemVolume volume, rs.rating average, rn.reviews
FROM brands b, items i, itemColors ic, reviews r, (SELECT items_id, AVG(reviewRating) AS rating FROM items, reviews GROUP BY items_id) rs, (SELECT items_id, COUNT(reviewRating) AS reviews FROM items, reviews GROUP BY items_id) rn
WHERE i.itemToggle='true' AND r.reviewToggle='true' AND b.id=i.brands_id AND i.id=ic.items_id AND i.id=r.items_id AND ic.id IN (?);
`
module.exports = query;
`

SELECT ic.id item_id, ic.itemPhoto photo, ic.itemHex hex, b.brandName brand, i.itemName item, i.itemPrice price, i.itemVolume volume, ra.rating average, rn.reviews reviews
FROM brands b, items i, itemColors ic, reviews r, (SELECT itemColors_id, AVG(reviewRating) AS rating FROM itemColors, reviews GROUP BY itemColors_id) ra, (SELECT itemColors_id, COUNT(reviewRating) AS reviews FROM items, reviews GROUP BY itemColors_id) rn
WHERE i.itemToggle='true' AND ic.colorToggle='true' AND r.reviewToggle='true' AND b.id=i.brands_id AND i.id=ic.items_id AND ic.id=r.itemColors_id

`
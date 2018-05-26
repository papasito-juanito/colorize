module.exports = {
  check: `
SELECT id 
FROM wishLists 
WHERE wishToggle='true' AND itemColors_id=? AND
  users_id=(SELECT id FROM users WHERE userMail=?);
  `,
  list: `
SELECT i.id item_id, ic.itemPhoto photo, ic.itemHex Hex, b.brandName brand, i.itemName item, i.itemPrice price, i.itemVolume volume, rs.rating average, rn.reviews
FROM brands b, items i, itemColors ic, reviews r, (SELECT items_id, AVG(reviewRating) AS rating FROM items, reviews GROUP BY items_id) rs, (SELECT items_id, COUNT(reviewRating) AS reviews FROM items, reviews GROUP BY items_id) rn, wishLists w
WHERE i.itemToggle='true' AND r.reviewToggle='true' AND b.id=i.brands_id AND i.id=ic.items_id AND i.id=r.items_id AND i.id=(?);
`
};
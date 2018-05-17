const query = `
SELECT r.id id, ic.itemPhoto itemPhoto, ic.itemHex hex, b.brandName, i.itemName item, r.reviewPhoto reviewPhoto, r.reviewRating rating, r.reviewMessage message, r.reviewTime writeAt, rl.likes
FROM brands b, items i, itemColors ic, users u, reviews r, (SELECT COUNT(reviews_id) likes FROM reviewLikes, reviews, items WHERE items.id = reviews.items_id AND reviews.id = reviewLikes.reviews_id) rl
WHERE u.userToggle='true' AND i.itemToggle='true' AND r.reviewToggle='true' AND i.id=ic.items_id AND b.id=i.brands_id AND u.id=r.users_id AND i.id=r.items_id AND u.id=?;
`
module.exports = query;

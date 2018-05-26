module.exports = {
  message: `
UPDATE reviews SET reviewPhoto=?, reviewRating=?, reviewMessage=? WHERE id=?;
  `,
  like: {
    true: `
UPDATE reviewLikes SET likeToggle="false" WHERE reviews_id=? AND users_id=?;
    `,
    false: `
UPDATE reviewLikes SET likeToggle="true" WHERE reviews_id=? AND users_id=?;
    `
  } 
}

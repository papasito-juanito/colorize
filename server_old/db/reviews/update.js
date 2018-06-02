module.exports = {
  message: `
UPDATE reviews SET reviewPhoto=?, reviewRating=?, reviewMessage=? WHERE id=?;
  `,
  like: {
    true: `
UPDATE reviewLikes SET likeToggle="false" WHERE reviews_id=? AND users_id=(SELECT id FROM users WHERE userMail=?);
    `,
    false: `
UPDATE reviewLikes SET likeToggle="true" WHERE reviews_id=? AND users_id=(SELECT id FROM users WHERE userMail=?);
    `
  } 
}

const query = `
UPDATE reviews SET reviewPhoto='바꾼사진', reviewRating='4', reviewMessage='바까봄' WHERE id=3;
`
module.exports = query;

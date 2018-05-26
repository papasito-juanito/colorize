module.exports = `
UPDATE wishLists 
SET wishToggle='false' 
WHERE itemColors_id=? AND users_id=(SELECT id FROM users WHERE userMail=?);
`;

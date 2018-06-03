module.exports = `
UPDATE wishLists 
SET wishToggle='true' 
WHERE itemColors_id=? AND users_id=(SELECT id FROM users WHERE userMail=?);
`; 

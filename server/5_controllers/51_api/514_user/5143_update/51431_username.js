// Local import
const check = require('../../../../6_utility/60_check/602_userName');

module.exports = async (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[51431_cont] activated check username query: ${check}`);
  }

  const userName = await check(req.body.userName);
  console.log('username', userName);
  switch (userName.length) {
    case 0: {
      res.json({ success: true, message: 'valid username' });
      break;
    }
    case 1: {
      res.json({ success: false, message: 'invalid username' });
      break;
    }
    default: {
      res.json({ success: false, message: 'unexpected error' });
    }
  }
};

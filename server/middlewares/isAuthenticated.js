// Global import
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  var token = req.headers['x-access-token'] || req.headers.token;
	// token = token.replace(/(\s*)/g, ""); // 공백제거;
	if ( !token ) {
		return res.status(403).json({
			success : false,
			message : 'Login first'
		});
	}

	const promise = new Promise( (resolve, reject) => {
		jwt.verify(
			token,
			req.app.get('jwt-secret'),
			(err, decodeed) => {
				if ( err ) reject(err);
				resolve(decodeed);
			}
		);
	});

	const onError = (error) => {
		res.status(403).json({
			success : false,
			message : error.message
		});
	};

	promise
	.then( (decodeed) => {
		req.decodeed = decodeed; 
		next(); 
	})
	.catch(onError);
}

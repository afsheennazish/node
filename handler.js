/**
 * http://usejsdoc.org/
 */
'use strict'
var AWS = require('aws-sdk');
module.exports.hello=(event,context,callback)=> {
	const response={
			statusCode:200,
			body: JSON.stringify({
				message:"Hello Afsheen!"
			})
	
};
callback(null,response);

};
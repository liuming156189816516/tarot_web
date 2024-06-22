
import KJUR from 'jsrsasign';


var text = {

	jiami(params = {}) {
		let payload = {};
		let nowTime = Math.floor(Date.now() / 1000);
		if (params != {}) {
			payload = {
				auth_key: "a0fc2cacf9d50a1616c80c6dc0b0c764660331f7",
				iat: nowTime,
				nbf: nowTime - 10,
				params: params
			};
		} else {
			payload = {
				auth_key: "a0fc2cacf9d50a1616c80c6dc0b0c764660331f7",
				iat: nowTime,
				nbf: nowTime - 10,
			};
		}
		const tokenParam = {
			alg: 'HS256',
			typ: 'JWT'
		};
		const secretKey = '4fa7b4892caa99b9b149ea50ad361fe2';
		const token = KJUR.jws.JWS.sign('HS256', tokenParam, payload, {
			rstr: secretKey
		});
		return token
	}

}




export default text;

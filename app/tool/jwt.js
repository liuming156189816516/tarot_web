import KJUR from 'jsrsasign';

export const createJWTtoken = (params = {}) => {
	// 生成 Token
	const tokenParam = {
		alg: 'HS256',
		typ: 'JWT'
	};
	const timerNow = Math.floor(Date.now() / 1000);
	const payload = {
		auth_key: "a0fc2cacf9d50a1616c80c6dc0b0c764660331f7",
		iat: Math.floor(Date.now() / 1000),
		nbf:timerNow - 10,
		params:params
	};

	const secretKey = '4fa7b4892caa99b9b149ea50ad361fe2';

	const token = KJUR.jws.JWS.sign('HS256', tokenParam, payload, {rstr:secretKey});

	return token
}
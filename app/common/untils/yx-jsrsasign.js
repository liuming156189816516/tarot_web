import { KJUR } from 'jsrsasign';

// 密钥
const YX_SECRET = '4fa7b4892caa99b9b149ea50ad361fe2';
// auth_key
const YX_AUTH_KEY = 'a0fc2cacf9d50a1616c80c6dc0b0c764660331f7';
// 加密敏感信息
export const yxEncrypt = (data) => {
	const tokenParam = { alg: 'HS256', typ: 'JWT' };
	const timerNow = Math.floor(Date.now() / 1000);
	
	const payload = {
		auth_key: YX_AUTH_KEY,
		iat:timerNow,
		nbf:timerNow - 10,
		params:data //需要加密的data放到params
	};
	
	return KJUR.jws.JWS.sign('HS256', tokenParam, payload, {rstr:YX_SECRET});
}
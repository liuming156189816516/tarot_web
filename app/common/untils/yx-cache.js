/**
 * 封装uniapp Storage
 * 
 * - key提供前缀标识
 * - value存储值加密(可选的)
 * */
class Cache {
	constructor() {
		// key的前缀字符串
		this.prefix = '0904project_';
    if(!Cache.instance) {// 单例模式
      Cache.instance = this;
    }
    return Cache.instance;
	}

  /**
   * 将数据存储在本地缓存中指定的 key 中
   * 
   * @param {string} key 键值
   * @param {any} value 存储值
   * @param {boolean} isEncrypt 是否加密
   * @return void
   */
	set(key, value, isEncrypt = true) {
		try {
			const valueStr = JSON.stringify({
				type: dataType(value),
				data: value
			})

      let finnalValue = isEncrypt ? encrypto(valueStr, 997, 25) : value;
			uni.setStorageSync(this.prefix + key, finnalValue);
		} catch (e) {
			throw e;
		}
	}
	/**
   * 从本地缓存中获取指定 key 对应的内容
   * 
   * @param {string} key 键值
   * @param {boolean} 是否加密
   * @return any
   */
	get(key, isEncrypt = true) {
		let value;
		try {
			value = uni.getStorageSync(this.prefix + key);
      
      if(!value) {// 为空时返回undefined
        return undefined;
      }else {
        let finnalValue = isEncrypt ? JSON.parse(decrypto(value, 997, 25)).data : value;
        return finnalValue;
      }
		} catch (e) {
      if(e.message == 'str.split is not a function') {
        console.warn(`请注意, storage存储key=${key}并不是加密的!`);
      }else {
        throw e;
      }
		}
	}
  /**
   * 从本地缓存中移除指定 key
   * 
   * @param {string} key 键值
   * @return void
   */
	del(key) {
		try {
			uni.removeStorageSync(this.prefix + key);
		} catch (e) {
			throw e;
		}
	}
  /**
   * 返回一个布尔值，表示 key 是否在本地缓存之中
   * 
   * @param {string} key 键值
   * @return void
   */
	has(key) {
		let isExist = false;
		try {
			const res = uni.getStorageInfoSync();
			isExist = res.keys.includes(this.prefix + key);
      return isExist;
		} catch (e) {
			throw e;
		}
	}
  /**
   * 清理本地数据缓存
   * 
   * @return void
   */
	clear() {
		try {
			uni.clearStorageSync();
		} catch (e) {
			throw e;
		}
	}
}

/**
 * encrypto 加密程序
 * 
 * @param {string} str 待加密字符串
 * @param {number} xor 异或值
 * @param {number} hex 加密后的进制数(2-36)
 * @return {string} 加密后的字符串
 */
export function encrypto(str, xor, hex) {
	const resultList = []
	hex = hex <= 25 ? hex : hex % 25

	for (let i = 0; i < str.length; i++) {
		let charCode = str.charCodeAt(i),
			charCodeStr
		// 进行异或加密
		charCode = (charCode) ^ xor
		// 异或加密后的字符转成 hex 位数的字符串
		charCodeStr = charCode.toString(hex)
		resultList.push(charCodeStr)
	}

	const splitStr = String.fromCharCode(hex + 97)
	return resultList.join(splitStr)
}
/**
 * decrypto 解密程序
 * @param {string} str 待加密字符串
 * @param {number} xor 异或值
 * @param {number} hex 加密后的进制数(2-36)
 * @return {string} 加密后的字符串
 */
export function decrypto(str, xor, hex) {
	let strCharList = []
	const resultList = []
	hex = hex <= 25 ? hex : hex % 25
	// 解析出分割字符
	const splitStr = String.fromCharCode(hex + 97)
	// 分割出加密字符串的加密后的每个字符
	strCharList = str.split(splitStr)

	for (let i = 0; i < strCharList.length; i++) {
		let charCode = parseInt(strCharList[i], hex)
		charCode = (charCode) ^ xor
		const strChar = String.fromCharCode(charCode)
		resultList.push(strChar)
	}
	return resultList.join('')
}

/**数据类型判断
 *
 * @param {any} target 各种数据值
 * @return {string} 数据类型
 */
function dataType(target) {
	var template = {
		'[object Array]': 'array',
		'[object Object]': 'object',
		'[object Number]': 'object-number',
		'[object Boolean]': 'object-boolean',
		'[object String]': 'object-string'
	}
	if (typeof(target) == 'object') {
		if (target == null) {
			return 'null';
		}
		var str = Object.prototype.toString.call(target);
		return template[str];
	} else {
		return typeof(target);
	}
}

export default new Cache();
export {
	dataType
};
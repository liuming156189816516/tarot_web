import * as feedback from '@/common/utils/hf-feedback.js';

/**
 * 验证一个表单项
 * 
 * @param {array} rulesItem 表单项rules
 * @param {any} rulesItem 表单项rules
 * @return boolean 验证结果
 * */
export const formValidateOne = (rulesItem, validateVal) => {
	let result = true;

	let len = rulesItem.rules.length;
	for (let i = 0; i < len; i++) {
		rulesItem.errMsg = '';
		if (rulesItem.rules[i].required) {
			if (!validateVal) {
				rulesItem.errMsg = rulesItem.rules[i].errMsg;
				result = false;
				break;
			}
		}
		if (rulesItem.rules[i].regexp) {
			if (!rulesItem.rules[i].regexp.test(validateVal)) {
				rulesItem.errMsg = rulesItem.rules[i].errMsg;
				result = false;
				break;
			}
		}
	}

	return result;
}
/**
 * 验证所有表单项
 * 
 * @param {array} formRules 表单rules
 * @param {object} formData 表单formData
 * @return Promise<boolean> 验证结果
 * */
export const formValidateAll = (formRules, formData) => {
	return new Promise((resolve, reject) => {
		let result = true;

		formRules.forEach(item => {
			let validateVal = formData[item.prop]; // 当前验证值
			result = formValidateOne(item, validateVal);
		})

		result == true ? resolve('表单校验成功！') : reject('表单校验失败！');
	})
};



/**
 * 验证手机号
 * 
 * @param {string} tel 手机号
 * @return Promise<boolean> 验证结果
 * */
export const yxValidatePhone = (tel) => {
	if (!tel) {
		feedback.showToast('手机号不能为空')
		return false
	}
	if (!(/^1[3456789]\d{9}$/.test(tel))) {
		feedback.showToast('请输入正确的手机号码')
		return false
	}
	return true
}
/**
 * 验证密码
 * 
 * @param {string} password 密码
 * @return Promise<boolean> 验证结果
 * */
export const yxValidatePassword = (password) => {
	if (!password) {
		feedback.showToast('密码不能为空')
		return false
	}
	if (password.length < 6 || password.length > 20) {
		feedback.showToast('密码长度为6-20位')
		return false
	}
	// 检查密码是否包含数字   ||   检查密码是否包含字母或特殊字符
	if (!(/\d/.test(password)) || !(/[a-zA-Z!@_#$%^&*()-+=,.?]/.test(password))) {
		feedback.showToast('密码应包含数字、特殊符号、字母')
		return false
	}
	return true
}
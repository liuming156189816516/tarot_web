/**
 * 路由跳转
 * 
 * @param {object} 配置对象
 * @return void
 */
export const route = (config) => {
  // 解构参数
  let {
      url,
      type = 'navigateTo',// 跳转类型
      delta = 1,// navigateBack页面后退时,回退的层数
      params = {},// 传递的参数
      animationType = 'pop-in',// 窗口动画,只在APP有效
      animationDuration = 300,// 窗口动画持续时间,单位毫秒,只在APP有效
  } = config
  // 跳转地址拼接查询字符串
  url = url + '?' + queryObjToStr(params);
  
  switch(type) {
    case 'navigateTo': 
      uni.navigateTo({
        url,
        animationType,
        animationDuration
      });
      break;
    case 'redirectTo':  uni.redirectTo({ url }); break;
    case 'switchTab':  uni.switchTab({ url }); break;
    case 'reLaunch':  uni.reLaunch({ url }); break;
    case 'navigateBack':  uni.navigateBack({ delta }); break;
    default: throw new Error(`跳转类型 => ${type}不存在！`);
  }
}


/**queryStr转为queryObj(一般queryStr都传递原始值，这里也对类型转化做了处理)
 * 
 * @param {String} queryStr 查询字符串
 * @return object 查询对象
 */
export const queryStrToObj = (queryStr) => {
  let queryObj = {};

  let tempArr = decodeURIComponent(queryStr).split('&');
  tempArr.forEach((item, index) => {
    let [key, value] = item.split('=');
    // number类型处理
    value = /^\d+$/.test(value) ? parseFloat(value) : value;
    // boolean类型处理
    value = /^true$/.test(value) ? true : value;
    value = /^false$/.test(value) ? false : value;
    // undefined类型处理
    if(/^undefined$/.test(value)) {
      value = undefined;
    }
    // null类型处理
    if(/^null$/.test(value)) {
      value = null;
    }
    queryObj[key] = value;
  })

  return queryObj;
};
/**queryObj转为queryStr
 *
 * @param {object} queryObj 查询对象
 * @return string 查询字符串
 */
export const queryObjToStr = (queryObj) => {
  let tempArr = []
  for (let key in queryObj) {
    tempArr.push(`${key}=${queryObj[key]}`);
  }
  return tempArr.join('&');
};

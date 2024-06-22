/**格式化时间
 * @param {object | string | number} time 时间
 * @param {string} format 格式化形式字符串
 * @return string 格式化时间
*/
export const parseTime = (time, format = 'yyyy-MM-DD HH:mm:ss') => {
  if(!time) return null;
  // 获取日期对象
  dateObj = typeof time === 'object' ? time : new Date(time);
  // 获取年月日、时分秒
  const formatObj = {
    yyyy: dateObj.getFullYear(),
    yy: dateObj.getFullYear().toString().slice(2),
    MM: dateObj.getMonth() + 1,
    DD: dateObj.getDate(),
    HH: dateObj.getHours(),
    mm: dateObj.getMinutes(),
    ss: dateObj.getSeconds()
  }
  // 使用正则替换format字符串
  const timeStr = format.replace(/(yyyy|yy|MM|DD|HH|mm|ss)/g, (result, key) => {
    const value = formatObj[key];
    return value.toString().padStart(2, '0');//补0
  })
  return timeStr
}
/**
 * 获取一个时间段, 例如['2020-12-12 00:00:00', '2020-12-18 00:00:00']
 * @param {Date | string | number | undefined} startDate 起始日期(传入undefined时,起始日期为当日日期） 
 * @param {number} range 距离今天后几天
 * @param {boolean} includesTime 是否包含时间
 * @param {object} timeSuffix 指定时间后缀
 * @return array (日期 | 日期时间)范围数组
*/
export function getDateRange(
  startDate, range = 6,
  includesTime = false, timeSuffix = {startTime: ' 00:00:00', endTime: ' 00:00:00'}
) {
  // 若不传入起始日期，则默认为当日日期
  if(!startDate) {
    startDate = new Date();
  }else {
    if(typeof startDate !== 'object') {
      startDate = new Date(startDate);
    }
  }
  const startTime = includesTime ?
    parseTime(startDate, 'yyyy-MM-DD') + timeSuffix.startTime
    :
    parseTime(startDate, 'yyyy-MM-DD');

  // 取后range天
  const futureDate = new Date(startDate.getTime() + 3600 * 1000 * 24 * range)
  const endTime = includesTime ?
    parseTime(futureDate, 'yyyy-MM-DD') + timeSuffix.endTime
    :
    parseTime(futureDate, 'yyyy-MM-DD');

  return [startTime, endTime];
}

/**手机号码中间4位变成*
 * @param {string} tel 手机号码字符串
 * @return string 格式后手机号码
*/
export const telFormat = (tel) => {
  tel = String(tel); 
  return tel.substr(0,3) + '****' + tel.substr(7);
};

/**保留两位小数，第三位小数四舍五入
 * @param {string | number} 小数
 * @return {string} 格式化的小数
 */
export function decimalReserved(decimal) {
  // 截取至小数点后3位
  let strD3 = decimal.toFixed(3);

  // 截取字符串0 - 后3位字符
  let head3 = strD3.slice(0, strD3.length - 2);
  // 截取字符串倒数第2位
  let last_f1 = strD3.slice(strD3.length - 2, strD3.length - 1);
  // 截取字符串最后1位
  let last = strD3.slice(strD3.length - 1);

  // 计算最终值
  last_f1 = last >= 5 ? ++last_f1 : last_f1;

  return head3 + last_f1;
}

/**生成随机字符串,默认32位
 * @param {number} len 随机字符串长度
 * @return string 随机字符串
*/
export const randomStr = (len = 32) => {
  let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let strLen = chars.length;
  let randomStr = '';
  for(let i = 0; i < len; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * strLen));
  }
  return randomStr;
};

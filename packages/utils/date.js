/**
 * 日期格式化
 * @param    {Date}     date 日期
 * @param    {String}   fmt  格式
 * @return   {String}
 */
const dateFormat = (date: Date | string | number, fmt = 'yyyy-MM-dd'): string => {
    if (typeof date === 'string') {
        // 解决Safari invalid date问题
        date = date.replaceAll('-', '/');
    }
    date = new Date(date);
    const o = {
        'y+': date.getFullYear(), // 年
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds() // 毫秒
    } as {
        [key: string]: number | string;
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (`${o[k]}`) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
        }
    }
    return fmt;
};

export default {
    dateFormat
};

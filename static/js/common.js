const commonTools = {};
// 线上方法地址
commonTools.g_restUrl = 'http://icampaign.com.cn/customers/noob/app/index.php';
// 线下方法地址
/*commonTools.g_restUrl = 'http://192.168.0.5/noob/app/index.php';*/
commonTools.setCookie = function (name, value, myDay) {
  var oDate = new Date();
  oDate.setDate(oDate.getDate() + myDay);
  document.cookie = name + '=' + value + '; expires=' + oDate;
}

commonTools.getCookie = function (name) {
  //document.cookie获取当前网站的所有cookie
  var arr = document.cookie.split('; ');
  for (var i = 0; i < arr.length; i++) {
    var arr1 = arr[i].split('=');
    if (arr1[0] == name) {
      return arr1[1];
    }
  }
  return '';
}


commonTools.formatDate = function (date, showDetail) {
  var isShow = showDetail || false;
  var d = new Date(parseInt(date) * 1000)
  var year = d.getFullYear();
  var month = d.getMonth() + 1 > 9 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1);
  var date1 = d.getDate() > 9 ? d.getDate() : "0" + d.getDate();
  var hour = d.getHours() > 9 ? d.getHours() : "0" + d.getHours();
  var minute = d.getMinutes() > 9 ? d.getMinutes() : "0" + d.getMinutes();
  var second = d.getSeconds() > 9 ? d.getSeconds() : "0" + d.getSeconds();
  if (isShow)
    return year + "-" + month + "-" + date1 + " " + hour + ":" + minute + ":" + second;
  else
    return year + "-" + month + "-" + date1 + " " + hour + ":" + minute;
}

commonTools.formatHour = function (date) {
  var d = new Date(parseInt(date) * 1000);
  var month = d.getMonth() + 1 > 9 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1);
  var date1 = d.getDate() > 9 ? d.getDate() : "0" + d.getDate();
  var hour = d.getHours() > 9 ? d.getHours() : "0" + d.getHours();
  var minute = d.getMinutes() > 9 ? d.getMinutes() : "0" + d.getMinutes();
  var second = d.getSeconds() > 9 ? d.getSeconds() : "0" + d.getSeconds();
  return month + "-" + date1 + " " + hour + ":" + minute;
}

export {
  commonTools
}

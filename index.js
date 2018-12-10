const axios = require('axios');
const querystring = require('querystring');

const token = process.env.LINE_TOKEN;
const Line = function () {};
 
Line.prototype.notify = function(message) {
  console.log("message : " + message);
  axios(
    {
      method: 'post',
      url: 'https://notify-api.line.me/api/notify',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: querystring.stringify({
        message: message,
      }),
    }
  )
  .then( function(res) {
    console.log(res.data);
  })
  .catch( function(err) {
    console.error(err);
  });
}; 
 
exports.handler = function(event, context, callback) {
   console.log("serialNumber : " + event.serialNumber);
   console.log("batteryVoltage : " + event.batteryVoltage);
   console.log("clickType : " + event.clickType);
   const line = new Line();
   if (event.clickType == "SINGLE") {
     line.notify("おはよう！");
   } else if (event.clickType == "DOUBLE") {
     line.notify("こんにちは！")
   } else if (event.clickType == "LONG") {
     line.notify("こんばんは！")
   }
   callback(null, "success");
}

// ローカル試験用（環境変数 LINE_TOKEN を設定してください）
const line = new Line();
line.notify('ローカル試験です！');


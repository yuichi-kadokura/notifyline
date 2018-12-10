# Notify LINE from AWS IoT Button

Script to notify LINE message when AWS IoT Button is pressed.
Flow: AWS IoT Button-> Lambda-> LINE API-> LINE application

*Read this in other languages: [English](README.md), [日本語](README.ja.md).*

## Getting Started
1. Login to LINE and issue access token.
https://notify-bot.line.me/ja/
2. Download and install Node.js.
https://nodejs.org/download/release/v8.1.0/
3. Clone this repository.
4. Run to ``npm install`` install dependencies.

## Test with PC
1. Download and install AWS CLI.
2. AWS access key issue.
3. Set access key to AWS CLI.
```
$ aws configure
```
4. Run script.
```
$ export LINE_TOKEN=<LINE notify token>
$ node index.js
```

## Test with AWS
1. Create Lambda function.
2. Zip compressed source. (index.js, package.json, node_modules)
3. Upload a zip file to Lambda function.
4. Set environment variable. (Set LINE_TOKEN to <LINE notify token>)
5. Set test event
```
{
  "serialNumber": "XXXXXXXXXXXXXXXX",
  "batteryVoltage": "2000mV",
  "clickType": "SINGLE"
}
```
6. Run test.

## Run with AWS IoT Button
1. Configure device. (Wi-fi, Device certificate, Private key)
https://docs.aws.amazon.com/ja_jp/iot/latest/developerguide/configure-iot.html
2. Create an IoT 1-Click project and associate it with Lambda.
3. Press the button on the device.

## Sample
![Sample](.github/app.png)

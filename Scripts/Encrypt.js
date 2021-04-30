/*
ck加密方法
如要加密sqxsck.json，将此脚本和sqxsck.json放在同一目录，node运行此脚本即可生成加密后的sqxsck.txt
此处的key值可以自己设置。
 */

let fs = require('fs');
const crypto = require('crypto');
let key = "315542424"; //12345678,//'315542424',//124342331;


/*解密函数*/
function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

/*加密函数*/
function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    let crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

/*json文件加密示例*/
data = require('./sqxsck.json');
data = JSON.stringify(data);
let encrypted = aesEncrypt(data, key);
fs.writeFile("./sqxsck.txt", encrypted, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});

/*字符串加密示例*/
data1 = "{"id":"sqxh","name":"书旗小说","keys":["readck1","receivecoinck1","vediogoldprizeck1","vediodrawprizeck1","drawck1","userinfock1","readck2","receivecoinck2","vediogoldprizeck2","vediodrawprizeck2","drawck2","userinfock2","readck3","receivecoinck3","vediogoldprizeck3","vediodrawprizeck3","drawck3","userinfock3","readck4","receivecoinck4","vediogoldprizeck4","vediodrawprizeck4","drawck4","userinfock4","readck5","receivecoinck5","vediogoldprizeck5","vediodrawprizeck5","drawck5","userinfock5","readck6","receivecoinck6","vediogoldprizeck6","vediodrawprizeck6","drawck6","userinfock6","readck7","receivecoinck7","vediogoldprizeck7","vediodrawprizeck7","drawck7","userinfock7","readck8","receivecoinck8","vediogoldprizeck8","vediodrawprizeck8","drawck8","userinfock8","readck9","receivecoinck9","vediogoldprizeck9","vediodrawprizeck9","drawck9","userinfock9","readck10","receivecoinck10","vediogoldprizeck10","vediodrawprizeck10","drawck10","userinfock10","readck11","receivecoinck11","vediogoldprizeck11","vediodrawprizeck11","drawck11","userinfock11","readck12","receivecoinck12","vediogoldprizeck12","vediodrawprizeck12","drawck12","userinfock12","readck13","receivecoinck13","vediogoldprizeck13","vediodrawprizeck13","drawck13","userinfock13","readck14","receivecoinck14","vediogoldprizeck14","vediodrawprizeck14","drawck14","userinfock14","readck15","receivecoinck15","vediogoldprizeck15","vediodrawprizeck15","drawck15","userinfock15","readck16","receivecoinck16","vediogoldprizeck16","vediodrawprizeck16","drawck16","userinfock16","readck17","receivecoinck17","vediogoldprizeck17","vediodrawprizeck17","drawck17","userinfock17","readck18","receivecoinck18","vediogoldprizeck18","vediodrawprizeck18","drawck18","userinfock18","readck19","receivecoinck19","vediogoldprizeck19","vediodrawprizeck19","drawck19","userinfock19","readck20","receivecoinck20","vediogoldprizeck20","vediodrawprizeck20","drawck20","userinfock20"],"author":"@caixukun1","settings":[{"id":"sqxs","name":"当前账号","val":"1","type":"number","desc":"当前抓取ck记录的账号序号，如：1、2、4、"},{"id":"CountNumber","name":"账号个数","val":"1","type":"number","desc":"指定任务最多跑几个账号，根据抓取的账号数据个数来设值"}],"repo":"https://raw.githubusercontent.com/","icons":["https://s3.ax1x.com/2021/02/06/yYzYWR.png","https://s3.ax1x.com/2021/02/06/yYzYWR.png"],"script":"https://raw.githubusercontent.com/","icon":"https://s3.ax1x.com/2021/02/06/yYzYWR.png","favIcon":"mdi-star-outline","favIconColor":"grey","datas":[{"key":"readck1","val":"_public=skinId%3D999%26idfa%3DCDBA4387-53BB-40A8-B759-C9E8FD1517AC%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYEGvy/MNdMUDAGY03edni2Y8%26user_id%3D2020970327%26sn%3D9B898008F4DAEEB8DCD9772ECF1C99F323BB704E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D83A335F7BCB0F85B0231E7C8843DED0819E8D337%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwOTcwMzI3IiwidXRkaWQiOiIiLCJpbWVpIjoiODNBMzM1RjdCQ0IwRjg1QjAyMzFFN0M4ODQzREVEMDgxOUU4RDMzNyIsInNuIjoiOUI4OTgwMDhGNERBRUVCOERDRDk3NzJFQ0YxQzk5RjMyM0JCNzA0RSIsImV4cCI6MTYxNTc5NjY0NywidXNlcklkIjoiMjAyMDk3MDMyNyIsImlhdCI6MTYxNTI3ODI0Nywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.S6h0cpr2gRePV4znUB4Vtf2Ny2ttbCxxKBdJFDIXt3PlTJhK3Fhs6oVX0GNmzMO4if0Yf_7KSC_dtzbOWui_Iw%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1242x2208%26soft_id%3D21%26utdid%3DYEGvy/MNdMUDAGY03edni2Y8%26utype%3Dvip%26sdk%3D14.4&deliveryId=707&key=sq_app_ad&miniWua=HHnB_wG6VAtB7VRyY1QHnJcg7SJTyNRbBouzP6yqXyb4NHqY%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=19C69EE56BD164E408460E1A50A5DA82&timestamp=1615278282&userId=2020970327&wua=HIVW_MAcEJsY4i9kaTs3qgOfQM4vNBDvQVPRH2aO%2Bkvj8zsntC2/f85deBcybjG%2BeQ1iLEY0Z9koXPmyUSEZpcvXcFIvBnbNfFtFfiTCGZHM/WfVeOAWF7V7hbOLcxLD%2B/0CrsaQS72j3wsYi1qLGMZMUT4Th2yzo5dgFZKxUeOOeaCLedDTwvS6JgmzxBiT9d9ZzKp52Ew2eYFwo7vRl3OFr3OjFiXkoLUt0pXRmcUeBW0Y%3D&&{\"Cookie\":\"isg=BHFxLMRqtUfPIRlVD8c-0fBTivkLXuXQY6umllOGODgzepbMm6-CoT2KmogcqX0I; cna=153IGLGQOl0CASrI5y6JXxwg\",\"Accept\":\"*/*\",\"Connection\":\"keep-alive\",\"Content-Type\":\"application/x-www-form-urlencoded\",\"Accept-Encoding\":\"gzip, deflate, br\",\"Host\":\"ocean.shuqireader.com\",\"User-Agent\":\"shuqireader/4.3.6 (iPhone; iOS 14.4; Scale/3.00)\",\"Content-Length\":\"1550\",\"Accept-Language\":\"zh-Hans-CN;q=1\"}"},{"key":"receivecoinck1","val":"platform=1&src=&timestamp=1615278316&userId=2020970327&sqSv=1.0&appVer=4.3.6.0&placeId=&sign=de90052994b4c34a009cd186fabcc6bf&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20665%257CTag%2540Bucket%254028%2540280070236%26sdk%3D14.4%26utdid%3DYEGvy%252FMNdMUDAGY03edni2Y8%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2020970327%26sn%3D9B898008F4DAEEB8DCD9772ECF1C99F323BB704E%26umidtoken%3DYEGvy%252FMNdMUDAGY03edni2Y8%26msv%3D8.0.0%26brand%3DApple%26imei%3D83A335F7BCB0F85B0231E7C8843DED0819E8D337%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwOTcwMzI3IiwidXRkaWQiOiIiLCJpbWVpIjoiODNBMzM1RjdCQ0IwRjg1QjAyMzFFN0M4ODQzREVEMDgxOUU4RDMzNyIsInNuIjoiOUI4OTgwMDhGNERBRUVCOERDRDk3NzJFQ0YxQzk5RjMyM0JCNzA0RSIsImV4cCI6MTYxNTc5NjMxNSwidXNlcklkIjoiMjAyMDk3MDMyNyIsImlhdCI6MTYxNTI3NzkxNSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.sU8ReLM3GbHcIRX41IM4W_SdWtgFFQVoX09e3ndAjKls44xePZwPWPrVMtl0YIOvR7TVd3WctJfk2vLaHLOXNA%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1242x2208%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DCDBA4387-53BB-40A8-B759-C9E8FD1517AC&&{\"Origin\":\"https://render-web.shuqireader.com\",\"Accept-Encoding\":\"gzip, deflate, br\",\"Connection\":\"keep-alive\",\"Content-Type\":\"application/x-www-form-urlencoded\",\"Accept\":\"application/json, text/plain, */*\",\"Host\":\"ocean.shuqireader.com\",\"User-Agent\":\"Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.6.0) WindVane/8.6.1 Shuqi (iPhone8,2__shuqi__v4.3.6.0) 1242x2208 Winding(WV_2) WK\",\"Referer\":\"https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20665%7CTag@Bucket@28@280070236&sdk=14.4&utdid=YEGvy%2FMNdMUDAGY03edni2Y8&ustatus=1&first_placeid=111111&net_env=4g&placeid=111111&user_id=2020970327&sn=9B898008F4DAEEB8DCD9772ECF1C99F323BB704E&umidtoken=YEGvy%2FMNdMUDAGY03edni2Y8&msv=8.0.0&brand=Apple&imei=83A335F7BCB0F85B0231E7C8843DED0819E8D337&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwOTcwMzI3IiwidXRkaWQiOiIiLCJpbWVpIjoiODNBMzM1RjdCQ0IwRjg1QjAyMzFFN0M4ODQzREVEMDgxOUU4RDMzNyIsInNuIjoiOUI4OTgwMDhGNERBRUVCOERDRDk3NzJFQ0YxQzk5RjMyM0JCNzA0RSIsImV4cCI6MTYxNTc5NjMxNSwidXNlcklkIjoiMjAyMDk3MDMyNyIsImlhdCI6MTYxNTI3NzkxNSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.sU8ReLM3GbHcIRX41IM4W_SdWtgFFQVoX09e3ndAjKls44xePZwPWPrVMtl0YIOvR7TVd3WctJfk2vLaHLOXNA&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone6splus&statusBarHeight=20.000000&skinVersion=1&wh=1242x2208&soft_id=21&utype=vip&skinId=999&idfa=CDBA4387-53BB-40A8-B759-C9E8FD1517AC\",\"Content-Length\":\"1308\",\"Accept-Language\":\"zh-cn\"}"},{"key":"vediogoldprizeck1","val":"_public=skinId%3D999%26idfa%3DCDBA4387-53BB-40A8-B759-C9E8FD1517AC%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYEGvy/MNdMUDAGY03edni2Y8%26user_id%3D2020970327%26sn%3D9B898008F4DAEEB8DCD9772ECF1C99F323BB704E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D83A335F7BCB0F85B0231E7C8843DED0819E8D337%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwOTcwMzI3IiwidXRkaWQiOiIiLCJpbWVpIjoiODNBMzM1RjdCQ0IwRjg1QjAyMzFFN0M4ODQzREVEMDgxOUU4RDMzNyIsInNuIjoiOUI4OTgwMDhGNERBRUVCOERDRDk3NzJFQ0YxQzk5RjMyM0JCNzA0RSIsImV4cCI6MTYxNTc5NjgyNiwidXNlcklkIjoiMjAyMDk3MDMyNyIsImlhdCI6MTYxNTI3ODQyNiwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.dnDJtAXusxSud0H8besVjv04alQXRNs14U_z5XjJeYbg7EGbI9__K4J97nL1qyuMYYyCfw81Tmorn_lF4Oxtcw%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1242x2208%26soft_id%3D21%26utdid%3DYEGvy/MNdMUDAGY03edni2Y8%26utype%3Dvip%26sdk%3D14.4&deliveryId=525&key=sq_app_ad&miniWua=HHnB_b65liuqUKBU9IayCI/lkeMlnSfkI9HI7m7q8T4R6tQo%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=FAD67A37565E14315DF0C35294FB642F&timestamp=1615278495&userId=2020970327&user_id=2020970327&wua=HIVW_XXxxjEG4EcApqH2l%2BEwpe6%2Bndt20NOVwhskHEO1jN4MD/201hufsE7LbcpCDzk%2BRnGCFszbAiseyyoPwmZHz/Ejyp4f3nTgNaA7iBZVenD2Udu69/hcswRbEuuvMz9Gjw8D9T/%2Bw27GhKsJvpoMKYZpZVDJVXS3EeP%2BjSp01K2HMLqLetr4znCJTc66WznCodDjakNFi/WSryTyN%2BEcsEayij5XtVQI0mQLHokHy4Uk%3D&&{\"Cookie\":\"isg=BLi4wkV1LFwfGUDebuhX2mGEg2JKIRyrkvzfXfIps_MTDUv3mjH3O_FnwYO9RtSD; cna=153IGLGQOl0CASrI5y6JXxwg\",\"Accept\":\"*/*\",\"Connection\":\"keep-alive\",\"Content-Type\":\"application/x-www-form-urlencoded\",\"Accept-Encoding\":\"gzip, deflate, br\",\"Host\":\"ocean.shuqireader.com\",\"User-Agent\":\"shuqireader/4.3.6 (iPhone; iOS 14.4; Scale/3.00)\",\"Content-Length\":\"1588\",\"Accept-Language\":\"zh-Hans-CN;q=1\"}"},{"key":"vediodrawprizeck1","val":"_public=skinId%3D999%26idfa%3DCDBA4387-53BB-40A8-B759-C9E8FD1517AC%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYEGvy/MNdMUDAGY03edni2Y8%26user_id%3D2020970327%26sn%3D9B898008F4DAEEB8DCD9772ECF1C99F323BB704E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D83A335F7BCB0F85B0231E7C8843DED0819E8D337%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwOTcwMzI3IiwidXRkaWQiOiIiLCJpbWVpIjoiODNBMzM1RjdCQ0IwRjg1QjAyMzFFN0M4ODQzREVEMDgxOUU4RDMzNyIsInNuIjoiOUI4OTgwMDhGNERBRUVCOERDRDk3NzJFQ0YxQzk5RjMyM0JCNzA0RSIsImV4cCI6MTYxNjA0NDc3NywidXNlcklkIjoiMjAyMDk3MDMyNyIsImlhdCI6MTYxNTUyNjM3Nywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.erY7hAQhxHZCpwG2ZqEk4bgv5HGn8hw2C8x_7zbspoVPCd9slWC-2NGjRxskZfbSa7TxJY713cPMwS6tCS0s4g%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1242x2208%26soft_id%3D21%26utdid%3DYEGvy/MNdMUDAGY03edni2Y8%26utype%3Dvip%26sdk%3D14.4&deliveryId=711&key=sq_app_ad&miniWua=HHnB_LB2iAJBM3mDeFv7tXOSrqXCMalwox/%2BzEKUZMzXrCos%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=DA3733D72568A53B22614F738F9C1EED&timestamp=1615526954&userId=2020970327&user_id=2020970327&wua=HIVW_GsJUCytCxBgwnuvfwEu736orax4nsilf9qgcxhMhL4lqnT%2B/fVcyVDusR0JXeLV76uBR%2BIsYsWa11IOEvdvIUI3%2BUD%2BhydqWiFzMypihcXaJ7AqCCSGfcgVh5IEInW3NLdJYIh/OzTs08J7lp75AaOZeksyHNpdrkkf5naF4MoHcxcMI77Uc5XMJ7sON8VWy%2B5GH%2Bjp507NnEGv9oRWSy7cRuENGAhlKF/tbtnERuNA%3D&&{\"Cookie\":\"isg=BC0tuRnlMcanf9UhExM6zZTvNs2nimFcBzmDw28yRkQk5muYN9s2LTP01DwA_XkU; cna=153IGGhfplMCASrI5y6/M7tK\",\"Accept\":\"*/*\",\"Connection\":\"keep-alive\",\"Content-Type\":\"application/x-www-form-urlencoded\",\"Accept-Encoding\":\"gzip, deflate, br\",\"Host\":\"ocean.shuqireader.com\",\"User-Agent\":\"shuqireader/4.3.6 (iPhone; iOS 14.4; Scale/3.00)\",\"Content-Length\":\"1590\",\"Accept-Language\":\"zh-Hans-CN;q=1\"}"},{"key":"drawck1","val":"wua=HIVW_lkW3YlODJ6RTN7nlwPxX8Hi0BOSAPfPnnnW3PbPiaHSx0jvZlnx087904qTqMqKUAUM30LShLXIfr%2BF78m6Hpw77P1KUdPpDlrM0lRDVR9UqqTwSJp8X%2B%2BiTPmlNUWnpGNFu6%2F71Hfx706wt4PE9XxqJ%2BBu2Cp7Jt97zw0AclnI3jENldLefPKOnNeKkgXDmh5XOXKPIop58LGZBXcge0MCtg8lBIMcwNLEJdLyFrWo%3D&ua=&userId=2020970327&umidtoken=YEGvy%2FMNdMUDAGY03edni2Y8&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1615526968&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=876702d9dbf8d12b3125eb9556afc09e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.4%26utdid%3DYEGvy%252FMNdMUDAGY03edni2Y8%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2020970327%26sn%3D9B898008F4DAEEB8DCD9772ECF1C99F323BB704E%26umidtoken%3DYEGvy%252FMNdMUDAGY03edni2Y8%26msv%3D8.0.0%26brand%3DApple%26imei%3D83A335F7BCB0F85B0231E7C8843DED0819E8D337%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwOTcwMzI3IiwidXRkaWQiOiIiLCJpbWVpIjoiODNBMzM1RjdCQ0IwRjg1QjAyMzFFN0M4ODQzREVEMDgxOUU4RDMzNyIsInNuIjoiOUI4OTgwMDhGNERBRUVCOERDRDk3NzJFQ0YxQzk5RjMyM0JCNzA0RSIsImV4cCI6MTYxNjA0NDc3NywidXNlcklkIjoiMjAyMDk3MDMyNyIsImlhdCI6MTYxNTUyNjM3Nywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.erY7hAQhxHZCpwG2ZqEk4bgv5HGn8hw2C8x_7zbspoVPCd9slWC-2NGjRxskZfbSa7TxJY713cPMwS6tCS0s4g%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhone6splus%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1242x2208%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DCDBA4387-53BB-40A8-B759-C9E8FD1517AC&&{\"Origin\":\"https://render-web.shuqireader.com\",\"Accept-Encoding\":\"gzip, deflate, br\",\"Connection\":\"keep-alive\",\"Content-Type\":\"application/x-www-form-urlencoded\",\"Accept\":\"application/json, text/plain, */*\",\"Host\":\"ocean.shuqireader.com\",\"User-Agent\":\"Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.6.0) WindVane/8.6.1 Shuqi (iPhone8,2__shuqi__v4.3.6.0) 1242x2208 Winding(WV_3) WK\",\"Referer\":\"https://render-web.shuqireader.com/render/sq-welfare/page/lottery_page/?serviceWorkerOn=1&asac=2A20C07RJ9F51AOEFSNHDR&spm=a2oun.page_render_sq_welfare_welfare_page_v2.%E6%8B%9B%E8%B4%A2%E7%8C%AB.turntable_in_0&sdk=14.4&utdid=YEGvy%2FMNdMUDAGY03edni2Y8&ustatus=1&first_placeid=111111&net_env=4g&placeid=111111&user_id=2020970327&sn=9B898008F4DAEEB8DCD9772ECF1C99F323BB704E&umidtoken=YEGvy%2FMNdMUDAGY03edni2Y8&msv=8.0.0&brand=Apple&imei=83A335F7BCB0F85B0231E7C8843DED0819E8D337&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwOTcwMzI3IiwidXRkaWQiOiIiLCJpbWVpIjoiODNBMzM1RjdCQ0IwRjg1QjAyMzFFN0M4ODQzREVEMDgxOUU4RDMzNyIsInNuIjoiOUI4OTgwMDhGNERBRUVCOERDRDk3NzJFQ0YxQzk5RjMyM0JCNzA0RSIsImV4cCI6MTYxNjA0NDc3NywidXNlcklkIjoiMjAyMDk3MDMyNyIsImlhdCI6MTYxNTUyNjM3Nywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.erY7hAQhxHZCpwG2ZqEk4bgv5HGn8hw2C8x_7zbspoVPCd9slWC-2NGjRxskZfbSa7TxJY713cPMwS6tCS0s4g&skinColor=23B383&platform=iOS&ver=210301&mod=iPhone6splus&statusBarHeight=20.000000&skinVersion=1&wh=1242x2208&soft_id=21&utype=vip&skinId=999&idfa=CDBA4387-53BB-40A8-B759-C9E8FD1517AC\",\"Content-Length\":\"1762\",\"Accept-Language\":\"zh-cn\"}"},{"key":"userinfock1","val":"https://ocean.shuqireader.com/api/activity/xapi/gold/record?userId=2020970327&page=1&pageSize=10&sqSv=1.0&sign=43a614ae793131fd0dc519ffcfd86b1d&key=sq_h5_gateway&_public=fe-env%253Duae-prod%2526sdk%253D14.4%2526utdid%253DYEGvy%2525252FMNdMUDAGY03edni2Y8%2526ustatus%253D1%2526first_placeid%253D111111%2526net_env%253D4g%2526placeid%253D111111%2526user_id%253D2020970327%2526sn%253D9B898008F4DAEEB8DCD9772ECF1C99F323BB704E%2526umidtoken%253DYEGvy%2525252FMNdMUDAGY03edni2Y8%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D83A335F7BCB0F85B0231E7C8843DED0819E8D337%2526skinVersionPrefix%253D1%2526appVer%253D4.3.6.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwOTcwMzI3IiwidXRkaWQiOiIiLCJpbWVpIjoiODNBMzM1RjdCQ0IwRjg1QjAyMzFFN0M4ODQzREVEMDgxOUU4RDMzNyIsInNuIjoiOUI4OTgwMDhGNERBRUVCOERDRDk3NzJFQ0YxQzk5RjMyM0JCNzA0RSIsImV4cCI6MTYxNTc5NjgyNiwidXNlcklkIjoiMjAyMDk3MDMyNyIsImlhdCI6MTYxNTI3ODQyNiwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.dnDJtAXusxSud0H8besVjv04alQXRNs14U_z5XjJeYbg7EGbI9__K4J97nL1qyuMYYyCfw81Tmorn_lF4Oxtcw%2526skinColor%253D23B383%2526platform%253D1%2526ver%253D210301%2526mod%253DiPhone6splus%2526statusBarHeight%253D20.000000%2526skinVersion%253D1%2526wh%253D1242x2208%2526soft_id%253D21%2526utype%253Dvip%2526skinId%253D999%2526idfa%253DCDBA4387-53BB-40A8-B759-C9E8FD1517AC"},{"key":"readck2","val":""},{"key":"receivecoinck2","val":""},{"key":"vediogoldprizeck2","val":""},{"key":"vediodrawprizeck2","val":""},{"key":"drawck2","val":""},{"key":"userinfock2","val":""},{"key":"readck3","val":""},{"key":"receivecoinck3","val":""},{"key":"vediogoldprizeck3","val":""},{"key":"vediodrawprizeck3","val":""},{"key":"drawck3","val":""},{"key":"userinfock3","val":""},{"key":"readck4","val":""},{"key":"receivecoinck4","val":""},{"key":"vediogoldprizeck4","val":""},{"key":"vediodrawprizeck4","val":""},{"key":"drawck4","val":""},{"key":"userinfock4","val":""},{"key":"readck5","val":""},{"key":"receivecoinck5","val":""},{"key":"vediogoldprizeck5","val":""},{"key":"vediodrawprizeck5","val":""},{"key":"drawck5","val":""},{"key":"userinfock5","val":""},{"key":"readck6","val":""},{"key":"receivecoinck6","val":""},{"key":"vediogoldprizeck6","val":""},{"key":"vediodrawprizeck6","val":""},{"key":"drawck6","val":""},{"key":"userinfock6","val":""},{"key":"readck7","val":""},{"key":"receivecoinck7","val":""},{"key":"vediogoldprizeck7","val":""},{"key":"vediodrawprizeck7","val":""},{"key":"drawck7","val":""},{"key":"userinfock7","val":""},{"key":"readck8","val":""},{"key":"receivecoinck8","val":""},{"key":"vediogoldprizeck8","val":""},{"key":"vediodrawprizeck8","val":""},{"key":"drawck8","val":""},{"key":"userinfock8","val":""},{"key":"readck9","val":""},{"key":"receivecoinck9","val":""},{"key":"vediogoldprizeck9","val":""},{"key":"vediodrawprizeck9","val":""},{"key":"drawck9","val":""},{"key":"userinfock9","val":""},{"key":"readck10","val":""},{"key":"receivecoinck10","val":""},{"key":"vediogoldprizeck10","val":""},{"key":"vediodrawprizeck10","val":""},{"key":"drawck10","val":""},{"key":"userinfock10","val":""},{"key":"readck11","val":""},{"key":"receivecoinck11","val":""},{"key":"vediogoldprizeck11","val":""},{"key":"vediodrawprizeck11","val":""},{"key":"drawck11","val":""},{"key":"userinfock11","val":""},{"key":"readck12","val":""},{"key":"receivecoinck12","val":""},{"key":"vediogoldprizeck12","val":""},{"key":"vediodrawprizeck12","val":""},{"key":"drawck12","val":""},{"key":"userinfock12","val":""},{"key":"readck13","val":""},{"key":"receivecoinck13","val":""},{"key":"vediogoldprizeck13","val":""},{"key":"vediodrawprizeck13","val":""},{"key":"drawck13","val":""},{"key":"userinfock13","val":""},{"key":"readck14","val":""},{"key":"receivecoinck14","val":""},{"key":"vediogoldprizeck14","val":""},{"key":"vediodrawprizeck14","val":""},{"key":"drawck14","val":""},{"key":"userinfock14","val":""},{"key":"readck15","val":""},{"key":"receivecoinck15","val":""},{"key":"vediogoldprizeck15","val":""},{"key":"vediodrawprizeck15","val":""},{"key":"drawck15","val":""},{"key":"userinfock15","val":""},{"key":"readck16","val":""},{"key":"receivecoinck16","val":""},{"key":"vediogoldprizeck16","val":""},{"key":"vediodrawprizeck16","val":""},{"key":"drawck16","val":""},{"key":"userinfock16","val":""},{"key":"readck17","val":""},{"key":"receivecoinck17","val":""},{"key":"vediogoldprizeck17","val":""},{"key":"vediodrawprizeck17","val":""},{"key":"drawck17","val":""},{"key":"userinfock17","val":""},{"key":"readck18","val":""},{"key":"receivecoinck18","val":""},{"key":"vediogoldprizeck18","val":""},{"key":"vediodrawprizeck18","val":""},{"key":"drawck18","val":""},{"key":"userinfock18","val":""},{"key":"readck19","val":""},{"key":"receivecoinck19","val":""},{"key":"vediogoldprizeck19","val":""},{"key":"vediodrawprizeck19","val":""},{"key":"drawck19","val":""},{"key":"userinfock19","val":""},{"key":"readck20","val":""},{"key":"receivecoinck20","val":""},{"key":"vediogoldprizeck20","val":""},{"key":"vediodrawprizeck20","val":""},{"key":"drawck20","val":""},{"key":"userinfock20","val":""}],"sessions":[],"isLoaded":true}"
    let encrypted1 = aesEncrypt(data1, key);
console.log(encrypted1 + '\n');

/*
京喜农场助力码
此助力码要求种子 active 相同才能助力，多个账号的话可以种植同样的种子，如果种子不同的话，会自动跳过使用云端助力
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京京喜农场的好友码。
// 同一个京东账号的好友助力码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
// 注意：京喜农场 种植种子发生变化的时候，互助码也会变！！
// 注意：京喜农场 种植种子发生变化的时候，互助码也会变！！
// 注意：京喜农场 种植种子发生变化的时候，互助码也会变！！
// 每个账号 shareCdoe 是一个 json，示例如下
// {"smp":"22bdadsfaadsfadse8a","active":"jdnc_1_btorange210113_2","joinnum":"1"}
let JxncShareCodes = [
   '{"smp":"761bacb38527989fbb8afbed72fd2073","active":"jdnc_1_shanyaopian210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"b012b70387c972be23ecd0c68f503bf6","active":"jdnc_1_shanyaopian210601_2","joinnum":1}',//账号1的好友shareCode,不同好友中间用@符号隔开
   '{"smp":"761bacb38527989fbb8afbed72fd2073","active":"jdnc_1_shanyaopian210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"b012b70387c972be23ecd0c68f503bf6","active":"jdnc_1_shanyaopian210601_2","joinnum":1}',//账号2的好友shareCode,不同好友中间用@符号隔开
   '{"smp":"761bacb38527989fbb8afbed72fd2073","active":"jdnc_1_shanyaopian210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"b012b70387c972be23ecd0c68f503bf6","active":"jdnc_1_shanyaopian210601_2","joinnum":1}',//账号3的好友shareCode,不同好友中间用@符号隔开
   '{"smp":"761bacb38527989fbb8afbed72fd2073","active":"jdnc_1_shanyaopian210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"b012b70387c972be23ecd0c68f503bf6","active":"jdnc_1_shanyaopian210601_2","joinnum":1}',//账号4的好友shareCode,不同好友中间用@符号隔开
   '{"smp":"761bacb38527989fbb8afbed72fd2073","active":"jdnc_1_shanyaopian210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"b012b70387c972be23ecd0c68f503bf6","active":"jdnc_1_shanyaopian210601_2","joinnum":1}',//账号5的好友shareCode,不同好友中间用@符号隔开
   '{"smp":"761bacb38527989fbb8afbed72fd2073","active":"jdnc_1_shanyaopian210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"b012b70387c972be23ecd0c68f503bf6","active":"jdnc_1_shanyaopian210601_2","joinnum":1}',//账号6的好友shareCode,不同好友中间用@符号隔开
   '{"smp":"761bacb38527989fbb8afbed72fd2073","active":"jdnc_1_shanyaopian210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"b012b70387c972be23ecd0c68f503bf6","active":"jdnc_1_shanyaopian210601_2","joinnum":1}',//账号7的好友shareCode,不同好友中间用@符号隔开
   '{"smp":"761bacb38527989fbb8afbed72fd2073","active":"jdnc_1_shanyaopian210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"b012b70387c972be23ecd0c68f503bf6","active":"jdnc_1_shanyaopian210601_2","joinnum":1}',//账号8的好友shareCode,不同好友中间用@符号隔开
   '{"smp":"761bacb38527989fbb8afbed72fd2073","active":"jdnc_1_shanyaopian210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"b012b70387c972be23ecd0c68f503bf6","active":"jdnc_1_shanyaopian210601_2","joinnum":1}',//账号9的好友shareCode,不同好友中间用@符号隔开
   '{"smp":"761bacb38527989fbb8afbed72fd2073","active":"jdnc_1_shanyaopian210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"b012b70387c972be23ecd0c68f503bf6","active":"jdnc_1_shanyaopian210601_2","joinnum":1}',//账号10的好友shareCode,不同好友中间用@符号隔开
   '{"smp":"761bacb38527989fbb8afbed72fd2073","active":"jdnc_1_shanyaopian210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"b012b70387c972be23ecd0c68f503bf6","active":"jdnc_1_shanyaopian210601_2","joinnum":1}',//账号11的好友shareCode,不同好友中间用@符号隔开
   '{"smp":"761bacb38527989fbb8afbed72fd2073","active":"jdnc_1_shanyaopian210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"b012b70387c972be23ecd0c68f503bf6","active":"jdnc_1_shanyaopian210601_2","joinnum":1}',//账号12的好友shareCode,不同好友中间用@符号隔开
   '{"smp":"761bacb38527989fbb8afbed72fd2073","active":"jdnc_1_shanyaopian210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"124d71c498914baa9a20f6b04ade455d","active":"jdnc_1_3yuanganju210601_2","joinnum":1}@{"smp":"b012b70387c972be23ecd0c68f503bf6","active":"jdnc_1_shanyaopian210601_2","joinnum":1}',//账号13的好友shareCode,不同好友中间用@符号隔开
  
]
// 判断github action里面是否有京喜农场助力码
if (process.env.JXNC_SHARECODES) {
  if (process.env.JXNC_SHARECODES.indexOf('&') > -1) {
    console.log(`您的京喜农场助力码选择的是用&隔开\n`)
    JxncShareCodes = process.env.JXNC_SHARECODES.split('&');
  } else if (process.env.JXNC_SHARECODES.indexOf('\n') > -1) {
    console.log(`您的京喜农场助力码选择的是用换行隔开\n`)
    JxncShareCodes = process.env.JXNC_SHARECODES.split('\n');
  } else {
    JxncShareCodes = process.env.JXNC_SHARECODES.split();
  }
} else {
  console.log(`由于您环境变量里面(JXNC_SHARECODES)未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
JxncShareCodes = JxncShareCodes.filter(item => !!item);
for (let i = 0; i < JxncShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['JxncShareCode' + index] = JxncShareCodes[i];
}

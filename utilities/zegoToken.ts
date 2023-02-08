/**
 * Generates a Token
 *
 * Token = “04” + Base64.encode(expire_time + IV.length + IV + binary data/ciphertext.length + binary data/ciphertext)
 * Algorithm: AES<ServerSecret, IV>(token_json_str), mode: CBC/PKCS5Padding
 *
 * Here is the sample code to generate a Token on a client. We recommend you to generate the Token on your app server from leaking your ServerSecret.
 */
import CryptoJS from "crypto-js";
export let appID = Number(process.env.NEXT_PUBLIC_ZEGO_APP_ID) as number; // 1449842935
console.log(appID);
var appConfig = {
  appID,
  serverSecret: process.env.NEXT_PUBLIC_ZEGO_APP_SERVER_SECRET as string,
};
export function generateToken(userID: string, seconds: number) {
  if (!userID) return "";

  // Construct the data to be encrypted
  var time = (Date.now() / 1000) | 0;
  var body = {
    app_id: appConfig.appID,
    user_id: userID,
    nonce: (Math.random() * 2147483647) | 0,
    ctime: time,
    expire: time + (seconds || 7200),
  };
  // Encrypt the body

  var key = CryptoJS.enc.Utf8.parse(appConfig.serverSecret);
  var iv = Math.random().toString().substr(2, 16);
  if (iv.length < 16) iv += iv.substr(0, 16 - iv.length);

  var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(body), key, {
    iv: CryptoJS.enc.Utf8.parse(iv),
  }).toString();
  var ciphert = Uint8Array.from(
    Array.from(atob(ciphertext)).map((val) => val.charCodeAt(0))
  );
  var len_ciphert = ciphert.length;

  // Create the Token.
  var uint8 = new Uint8Array(8 + 2 + 16 + 2 + len_ciphert);
  // expire: 8
  uint8.set([0, 0, 0, 0]);
  uint8.set(new Uint8Array(Int32Array.from([body.expire]).buffer).reverse(), 4);
  // iv length: 2
  uint8[8] = 16 >> 8;
  uint8[9] = 16 - (uint8[8] << 8);
  // iv: 16
  uint8.set(
    Uint8Array.from(Array.from(iv).map((val) => val.charCodeAt(0))),
    10
  );
  // The length of the ciphertext: 2
  uint8[26] = len_ciphert >> 8;
  uint8[27] = len_ciphert - (uint8[26] << 8);
  // Ciphertext
  uint8.set(ciphert, 28);

  var token = `04${btoa(String.fromCharCode(...Array.from(uint8)))}`;

  return token;
}

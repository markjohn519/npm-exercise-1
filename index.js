const qrcode = require('qrcode-terminal');

qrcode.generate('WIFI:T:WPA;S:SOCIALDESK - 9th Floor;P:SocialD3$K09F;H:blank;;');

qrcode.generate(`BEGIN:VCARD
VERSION:3.0
FN: Mark John Paul Monton
TEL:+902222222222
EMAIL;TYPE=home:markjohnmonton@gmail.com
END:VCARD
`);

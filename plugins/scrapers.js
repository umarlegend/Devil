let Leon = require('../events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let translatte = require('translatte');
let config = require('../config');
let axios = require('axios')
let fs = require('fs');
let https = require('https');
let Language = require('../language');
let Lang = Language.getString('scrapers');
let wiki = require('wikijs').default;
let googleTTS = require('google-translate-tts');
let ytdl = require('ytdl-core');
let ffmpeg = require('fluent-ffmpeg');
let yts = require('yt-search');
let request = require('request');
let got = require('got');
let ID3Writer = require('browser-id3-writer');
let gis = require('g-i-s');
let td = config.WORKTYPE == 'public' ? false : true

    Leon.addCommand({pattern: 'tr(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: td}, (async (message, match) => {

    var _0x5bc79a=_0x282f;function _0x4b2f(){var _0x372f8b=['5673104JNnPJe','*◀️\x20','data','reply','1058226xWuspO','*:\x20```','1576NpuERp','sendMessage','TRANSLATE_ERROR','reply_message','*▶️\x20','1447960GAULRn','jid','```','text','7859628cPNtIy','9582yJDVMq','6607314RQtTcj','auto','LANG','RESULT',':*\x20```','1477128wKxydt','message','```\x0a'];_0x4b2f=function(){return _0x372f8b;};return _0x4b2f();}function _0x282f(_0x58b364,_0x1d5f8b){var _0x4b2ffb=_0x4b2f();return _0x282f=function(_0x282f5f,_0x5c33d0){_0x282f5f=_0x282f5f-0x13a;var _0x4f7bd8=_0x4b2ffb[_0x282f5f];return _0x4f7bd8;},_0x282f(_0x58b364,_0x1d5f8b);}(function(_0x59505d,_0x39084d){var _0x1db2b7=_0x282f,_0x35c684=_0x59505d();while(!![]){try{var _0x5ee58d=parseInt(_0x1db2b7(0x149))/0x1+-parseInt(_0x1db2b7(0x150))/0x2+parseInt(_0x1db2b7(0x143))/0x3*(-parseInt(_0x1db2b7(0x152))/0x4)+-parseInt(_0x1db2b7(0x13e))/0x5+parseInt(_0x1db2b7(0x144))/0x6+parseInt(_0x1db2b7(0x142))/0x7+-parseInt(_0x1db2b7(0x14c))/0x8;if(_0x5ee58d===_0x39084d)break;else _0x35c684['push'](_0x35c684['shift']());}catch(_0x23b05f){_0x35c684['push'](_0x35c684['shift']());}}}(_0x4b2f,0xdf5b8));if(!message[_0x5bc79a(0x13c)])return await message['client'][_0x5bc79a(0x13a)](message['jid'],Lang['NEED_REPLY'],MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x5bc79a(0x14e)]});ceviri=await translatte(message[_0x5bc79a(0x13c)][_0x5bc79a(0x14a)],{'from':match[0x1]===''?'auto':match[0x1],'to':match[0x2]===''?config['LANG']:match[0x2]});return _0x5bc79a(0x141)in ceviri?await message[_0x5bc79a(0x14f)](_0x5bc79a(0x13d)+Lang['LANG']+':*\x20```'+(match[0x1]===''?_0x5bc79a(0x145):match[0x1])+_0x5bc79a(0x14b)+_0x5bc79a(0x14d)+Lang['FROM']+_0x5bc79a(0x151)+(match[0x2]===''?config[_0x5bc79a(0x146)]:match[0x2])+_0x5bc79a(0x14b)+'*🔎\x20'+Lang[_0x5bc79a(0x147)]+_0x5bc79a(0x148)+ceviri['text']+_0x5bc79a(0x140)):await message['client'][_0x5bc79a(0x13a)](message[_0x5bc79a(0x13f)],Lang[_0x5bc79a(0x13b)],MessageType[_0x5bc79a(0x141)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message['data']});
    }));

    Leon.addCommand({pattern: 'tts (.*)', fromMe: td, desc: Lang.TTS_DESC}, (async (message, match) => {

    var _0x249922=_0x14b2;(function(_0x23bee6,_0x214cc2){var _0x1a8000=_0x14b2,_0x3b62ab=_0x23bee6();while(!![]){try{var _0x497e9b=-parseInt(_0x1a8000(0x1be))/0x1*(-parseInt(_0x1a8000(0x1c4))/0x2)+parseInt(_0x1a8000(0x1b8))/0x3+-parseInt(_0x1a8000(0x1b6))/0x4*(parseInt(_0x1a8000(0x1c2))/0x5)+parseInt(_0x1a8000(0x1c8))/0x6*(-parseInt(_0x1a8000(0x1b7))/0x7)+-parseInt(_0x1a8000(0x1c6))/0x8+-parseInt(_0x1a8000(0x1ba))/0x9+parseInt(_0x1a8000(0x1c3))/0xa;if(_0x497e9b===_0x214cc2)break;else _0x3b62ab['push'](_0x3b62ab['shift']());}catch(_0x50c7cb){_0x3b62ab['push'](_0x3b62ab['shift']());}}}(_0x10b7,0xcf951));if(match[0x1]===undefined||match[0x1]===''||match[0x1]===null)return await message[_0x249922(0x1c7)](Lang[_0x249922(0x1c9)]);var length=0xc8,lang=config[_0x249922(0x1c5)][_0x249922(0x1b9)](),text=match[0x1];if(langMatch=match[0x1][_0x249922(0x1c1)]('\x5c{([a-z]{2})\x5c}'))length=text[_0x249922(0x1bc)],lang=langMatch[0x1],text=text[_0x249922(0x1bf)](langMatch[0x0],'');if(text[_0x249922(0x1bc)]>length)return await message[_0x249922(0x1c7)](Lang['LENGTHY_TEXT']);var buffer=!![];function _0x14b2(_0x4b543e,_0x45fba9){var _0x10b77e=_0x10b7();return _0x14b2=function(_0x14b2c5,_0x15133e){_0x14b2c5=_0x14b2c5-0x1b6;var _0x8e239a=_0x10b77e[_0x14b2c5];return _0x8e239a;},_0x14b2(_0x4b543e,_0x45fba9);}function _0x10b7(){var _0xf15043=['match','5KBTHxz','21777370kJXbHy','2wLfiSF','LANG','5811440lCXyIM','sendReply','1820136QSakUk','NEED_TEXT','2573652WxCXsU','28LEBJAy','3246414gUJvSu','toLowerCase','13047984GhfcBn','sendAudioAsVoice','length','INVALID_LANG','1623425ThdDFn','replace','synthesize'];_0x10b7=function(){return _0xf15043;};return _0x10b7();}try{buffer=await googleTTS[_0x249922(0x1c0)]({'text':text,'voice':lang});}catch{buffer=![];}if(!buffer)return await message[_0x249922(0x1c7)](Lang[_0x249922(0x1bd)]);await message[_0x249922(0x1bb)](buffer);
    }));

    Leon.addCommand({pattern: 'music ?(.*)', fromMe: td, desc: Lang.SONG_DESC}, (async (message, match) => { 

    const _0x2cb7c4=_0x2f51;(function(_0x2d18b2,_0x1d7226){const _0x40a3ef=_0x2f51,_0x55c659=_0x2d18b2();while(!![]){try{const _0x90402e=parseInt(_0x40a3ef(0x86))/0x1*(parseInt(_0x40a3ef(0x6a))/0x2)+-parseInt(_0x40a3ef(0x79))/0x3+-parseInt(_0x40a3ef(0x68))/0x4+parseInt(_0x40a3ef(0x89))/0x5*(-parseInt(_0x40a3ef(0x65))/0x6)+-parseInt(_0x40a3ef(0x88))/0x7*(parseInt(_0x40a3ef(0x77))/0x8)+-parseInt(_0x40a3ef(0x70))/0x9+-parseInt(_0x40a3ef(0x76))/0xa*(-parseInt(_0x40a3ef(0x6e))/0xb);if(_0x90402e===_0x1d7226)break;else _0x55c659['push'](_0x55c659['shift']());}catch(_0x15febd){_0x55c659['push'](_0x55c659['shift']());}}}(_0x1602,0x8d9b0));if(match[0x1]==='')return await message[_0x2cb7c4(0x74)][_0x2cb7c4(0x75)](message[_0x2cb7c4(0x66)],Lang['NEED_TEXT_SONG'],MessageType[_0x2cb7c4(0x7a)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message['data']});let arama=await yts(match[0x1]);arama=arama['all'];if(arama[_0x2cb7c4(0x67)]<0x1)return await message[_0x2cb7c4(0x74)]['sendMessage'](message['jid'],Lang['NO_RESULT'],MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x2cb7c4(0x84)]});function _0x1602(){const _0x39537a=['readFileSync','client','sendMessage','208590ZBOQsE','40OtSKtI','title','1085829nLfDsj','text','addTag','TIT2','stream','videoId','description','UPLOADING_SONG','audio','setFrame','pipe','data','audioBitrate','1SOceSf','.mp3','952273XVcBDo','812255qoGaSF','image','TPE1','12bXSKnq','jid','length','1341504DcWMgW','name','539206tZkxzd','replace','DOWNLOADING_SONG','mp4Audio','1342wKHLJB','.jpg','4787721dlsilG','highestaudio','save'];_0x1602=function(){return _0x39537a;};return _0x1602();}var reply=await message['client'][_0x2cb7c4(0x75)](message[_0x2cb7c4(0x66)],Lang[_0x2cb7c4(0x6c)],MessageType[_0x2cb7c4(0x7a)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x2cb7c4(0x84)]});let title=arama[0x0]['title'][_0x2cb7c4(0x6b)]('\x20','+'),stream=ytdl(arama[0x0][_0x2cb7c4(0x7e)],{'quality':_0x2cb7c4(0x71)});function _0x2f51(_0x42d909,_0x414f12){const _0x1602f7=_0x1602();return _0x2f51=function(_0x2f5137,_0x5d67ae){_0x2f5137=_0x2f5137-0x65;let _0x3efba8=_0x1602f7[_0x2f5137];return _0x3efba8;},_0x2f51(_0x42d909,_0x414f12);}got[_0x2cb7c4(0x7d)](arama[0x0][_0x2cb7c4(0x8a)])[_0x2cb7c4(0x83)](fs['createWriteStream'](title+_0x2cb7c4(0x6f))),ffmpeg(stream)[_0x2cb7c4(0x85)](0x140)[_0x2cb7c4(0x72)]('./'+title+_0x2cb7c4(0x87))['on']('end',async()=>{const _0xcd3e92=_0x2cb7c4,_0x2d148f=new ID3Writer(fs[_0xcd3e92(0x73)]('./'+title+_0xcd3e92(0x87)));_0x2d148f[_0xcd3e92(0x82)](_0xcd3e92(0x7c),arama[0x0][_0xcd3e92(0x78)])[_0xcd3e92(0x82)](_0xcd3e92(0x8b),[arama[0x0]['author'][_0xcd3e92(0x69)]])[_0xcd3e92(0x82)]('APIC',{'type':0x3,'data':fs[_0xcd3e92(0x73)](title+'.jpg'),'description':arama[0x0][_0xcd3e92(0x7f)]}),_0x2d148f[_0xcd3e92(0x7b)](),reply=await message[_0xcd3e92(0x74)][_0xcd3e92(0x75)](message[_0xcd3e92(0x66)],Lang[_0xcd3e92(0x80)],MessageType[_0xcd3e92(0x7a)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message['data']}),await message[_0xcd3e92(0x74)][_0xcd3e92(0x75)](message['jid'],Buffer['from'](_0x2d148f['arrayBuffer']),MessageType[_0xcd3e92(0x81)],{'mimetype':Mimetype[_0xcd3e92(0x6d)],'ptt':![],'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0xcd3e92(0x84)]});});
    }));

    Leon.addCommand({pattern: 'video ?(.*)', fromMe: td, desc: Lang.VIDEO_DESC}, (async (message, match) => { 

    var _0x1f4e57=_0x4131;(function(_0x5caffa,_0x3ccdcb){var _0x3fdfb4=_0x4131,_0x516a59=_0x5caffa();while(!![]){try{var _0x322c3a=parseInt(_0x3fdfb4(0xc1))/0x1+parseInt(_0x3fdfb4(0xc4))/0x2+parseInt(_0x3fdfb4(0xb7))/0x3*(-parseInt(_0x3fdfb4(0xb9))/0x4)+-parseInt(_0x3fdfb4(0xbd))/0x5*(parseInt(_0x3fdfb4(0xcc))/0x6)+-parseInt(_0x3fdfb4(0xb8))/0x7*(parseInt(_0x3fdfb4(0xc5))/0x8)+-parseInt(_0x3fdfb4(0xd1))/0x9*(-parseInt(_0x3fdfb4(0xba))/0xa)+parseInt(_0x3fdfb4(0xc2))/0xb;if(_0x322c3a===_0x3ccdcb)break;else _0x516a59['push'](_0x516a59['shift']());}catch(_0x286abd){_0x516a59['push'](_0x516a59['shift']());}}}(_0x2736,0x398bc));function _0x4131(_0x540569,_0x3fed10){var _0x2736ff=_0x2736();return _0x4131=function(_0x4131d5,_0xd01a6f){_0x4131d5=_0x4131d5-0xb7;var _0x3cd5a5=_0x2736ff[_0x4131d5];return _0x3cd5a5;},_0x4131(_0x540569,_0x3fed10);}if(match[0x1]==='')return await message[_0x1f4e57(0xc3)][_0x1f4e57(0xc7)](message[_0x1f4e57(0xc9)],Lang[_0x1f4e57(0xce)],MessageType[_0x1f4e57(0xbf)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x1f4e57(0xc0)]});try{var arama=await yts({'videoId':ytdl[_0x1f4e57(0xd0)](match[0x1])});}catch{return await message['client'][_0x1f4e57(0xc7)](message['jid'],Lang['NO_RESULT'],MessageType[_0x1f4e57(0xbf)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message['data']});}function _0x2736(){var _0x4ea55a=['mp4','240p','videoId','576021fSYvrO','28UwTiIB','8fETUFS','545540sGqeBb','.mp4','360p','55JcOaAp','480p','text','data','435390oejWgE','3098887mJsUcQ','client','710344fFLgFd','609320TncVNh','readFileSync','sendMessage','map','jid','UPLOADING_VIDEO','144p','199698XPgHGp','720p','NEED_VIDEO','container','getURLVideoID','36rOSpPl'];_0x2736=function(){return _0x4ea55a;};return _0x2736();}var reply=await message[_0x1f4e57(0xc3)]['sendMessage'](message[_0x1f4e57(0xc9)],Lang['DOWNLOADING_VIDEO'],MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x1f4e57(0xc0)]}),yt=ytdl(arama[_0x1f4e57(0xd4)],{'filter':_0x575611=>_0x575611[_0x1f4e57(0xcf)]==='mp4'&&[_0x1f4e57(0xcd),_0x1f4e57(0xbe),_0x1f4e57(0xbc),_0x1f4e57(0xd3),_0x1f4e57(0xcb)][_0x1f4e57(0xc8)](()=>!![])});yt['pipe'](fs['createWriteStream']('./'+arama[_0x1f4e57(0xd4)]+'.mp4')),yt['on']('end',async()=>{var _0x52c821=_0x1f4e57;reply=await message[_0x52c821(0xc3)]['sendMessage'](message[_0x52c821(0xc9)],Lang[_0x52c821(0xca)],MessageType[_0x52c821(0xbf)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x52c821(0xc0)]}),await message[_0x52c821(0xc3)][_0x52c821(0xc7)](message[_0x52c821(0xc9)],fs[_0x52c821(0xc6)]('./'+arama[_0x52c821(0xd4)]+_0x52c821(0xbb)),MessageType['video'],{'mimetype':Mimetype[_0x52c821(0xd2)],'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x52c821(0xc0)]});});
    }));

    Leon.addCommand({pattern: 'yt ?(.*)', fromMe: td, desc: Lang.YT_DESC}, (async (message, match) => { 

    var _0x3a5774=_0x1d94;(function(_0x2fe121,_0x3ebf23){var _0x2b695e=_0x1d94,_0x561137=_0x2fe121();while(!![]){try{var _0x192233=-parseInt(_0x2b695e(0x15b))/0x1*(parseInt(_0x2b695e(0x164))/0x2)+parseInt(_0x2b695e(0x16a))/0x3+parseInt(_0x2b695e(0x160))/0x4*(parseInt(_0x2b695e(0x163))/0x5)+-parseInt(_0x2b695e(0x166))/0x6+-parseInt(_0x2b695e(0x162))/0x7+-parseInt(_0x2b695e(0x15d))/0x8+parseInt(_0x2b695e(0x161))/0x9;if(_0x192233===_0x3ebf23)break;else _0x561137['push'](_0x561137['shift']());}catch(_0x38c5a3){_0x561137['push'](_0x561137['shift']());}}}(_0x4835,0xd72d8));if(match[0x1]==='')return await message[_0x3a5774(0x15f)][_0x3a5774(0x16b)](message[_0x3a5774(0x15a)],Lang[_0x3a5774(0x15c)],MessageType[_0x3a5774(0x167)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message['data']});var reply=await message[_0x3a5774(0x15f)][_0x3a5774(0x16b)](message[_0x3a5774(0x15a)],Lang[_0x3a5774(0x16d)],MessageType[_0x3a5774(0x167)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x3a5774(0x15e)]});function _0x4835(){var _0x2d7575=['all','7432650cRWJCk','text','map','url','1658322xXtAFs','sendMessage','NOT_FOUND','GETTING_VIDEOS','*\x20-\x20','jid','27LrRIQd','NEED_WORDS','11848832QBLPZF','data','client','2894252oTvddE','27672102bqZaMP','4371605qeERBl','5DkVAhg','9278GYxIjO'];_0x4835=function(){return _0x2d7575;};return _0x4835();}try{var arama=await yts(match[0x1]);}catch{return await message[_0x3a5774(0x15f)]['sendMessage'](message[_0x3a5774(0x15a)],Lang[_0x3a5774(0x16c)],MessageType[_0x3a5774(0x167)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x3a5774(0x15e)]});}function _0x1d94(_0x561f08,_0x22d52a){var _0x4835e1=_0x4835();return _0x1d94=function(_0x1d94fd,_0x2a5c3d){_0x1d94fd=_0x1d94fd-0x159;var _0x471b80=_0x4835e1[_0x1d94fd];return _0x471b80;},_0x1d94(_0x561f08,_0x22d52a);}var mesaj='';arama[_0x3a5774(0x165)][_0x3a5774(0x168)](_0x162061=>{var _0xdf91b3=_0x3a5774;mesaj+='*'+_0x162061['title']+_0xdf91b3(0x159)+_0x162061[_0xdf91b3(0x169)]+'\x0a';}),await message[_0x3a5774(0x15f)][_0x3a5774(0x16b)](message[_0x3a5774(0x15a)],mesaj,MessageType[_0x3a5774(0x167)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x3a5774(0x15e)]}),await reply['delete']();
    }));

    Leon.addCommand({pattern: 'wiki ?(.*)', fromMe: td, desc: Lang.WIKI_DESC}, (async (message, match) => { 

    var _0x144ec7=_0x2304;(function(_0x3d4c8c,_0xe38864){var _0x427cab=_0x2304,_0x33ade9=_0x3d4c8c();while(!![]){try{var _0x7929a5=-parseInt(_0x427cab(0xcf))/0x1+parseInt(_0x427cab(0xd6))/0x2+-parseInt(_0x427cab(0xd5))/0x3*(-parseInt(_0x427cab(0xd3))/0x4)+-parseInt(_0x427cab(0xc2))/0x5*(-parseInt(_0x427cab(0xcb))/0x6)+parseInt(_0x427cab(0xc6))/0x7+-parseInt(_0x427cab(0xc3))/0x8*(-parseInt(_0x427cab(0xd0))/0x9)+-parseInt(_0x427cab(0xc8))/0xa*(parseInt(_0x427cab(0xd7))/0xb);if(_0x7929a5===_0xe38864)break;else _0x33ade9['push'](_0x33ade9['shift']());}catch(_0x4f5220){_0x33ade9['push'](_0x33ade9['shift']());}}}(_0x3609,0xb3b44));if(match[0x1]==='')return await message[_0x144ec7(0xd2)][_0x144ec7(0xce)](message[_0x144ec7(0xc5)],Lang[_0x144ec7(0xc7)],MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x144ec7(0xd4)]});var reply=await message[_0x144ec7(0xd2)][_0x144ec7(0xce)](message[_0x144ec7(0xc5)],Lang['SEARCHING'],MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x144ec7(0xd4)]}),arama=await wiki({'apiUrl':_0x144ec7(0xca)+config[_0x144ec7(0xc4)]+_0x144ec7(0xd1)})[_0x144ec7(0xc9)](match[0x1]),info=await arama[_0x144ec7(0xcc)]();await message[_0x144ec7(0xd2)][_0x144ec7(0xce)](message[_0x144ec7(0xc5)],info,MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x144ec7(0xd4)]}),await reply[_0x144ec7(0xcd)]();function _0x2304(_0x2a412f,_0x2b9088){var _0x3609c5=_0x3609();return _0x2304=function(_0x2304a4,_0x2490e4){_0x2304a4=_0x2304a4-0xc2;var _0x82593=_0x3609c5[_0x2304a4];return _0x82593;},_0x2304(_0x2a412f,_0x2b9088);}function _0x3609(){var _0xfefddb=['1507752dPwTxZ','.wikipedia.org/w/api.php','client','86060RbvMjf','data','138pXEWuQ','1099430IhJWvd','36625523NCffxw','3630860DNPhkL','16WkGrtw','LANG','jid','7019453MQtteK','NEED_WORDS','10EhKdea','page','https://','12PsLqQP','rawContent','delete','sendMessage','263923agfisY'];_0x3609=function(){return _0xfefddb;};return _0x3609();}
    }));

    Leon.addCommand({pattern: 'image ?(.*)', fromMe: td, desc: Lang.IMG_DESC}, (async (message, match) => { 

    function _0xc56c(_0x11cedf,_0x237cfd){var _0x11b133=_0x11b1();return _0xc56c=function(_0xc56ca1,_0x37a758){_0xc56ca1=_0xc56ca1-0x1d2;var _0xb387a1=_0x11b133[_0xc56ca1];return _0xb387a1;},_0xc56c(_0x11cedf,_0x237cfd);}var _0x3edf6e=_0xc56c;(function(_0x55c24b,_0x2474c4){var _0xa8b763=_0xc56c,_0x3175c5=_0x55c24b();while(!![]){try{var _0x2e9d42=parseInt(_0xa8b763(0x1d8))/0x1*(parseInt(_0xa8b763(0x1d6))/0x2)+parseInt(_0xa8b763(0x1e2))/0x3+-parseInt(_0xa8b763(0x1e1))/0x4*(parseInt(_0xa8b763(0x1dd))/0x5)+parseInt(_0xa8b763(0x1d7))/0x6*(-parseInt(_0xa8b763(0x1e0))/0x7)+parseInt(_0xa8b763(0x1e7))/0x8+parseInt(_0xa8b763(0x1e4))/0x9*(-parseInt(_0xa8b763(0x1e6))/0xa)+parseInt(_0xa8b763(0x1df))/0xb;if(_0x2e9d42===_0x2474c4)break;else _0x3175c5['push'](_0x3175c5['shift']());}catch(_0xaa398a){_0x3175c5['push'](_0x3175c5['shift']());}}}(_0x11b1,0xe6008));if(match[0x1]==='')return await message[_0x3edf6e(0x1da)][_0x3edf6e(0x1d2)](message[_0x3edf6e(0x1d9)],Lang[_0x3edf6e(0x1d3)],MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x3edf6e(0x1de)]});function _0x11b1(){var _0x2c6a5a=['image','220dVPdbd','data','20901804migjDc','10021984mClhxN','51616zJIPzS','1961109UgmRnX','IMG','12724353UHxCwm','png','10tsjJyC','1495888MeeYIL','sendMessage','NEED_WORDS','length','```We\x20are\x20not\x20responsible\x20for\x20any\x20consequences\x20that\x20may\x20arise\x20from\x20use\x20or\x20misuse\x20of\x20Leon,\x20You\x20are\x20responsible\x20for\x20all\x20consequences\x20also\x20the\x20responsibility\x20of\x20sharing\x20Images,\x20are\x20yours!```\x0a\x0a*Made\x20By\x20Leon*','538180xsIsRl','6gPAhOi','6yXIDuK','jid','client','then'];_0x11b1=function(){return _0x2c6a5a;};return _0x11b1();}gis(match[0x1],async(_0xd8e0f6,_0x3e2b43)=>{var _0x359daa=_0x3edf6e;for(var _0x583668=0x0;_0x583668<(_0x3e2b43[_0x359daa(0x1d4)]<0x5?_0x3e2b43['length']:0x5);_0x583668++){var _0x17daa5=got(_0x3e2b43[_0x583668]['url'],{'https':{'rejectUnauthorized':![]}}),_0x773090=_0x17daa5['buffer']();_0x773090[_0x359daa(0x1db)](async _0x3343b4=>{var _0x40a762=_0x359daa;await message['client'][_0x40a762(0x1d2)](message['jid'],_0x3343b4,MessageType[_0x40a762(0x1dc)],{'mimetype':Mimetype[_0x40a762(0x1e5)],'caption':_0x40a762(0x1d5),'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x40a762(0x1de)]});});}message['reply'](Lang[_0x359daa(0x1e3)]['format'](_0x3e2b43[_0x359daa(0x1d4)]<0x5?_0x3e2b43[_0x359daa(0x1d4)]:0x5,match[0x1]));});
    }));

    var _0x286d99=_0x11d5;(function(_0x49287e,_0x2f3b51){var _0x2ba2f8=_0x11d5,_0x8efbdb=_0x49287e();while(!![]){try{var _0x4f37f9=-parseInt(_0x2ba2f8(0x1dc))/0x1*(-parseInt(_0x2ba2f8(0x1e2))/0x2)+parseInt(_0x2ba2f8(0x1e7))/0x3*(-parseInt(_0x2ba2f8(0x1d3))/0x4)+parseInt(_0x2ba2f8(0x1d4))/0x5*(parseInt(_0x2ba2f8(0x1de))/0x6)+-parseInt(_0x2ba2f8(0x1e1))/0x7+parseInt(_0x2ba2f8(0x1ee))/0x8+parseInt(_0x2ba2f8(0x1e3))/0x9+parseInt(_0x2ba2f8(0x1df))/0xa*(parseInt(_0x2ba2f8(0x1e9))/0xb);if(_0x4f37f9===_0x2f3b51)break;else _0x8efbdb['push'](_0x8efbdb['shift']());}catch(_0xeeecc6){_0x8efbdb['push'](_0x8efbdb['shift']());}}}(_0x6cf0,0x62ec4));var ZODIAC_DESC='',BORN='',VAYIS='',Finished='',ComingBD='',Last='',NeedText='',InvalidDate='',HBD='';function _0x6cf0(){var _0x40981f=['*Anda\x20harus\x20memasukkan\x20tanggal\x20lahir\x20Anda!*','*Tanggal\x20Lahir\x20yang\x20Dimasukkan\x20Tidak\x20Valid,\x20Harap\x20gunakan\x20Format\x20YY/MM/DD!*\x0a```Contoh:\x201999\x2004\x2020```','*Entered\x20Birth\x20Date\x20is\x20not\x20Valid,\x20Please\x20use\x20YY/MM/DD\x20Format!*\x0a```Example:\x201999\x2004\x2020```','*🎂\x20Ulang\x20Tahun\x20Mendatang*','*♐\x20രാശിചക്രം*','146bPOjqr','*🧍\x20Usia*','1326zzMXMC','6540RcMJHQ','*🍼\x20ജനിച്ചത്*','2232258VLcnYb','7796yCkwxY','69093iXOSVN','Zodiak\x20dihitung\x20menggunakan\x20tanggal\x20lahir\x20tertentu.','*ജന്മദിനാശംസകള്,\x20സ്നേഹിതാ!\x20നിങ്ങളുടെ\x20പ്രായം\x20ഇപ്പോൾ,*','*🍼\x20Lahir*','96Rwyunq','LANG','3267iocNYx','*നിങ്ങളുടെ\x20ജനനത്തീയതി\x20നൽകണം!*','*Happy\x20birthday\x20Bro!\x20😚\x20Your\x20Age\x20is\x20now,*','*🧍\x20Age*','*You\x20must\x20enter\x20your\x20birth\x20date!*','4251648SxBuET','*🎂\x20Upcoming\x20Birthday*','85532nNwWgZ','2395zZQVhg','Calculates\x20the\x20Zodiac\x20with\x20given\x20Date\x20of\x20Birth.','*🧍\x20പ്രായം*'];_0x6cf0=function(){return _0x40981f;};return _0x6cf0();}if(config['LANG']=='EN')BORN='*🍼\x20Born*',VAYIS=_0x286d99(0x1ec),ComingBD=_0x286d99(0x1d2),Last='*♐\x20Zodiac*',NeedText=_0x286d99(0x1ed),InvalidDate=_0x286d99(0x1d9),HBD=_0x286d99(0x1eb),ZODIAC_DESC=_0x286d99(0x1d5);function _0x11d5(_0x1e6908,_0x2947b9){var _0x6cf02c=_0x6cf0();return _0x11d5=function(_0x11d5eb,_0x1f0e36){_0x11d5eb=_0x11d5eb-0x1d2;var _0x5c3e5a=_0x6cf02c[_0x11d5eb];return _0x5c3e5a;},_0x11d5(_0x1e6908,_0x2947b9);}if(config[_0x286d99(0x1e8)]=='ML')BORN=_0x286d99(0x1e0),VAYIS=_0x286d99(0x1d6),ComingBD='*🎂\x20വരാനിരിക്കുന്ന\x20ജന്മദിനം*',Last=_0x286d99(0x1db),NeedText=_0x286d99(0x1ea),InvalidDate='*നൽകിയ\x20ജനനത്തീയതി\x20സാധുവല്ല,\x20ദയവായി\x20YY/MM/DD\x20ഫോർമാറ്റ്\x20ഉപയോഗിക്കുക!*\x0a```ഉദാഹരണം:\x201999\x2004\x2020```',HBD=_0x286d99(0x1e5),ZODIAC_DESC='നൽകിയിരിക്കുന്ന\x20ജനനത്തീയതി\x20ഉപയോഗിച്ച്\x20രാശിചക്രം\x20കണക്കാക്കുന്നു.';if(config[_0x286d99(0x1e8)]=='ID')BORN=_0x286d99(0x1e6),VAYIS=_0x286d99(0x1dd),ComingBD=_0x286d99(0x1da),Last='*♐\x20Zodiak*',NeedText=_0x286d99(0x1d7),InvalidDate=_0x286d99(0x1d8),HBD='*Selamat\x20ulang\x20tahun\x20Bro!\x20Usia\x20Anda\x20sekarang,*',ZODIAC_DESC=_0x286d99(0x1e4);

    Leon.addCommand({pattern: 'zodiac ?(.*)', fromMe: td, desc: ZODIAC_DESC}, (async (message, match) => {

    function _0x3b1d(_0x1d2a6e,_0x9d6a76){const _0x4e6c2e=_0x4e6c();return _0x3b1d=function(_0x3b1d2f,_0x48031b){_0x3b1d2f=_0x3b1d2f-0x1e7;let _0x1183b5=_0x4e6c2e[_0x3b1d2f];return _0x1183b5;},_0x3b1d(_0x1d2a6e,_0x9d6a76);}const _0x36231a=_0x3b1d;(function(_0x7974cf,_0x5657d9){const _0x31477d=_0x3b1d,_0x568a7f=_0x7974cf();while(!![]){try{const _0x3aba02=parseInt(_0x31477d(0x1ed))/0x1+-parseInt(_0x31477d(0x205))/0x2+-parseInt(_0x31477d(0x1ff))/0x3+-parseInt(_0x31477d(0x1e7))/0x4*(parseInt(_0x31477d(0x200))/0x5)+-parseInt(_0x31477d(0x1f6))/0x6+parseInt(_0x31477d(0x1f1))/0x7*(-parseInt(_0x31477d(0x1ea))/0x8)+parseInt(_0x31477d(0x203))/0x9;if(_0x3aba02===_0x5657d9)break;else _0x568a7f['push'](_0x568a7f['shift']());}catch(_0x4c31c5){_0x568a7f['push'](_0x568a7f['shift']());}}}(_0x4e6c,0x1e821));if(match[0x1]==='')return await message['client'][_0x36231a(0x201)](message[_0x36231a(0x1fc)],NeedText,MessageType[_0x36231a(0x1eb)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x36231a(0x1f8)]});const zodiak=[[_0x36231a(0x206),new Date(0x7b2,0x0,0x1)],[_0x36231a(0x1f4),new Date(0x7b2,0x0,0x14)],['Pisces',new Date(0x7b2,0x1,0x13)],[_0x36231a(0x1f5),new Date(0x7b2,0x2,0x15)],[_0x36231a(0x207),new Date(0x7b2,0x3,0x15)],[_0x36231a(0x1f2),new Date(0x7b2,0x4,0x15)],[_0x36231a(0x1fd),new Date(0x7b2,0x5,0x16)],['Leo',new Date(0x7b2,0x6,0x17)],[_0x36231a(0x1fa),new Date(0x7b2,0x7,0x17)],[_0x36231a(0x1fb),new Date(0x7b2,0x8,0x17)],[_0x36231a(0x1f9),new Date(0x7b2,0x9,0x17)],[_0x36231a(0x1f3),new Date(0x7b2,0xa,0x16)],[_0x36231a(0x206),new Date(0x7b2,0xb,0x16)]][_0x36231a(0x204)]();function getZodiac(_0x3db76a,_0xf4fa87){const _0x29179e=_0x36231a;let _0x43a4d=new Date(0x7b2,_0x3db76a-0x1,_0xf4fa87);return zodiak[_0x29179e(0x1e9)](([_0x3d3a61,_0x43c726])=>_0x43a4d>=_0x43c726)[0x0];}let date=new Date(match[0x1]);if(date=='Invalid\x20Date')return await message['client'][_0x36231a(0x201)](message[_0x36231a(0x1fc)],InvalidDate,MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message['data']});let d=new Date();function _0x4e6c(){const _0x366743=['jid','Cancer','getMonth','406068eWhHpc','16795cfOuDe','sendMessage','getDate','7076097xUMACI','reverse','80048VEBGWw','Capricorn','Taurus','292HwnOeD','\x20🥳','find','8IbeASA','text','client','12256MqjkKC','slice','getFullYear','\x20:\x20','1237649kYgmCa','Gemini','Sagittarius','Aquarius','Aries','456804WvFZrB','join','data','Scorpio','Virgo','Libra'];_0x4e6c=function(){return _0x366743;};return _0x4e6c();}const [tahun,bulan,tanggal]=[d['getFullYear'](),d[_0x36231a(0x1fe)]()+0x1,d['getDate']()];let birth=[date[_0x36231a(0x1ef)](),date['getMonth']()+0x1,date[_0x36231a(0x202)]()],zodiac=getZodiac(birth[0x1],birth[0x2]),ageD=new Date(d-date),age=ageD[_0x36231a(0x1ef)]()-new Date(0x7b2,0x0,0x1)['getFullYear'](),birthday=[tahun+(+new Date(0x7b2,bulan-0x1,tanggal)>+new Date(0x7b2,birth[0x1]-0x1,birth[0x2])),...birth[_0x36231a(0x1ee)](0x1)],cekusia=bulan===birth[0x1]&&tanggal===birth[0x2]?HBD+'\x20'+age+_0x36231a(0x1e8):age,msg=BORN+_0x36231a(0x1f0)+birth['join']('-')+'\x0a'+ComingBD+_0x36231a(0x1f0)+birthday[_0x36231a(0x1f7)]('-')+'\x0a'+VAYIS+_0x36231a(0x1f0)+cekusia+'\x0a'+Last+_0x36231a(0x1f0)+zodiac;await message[_0x36231a(0x1ec)][_0x36231a(0x201)](message['jid'],msg,MessageType[_0x36231a(0x1eb)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x36231a(0x1f8)]});

    }));

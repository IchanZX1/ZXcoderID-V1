const chalk = require("chalk")
const fs = require("fs")

global.hituet = 0
global.gopayno = "0823-3401-8401"
global.danano = "0852-5875-1681"
global.shopeepayno = "0823-3401-8401"
global.creator = "6282334018401@s.whatsapp.net"
global.thumb = fs.readFileSync(`./image/thumb.png`)
global.qrisdonate = fs.readFileSync(`./image/qris.jpg`)
global.fake = `🔥 𝑩𝒐𝒕 𝑫𝒊 𝑫𝒆𝒑𝒍𝒐𝒚 𝑶𝒍𝒆𝒉 𝑪𝒓𝒆𝒂𝒕𝒐𝒓 𝑰𝒄𝒉𝒂𝒏𝒁𝑿 𝑪𝒐𝒅𝒆𝒓-𝑰𝑫`
global.packname = ``
global.author = `×͜× ▭▬▭▬▭▬ 👑 ▭▬▭▬▭▬ ×͜×\nﾒ 𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗕𝘆 𝗜𝗰𝗵𝗮𝗻𝗭𝗫\nﾒ 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 : 𝗜𝗰𝗵𝗮𝗻 𝗚𝗮𝗺𝗶𝗻𝗴\n⊟————————⊟`
global.antilink = false
global.antiwame = false
global.autodltt = false
global.autosticker = false
global.autoreadsw = true
global.ownerNomor = '6282334018401'
global.ownerName = '𝐎𝐰𝐧𝐞𝐫 𝐙𝐗𝐜𝐨𝐝𝐞𝐫𝐈𝐃'
global.ownerNumber = ["6287705048235@s.whatsapp.net"]
global.cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
global.mess = {
    wait: '𝙇 𝙤 𝙖 𝙙 𝙞 𝙣 𝙜 𝙨𝙚𝙙𝙖𝙣𝙜 𝙗𝙚𝙧𝙡𝙖𝙣𝙜𝙨𝙪𝙣𝙜',
    succes: '𝐍𝐢𝐡 𝐍𝐠𝐚𝐛, 𝐒𝐮𝐛𝐬 𝐘𝐓 𝐠𝐰',
    admin: 'Ini Fitur Khusus Admin Grup!!',
    botAdmin: 'Bot Belum Jadi Admin:(',
    owner: 'Ente Kadang-kadang Ente, Nih Khusus Owner Nih!!!',
    group: 'Ini Fitur Khusus Di Grup!!',
    private: 'Fitur Yang Anda Gunakan Khusus Private Chat!!',
    bot: 'Bot Number User Special Features!!!',
    error: 'Error Sis, Please Chat Owner...',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
}

global.bapak = [
'Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs',
'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda',
'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v',
'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID',
]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
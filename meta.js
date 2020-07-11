var warna = require('colors');
var sh = require('shelljs');

console.log(warna.rainbow("Metasploit installer by fajar firdaus"))
console.log("")

console.log(warna.rainbow("[====================]"))
console.log(warna.red("Author : Fajar Firdaus"))
console.log(warna.red("FB : Fajar Firdaus / Ace.of.spades729"))
console.log(warna.red("IG : fajar_firdaus_7"))
console.log(warna.red("YT : iTech7732"))
console.log(warna.rainbow("[====================]"))
console.log("")
console.log(warna.rainbow("ANTI ERROR ERROR CLUB !!"))

sh.exec("apt-get update && apt-get upgrade -y");
sh.exec("apt-get install unstable-repo");
sh.exec("sudo apt-get install metasploit-framework");

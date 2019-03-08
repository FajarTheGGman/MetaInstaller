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
sh.exec("apt-get install git php python ruby python2 curl perl");
sh.exec("pip2 install --upgrade pip");
sh.exec("gem install bundle");
sh.exec("gem install bundler");
sh.exec("pip2 install bundler");
sh.exec("gem install bundler -v 1.16.2");
sh.exec("curl https://github.com/4L13199/meTAInstall/blob/master/meTAInstall -o meta");
sh.exec("chmod 777 meta");
sh.exec("sh meta");

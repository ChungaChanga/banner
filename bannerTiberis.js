var targetID = 'banner_container';//ID блока для вставки баннера
var targetTag = document.createElement('div');
targetTag.id = targetID;



var HTML = '<div id="bannerTiberis">\
              <p>Привет, я баннер</br>\
                <a href="https://www.tiberis.ru/">\
                  Ссылка\
                </a>\
                </br>\
                <a href="https://www.tiberis.ru/">\
                  <img src="https://cdn.rawgit.com/ChungaChanga/banner/991a157c/image.png"></p>\
                </a>\
            </div>';//HTML баннера
var CSS = '#' + targetID +' p{font-size: 10pt; text-align: center;} #' + 
                targetID + ' img{width: 300px;height:40px;} #bannerTiberis{margin:auto;width:1108px;height:140px;border:2px solid;}';// CSS баннера

var bannerTag = document.createElement('div');
var CSSTag = document.createElement('style');
//var targetBlock = document.getElementById(targetID);
bannerTag.innerHTML = HTML;
CSSTag.textContent = CSS;

targetTag.appendChild(CSSTag);
targetTag.appendChild(bannerTag);
document.body.insertBefore(targetTag, document.body.firstChild)
//targetBlock.appendChild(CSSTag);
//targetBlock.appendChild(bannerTag);
var targetID = 'banner_container';//ID блока для вставки баннера
var targetTag = document.createElement('div');
targetTag.id = targetID;



var HTML = '<div id="bannerTiberis">\
              <p>Привет, я баннер</br>\
                <a href="https://www.tiberis.ru/">\
                  <img src="https://cdn.rawgit.com/ChungaChanga/banner/991a157c/image.png"></p>\
                </a>\
            </div>';//HTML баннера
var CSS = '#' + targetID +' p{font-size: 40pt; text-align: center;} #' + 
                targetID + ' img{width: 600px;} #bannerTiberis{margin:auto;}';// CSS баннера

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
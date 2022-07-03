//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        //离开当前页面时标签显示内容
        document.title = '(_　_)。゜zｚＺ陷入沉睡~';
        clearTimeout(titleTime);
    }
    else {
        //返回当前页面时标签显示内容
        document.title = 'o(*￣▽￣*)o 哦吼~' + OriginTitile;
        //两秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 1500);
    }
});

// 添加八毛卡通人物
/*右下角添加卡通人物*/
var bamao = '<i class="fas fa-arrow-up" style ="padding:8px" ></i><img style="max-width: 234%;transform: translate(-65px,-65px);" src="https://cdn.jsdelivr.net/gh/fudalijunyi/picture-bed/img/20200629182853.gif" title="回到顶部" data-ll-status="loaded" class="loaded">';
/*添加到返回顶部按钮下*/
document.getElementById("go-up").innerHTML = bamao


// 为了解决jsdelivr问题

// 
// (function () {
//   const SOURCE = 'https://cdn.jsdelivr.net';
//   const DEST = 'https://gcore.jsdelivr.net';
//   const $ = document.querySelectorAll.bind(document);
//   const checkAvailable = (callback) => {
//     const img = new Image();
//     const timeoutId = setTimeout(function () {
//       callback(false);
//     }, 3000);
//     img.addEventListener('load', function () {
//       clearTimeout(timeoutId);
//       callback(true);
//     });

//     img.src = SOURCE + '/favicon.ico';
//   };

//   const replaceElementSrc = () => {
//     for (const element of $('img')) {
//       if (element.src && element.src.includes(SOURCE)) {
//         element.src = element.src.replace(SOURCE, DEST);
//       }
//     }

//     for (const element of $('link[rel="stylesheet"]')) {
//       if (element.href && element.href.includes(SOURCE)) {
//         element.href = element.href.replace(SOURCE, DEST);
//       }
//     }

//     for (const element of $('script')) {
//       if (element.src && element.src.includes(SOURCE)) {
//         const newNode = document.createElement('script');
//         newNode.src = element.src.replace(SOURCE, DEST);
//         element.after(newNode);
//         element.remove();
//       }
//     }
//   };

//   checkAvailable(function (isAvailable) {
//     if (isAvailable) {
//       return;
//     }

//     console.warn(SOURCE + ' is not available.');

//     replaceElementSrc();
//     // Replace dynamically added elements
//     setInterval(replaceElementSrc, 2000);
//   });
// })();
// 
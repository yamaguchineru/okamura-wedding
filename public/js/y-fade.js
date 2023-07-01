// フェードインさせる要素を取得
var fadeIn = document.querySelectorAll('.fade');

// スクロールイベントリスナーを追加
window.addEventListener('scroll', function() {

    //各要素に対して
    fadeIn.forEach(function(element) {

        var rect = element.getBoundingClientRect();
        
        // 画面内に入ったらanimationクラスを追加
        if(rect.top <= window.innerHeight) {
            element.classList.add('fade-add');
        }

    });
    
});

var targetElements = document.querySelectorAll('.hover-target');

targetElements.forEach(function (element) {

    // ホバー開始
    element.addEventListener('mouseover', function () {
        var addElement = element.querySelector('.hover-add');
        //.hover-addクラスを持つ要素が存在する場合だけ、その要素を表示
        if (addElement) {
            addElement.style.display = 'block';
            console.log('hover-addクラスが見つかりました');
        } 

    });

    //ホバー終了
    element.addEventListener('mouseout', function () {
        var addElement = element.querySelector('.hover-add');
        //.hover-addクラスを持つ要素が存在する場合だけ、その要素を非表示
        if (addElement) {
            addElement.style.display = 'none';
        }
    });
});
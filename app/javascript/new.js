// new.html.erbに記載していたscriptをこちらに移動


// ページが読み込まれたら実行される処理
document.addEventListener('turbo:load', function() {
  // setTimeout(()=> {処理}, 時間)で、指定時間後に処理を実行できる
  setTimeout(()=> {
    // loaderクラスを消して、titleを見せるためのJSを書き込んでいく
    // loaderクラスを取得するための変数を定義
    let loader = document.querySelector('.loader');
    // loaderクラスをloadedに変更するための処理
    loader.classList.add('loaded');

    // titleのクラスを取得する
    let title = document.querySelector('.title');
    // titleクラスのopacityをデフォルトの0から1にすることで、titleを表示させる
    title.classList.remove('title-hidden');
    title.classList.add('title-visible');

    setTimeout(()=> {
      // star-hiddenクラスを取得する
      let starHidden = document.querySelector('.star-hidden');
      // star-hiddenクラスをstar-showに変更するための処理
      starHidden.classList.add('star-show');

      setTimeout(()=> {
        let tapButton = document.getElementById('tap-button');
        //tap-buttonにbutton-visibleクラスを追加する
        tapButton.classList.remove('button-hidden');
        tapButton.classList.add('button-visible-title');
      },4000);
    }, 2500);
  }, 3000);
});

// tap-buttonをクリックした時にbutton-visibleクラスとbutton-hiddenクラスを入れ替える。
document.addEventListener('turbo:load', function() {
  let tapButton = document.getElementById('tap-button');
  //イベントリスナーを追加して実際にtap-button要素をクリックしたときの処理をつける。
  tapButton.addEventListener('click', function() {
    // button-visible-titleがついていた場合のクリック処理(button-hiddenをつける。)
    if (tapButton.classList.contains('button-visible-title')) {
      tapButton.classList.remove('button-visible-title');
      tapButton.classList.add('button-hidden');

      // title画面でボタン押したときの処理
      // titleを外して, text1のクラスをtext1-visibleに変更する
      // '夜空を眺めてると名言呟きたくなるよね…'を表示させる
      let title = document.querySelector('.title');
      title.classList.add('title-hidden');
      let text1 = document.querySelector('.text1-hidden');
      text1.classList.add('text1-visible');
      setTimeout(() => {
      tapButton.classList.remove('button-hidden');
      tapButton.classList.add('button-visible1');
      }, 3000);
    }

    // text1でボタンを押したときの処理
    // text1を外して, text2のクラスをtext2-visibleに変更する
    // '素敵な言葉を星に込めるお仕事をしてるんだ。'を表示させる
    else if (tapButton.classList.contains('button-visible1')) {
      tapButton.classList.remove('button-visible1');
      tapButton.classList.add('button-hidden');
      let text1 = document.querySelector('.text1-visible');
      text1.classList.remove('text1-visible');
      let text2 = document.querySelector('.text2-hidden');
      text2.classList.add('text2-visible');
      setTimeout(() => {
        tapButton.classList.remove('button-hidden');
        tapButton.classList.add('button-visible2');
      }, 3000);
    }

    // text2でボタンを押したときの処理
    else if (tapButton.classList.contains('button-visible2')) {
      tapButton.classList.remove('button-visible2');
      tapButton.classList.add('button-hidden');
      let text2 = document.querySelector('.text2-visible');
      text2.classList.remove('text2-visible');
      let text3 = document.querySelector('.text3-hidden');
      text3.classList.add('text3-visible');
      setTimeout(() => {
        tapButton.classList.remove('button-hidden');
        tapButton.classList.add('button-visible3');
      }, 3000);
    }

    // text3でボタンを押したときの処理=>formを表示させる
    else if (tapButton.classList.contains('button-visible3')) {
      tapButton.classList.remove('button-visible3');
      tapButton.classList.add('button-hidden');
      let text3 = document.querySelector('.text3-visible');
      text3.classList.remove('text3-visible');
      let form = document.querySelector('.form-hidden');
      form.classList.remove('form-hidden');
      form.classList.add('form-visible');
    }
  });

  // formを送信した時に,デフォルト送信をキャンセルして、formを非表示にしてから、送信を行う。
  let contactForm = document.getElementById('contact');
  contactForm.addEventListener('submit', function(event){
    // デフォルトの送信をキャンセル。
    event.preventDefault();
    // formを非表示にする。
    let formVisible = document.querySelector('.form-visible');
    formVisible.classList.remove('form-visible');
    formVisible.classList.add('form-hidden');
    // 3秒後に送信処理を行う。
    setTimeout(() => {
      contactForm.submit();
    }, 2000);
  });
});
// stars/result.html.erbで発火させるためのファイル

//画面が表示されたら実行される処理
document.addEventListener('turbo:load', function(){
  let text4 = document.querySelector('.text4-hidden');
  if (text4) {
    setTimeout(()=> {
      let text4 = document.querySelector('.text4-hidden');
      text4.classList.add('text4-visible');
    }, 500);
    setTimeout(()=> {
      let text4 = document.querySelector('.text4-visible');
      text4.classList.remove('text4-visible');
      let loading = document.querySelector('.loading-hidden');
      loading.classList.remove('loading-hidden');
      loading.classList.add('loading-visible');
    }, 4000);

      let stars1 = document.getElementById('stars1');
      let stars2 = document.getElementById('stars2');
      let stars3 = document.getElementById(`stars3`);
      let overlay = document.querySelector('.overlay');

    setTimeout(()=> {
      stars1.classList.add('stars1-up-animation');
      stars2.classList.add('stars2-up-animation');
      stars3.classList.add('stars3-up-animation');
    }, 6000);

    setTimeout(()=> {
      // overlayを表示させるため、opacityを0にする
      overlay.classList.remove('overlay-hidden');
      overlay.classList.add('overlay-visible');
    }, 12000);

    setTimeout(()=> {
      stars1.classList.remove('stars1-up-animation');
      stars1.classList.add('stars1-left-animation');
      stars2.classList.remove('stars2-up-animation');
      stars2.classList.add('stars2-left-animation');
      stars3.classList.remove('stars3-up-animation');
      stars3.classList.add('stars3-left-animation');
      overlay.classList.remove('overlay-visible');
      overlay.classList.add('overlay-hidden');
    }, 16000);

    // 時間経過でtext5が表示されるようにする
    setTimeout(()=> {
    let text5 = document.querySelector('.text5-hidden');
    text5.classList.add('text5-visible');
    let loading = document.querySelector('.loading-visible');
    loading.classList.remove('loading-visible');
    loading.classList.add('loading-hidden');

    setTimeout(()=> {
      let tapButton = document.getElementById('tap-button');
      tapButton.classList.add('button-visible5');
    }, 3000);
    }, 18000);
  }
});

// Loadingが終了してtap-buttonをクリックしてからの処理
  document.addEventListener('turbo:load', function(){
    // .star-wordの文字数が10文字以内の場合、font-sizeを大きくする
    let starWord = document.querySelector('.star-word');
    if (starWord.textContent.length <= 10) {
      starWord.style.fontSize = '8rem';
    }

    let tapButton = document.getElementById('tap-button');
    tapButton.addEventListener('click', function() {
      // button-visible5がついていた場合のクリック処理
      if (tapButton.classList.contains('button-visible5')) {
        tapButton.classList.remove('button-visible5');
        tapButton.classList.add('button-hidden');
        let text5 = document.querySelector('.text5-visible');
        text5.classList.remove('text5-visible');
        let text6 = document.querySelector('.text6-hidden');
        text6.classList.add('text6-visible');
        setTimeout(()=> {
          tapButton.classList.remove('button-hidden');
          tapButton.classList.add('button-visible6');
        }, 3000);
      }

    // text6ボタンを押した時、次にresult-containerを表示させる
    else if (tapButton.classList.contains('button-visible6')){
      tapButton.classList.remove('button-visible6');
      tapButton.classList.add('button-hidden');
      let text6 = document.querySelector('.text6-visible');
      text6.classList.remove('text6-visible');
      let result = document.querySelector('.result-container');
      result.classList.remove('result-hidden');
      result.classList.add('result-visible');
      setTimeout(()=>{
        tapButton.classList.remove('button-hidden');
        tapButton.classList.add('button-visible-last');
      }, 7000);
    }

    // button-visible-lastを押した時の処理。SpotifyとThank Youを表示する
    else if (tapButton.classList.contains('button-visible-last')){
      tapButton.classList.remove('button-visible-last');
      tapButton.classList.add('button-hidden');
      let result = document.querySelector('.result-visible');
      result.classList.remove('result-visible');
      result.classList.add('result-hidden');
      // 手書き風フォントの表示
      setTimeout(()=> {
      let svgAll = document.querySelector('.svgall');
      // visibilityをvisibleにする
      svgAll.style.visibility = 'visible';
      new Vivus('move', {
        type: 'scenario-sync',
        duration: 100,
        forceRender: false,
        animTimingFunction: Vivus.EASE
      });
      }, 1500);
      // spotifyの表示
      setTimeout (()=> {
        let spotify = document.querySelector('.spotify-hidden');
        spotify.classList.remove('spotify-hidden');
        spotify.classList.add('spotify-visible');
        let spotifyIframe = document.querySelector('.spotify-iframe');
        spotifyIframe.classList.add('bounce-in-animation');
        setTimeout(()=> {
        let spotifyText = document.querySelector('.spotify-text');
        spotifyText.classList.add('bounce-in-animation');
        }, 500);

      }, 4000);


      // 戻るボタンの表示
      setTimeout(()=> {
      let returnButton = document.querySelector('.return-button-hidden');
      returnButton.classList.remove('return-button-hidden');
      let Arrow = document.querySelector('.arrow-container');
      Arrow.classList.add('bounce-in-animation');
      }, 3000);

      // メニューアイコンの表示
      setTimeout(()=> {
        let menuIcon1 = document.querySelector('.menu-icon-1');
        menuIcon1.classList.remove('menu-icon-hidden');
        menuIcon1.classList.add('bounce-in-animation');

        setTimeout(()=> {
        let menuIcon2 = document.querySelector('.menu-icon-2');
        menuIcon2.classList.remove('menu-icon-hidden');
        menuIcon2.classList.add('bounce-in-animation');
        }, 200);
      }, 3500);
    }
    });
  });

  document.addEventListener('turbo:load', function(){
  let eyesIcon = document.querySelector('.fa-eye');
  let spotifyContainer = document.querySelector('.spotify-container');
  let arrowContainer = document.querySelector('.arrow-container');
  let svgAll = document.querySelector('.svgall');
  eyesIcon.addEventListener('click', function() {
    // fa-eyeが押されたら、containerをhiddenにする
    if (eyesIcon.classList.contains('fa-eye')) {
      spotifyContainer.style.visibility = 'hidden';
      arrowContainer.style.visibility = 'hidden';
      svgAll.style.visibility = 'hidden';
      eyesIcon.classList.remove('fa-eye');
      eyesIcon.classList.add('fa-eye-slash');

    }
    // fa-eye-slashが押されたら,containerをvisibleにする
    else if (eyesIcon.classList.contains('fa-eye-slash')) {
      eyesIcon.classList.remove('fa-eye-slash');
      eyesIcon.classList.add('fa-eye');
      spotifyContainer.style.visibility = 'visible';
      arrowContainer.style.visibility = 'visible';
      svgAll.style.visibility = 'visible';
      new Vivus('move', {
      type: 'scenario-sync',
      duration: 100,
      forceRender: false,
      animTimingFunction: Vivus.EASE
      });
    }
    });
  });

  // 流れ星を表示させたい
  document.addEventListener('turbo:load', function(){
    let starIcon = document.querySelector('.menu-icon-2');
    starIcon.addEventListener('click', function(){
      // 一旦、shooting-starのspanを全部取得する
      let shootingStars = document.querySelectorAll('.shooting-star span');
      // https://www.sejuku.net/blog/22432
      // shootingStarsの配列の数を最大値にして、ランダムに数値を取得する
      // Math.random()はデフォルトで0以上1未満の数値を返す。
      // やから, * shootingStars.lengthをして、0からspanの数のランダムな数値を取得する。
      // これをMath.floorで小数点以下切り捨てることで、ランダムな整数値を取得できる
      let random = Math.floor(Math.random() * shootingStars.length);
      // random変数に入ったランダムな値を引数にして、shootingStarsから一つspanを取り出す
      let shootingStar = shootingStars[random];
      // ここで取得できたshootingStarに対して、shooting-star-animationのアニメーションをつける
      shootingStar.classList.add('shooting-star-animation');
      //https://monohibi.com/posts/css-animationend-event
      // アニメーションが終了したら、shooting-star-animationクラスを外す
      // animationendイベントで
      shootingStar.addEventListener('animationend', function() {
        shootingStar.classList.remove('shooting-star-animation');
      })
    });
  });

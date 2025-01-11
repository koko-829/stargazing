// _form.html.erb内の要素に対するjsファイル
document.addEventListener('turbo:load', function() {
  // form全体の要素を取得
  let form = document.querySelector('#contact');
  let wordInput = document.querySelector('.word-input');
  let nameInput = document.querySelector('.name-input');
  let formDescription0 = document.querySelector('.description-0');
  let formDescription1 = document.querySelector('.description-1');
  let formDescription2 = document.querySelector('.description-2');
  let formDescription3 = document.querySelector('.description-3');
  let wordParam = document.querySelector('.word-param');
  let nameParam = document.querySelector('.name-param');

  // descriptionを入れ替えるハンドラを設定しておく
  function descriptionChange(description) {
    formDescription0.classList.remove('form-description-visible');
    formDescription1.classList.remove('form-description-visible');
    formDescription2.classList.remove('form-description-visible');
    formDescription3.classList.remove('form-description-visible');
    description.classList.add('form-description-visible');
  }

  // 入力している際にバリデーションが全て通った時のdescriptionを変更する処理
  // 引数にはもし入力途中に再度バリデーションが引っかかった時に表示したいdescriptionを入れる
  function activeDescription(description) {
    if(activeWord && activeName) {
      descriptionChange(formDescription3);
    }
    else {
      descriptionChange(description);
    }
  }

// リアルタイムのバリデーション用の処理
  // 入力状態にバリデーションをつけて全て通った場合にsubmitボタンを有効にする

  // wordInputとnameInputのバリデーション用の変数を定義しておく
  let activeWord = false;
  let activeName = false;
  // submitボタンの要素を取得
  let submitButton = document.querySelector('#contact-submit');
  // submitボタンをデフォルトで無効化しておく
  submitButton.disabled = true;
  // バリデーションチェックの変数がどっちもtrueの場合にsubmitボタンを有効化する
  // もしかしたらform全体の要素がinputの状態で下記の処理を書き込んだ方が良いかもしれない。一応今は一旦なしでそのまま条件分岐
  form.addEventListener('input', function(){
    if(activeWord && activeName) {
      submitButton.disabled = false;
      submitButton.classList.add('submit-button-active');
      // submitButtonのテキストを変更する※inputがsubmitの場合はtextContentではなくて、valueが
      // 表示内容になっているので、この部分を変更する。
      submitButton.value = 'Send Now!';
    } else {
      submitButton.disabled = true;
      submitButton.classList.remove('submit-button-active');
      submitButton.value = 'Please fill out...';
    }
  });

  // 使用できる文字の正規表現パターンを設定しておく
  let regex = /^[A-Za-z0-9０-９ぁ-んァ-ン一-龯々〆〤〜「」、。・ー！？（）()’—!?&,\s.'":%％＆【】"+]+$/;


  // wordInputのバリデーション
  wordInput.addEventListener('input', function(){
    // 5行以上の改行ができないようにする
    let lines = wordInput.value.split("\n");
    if (lines.length > 5) {
      wordInput.value = lines.slice(0, 5).join("\n");
    }

    // イベントの処理を書く
    if (!wordInput.value || !wordInput.value.match(/\S/g)){
      wordParam.style.color = 'yellow';
      wordParam.textContent = '入力してください';
      activeWord = false;
    }

    // 正規表現パターンに適しているかの確認
    else if (!regex.test(wordInput.value)) {
      wordParam.style.color = 'yellow';
      wordParam.textContent = '使用できない文字が含まれています';
      activeWord = false;
    }
    // 文字が2文字以上じゃない時の処理
    // 非空文字が2文字以上連続して入力されていない限り、2文字以上入力してくださいと表示する
    else if (!wordInput.value.match(/\S\S/)) {
      wordParam.style.color = 'yellow';
      wordParam.textContent = '2文字以上で入力してください';
      activeWord = false;
    }

    else if (wordInput.value.match(/\s\s/)) {
      wordParam.style.color = 'yellow';
      wordParam.textContent = '連続したスペースもしくは改行が含まれています';
      activeWord = false;
    }
    else {
      activeWord = true;
      wordParam.style.color = 'white';
      wordParam.textContent = '✔︎正常に入力されました';
    }

    activeDescription(formDescription1);
  });

  // nameInputのバリデーション
  nameInput.addEventListener('input', function (){
    // イベントの処理を書く
    if (!nameInput.value || !nameInput.value.match(/\S/g)){
      nameParam.style.color = 'yellow';
      nameParam.textContent = '入力してください';
      activeName = false;
    }

    // 正規表現パターンに適しているかの確認
    else if (!regex.test(nameInput.value)) {
      nameParam.style.color = 'yellow';
      nameParam.textContent = '使用できない文字が含まれています';
      activeName = false;
    }

    else if (nameInput.value.length >= 31) {
      nameParam.style.color = 'yellow';
      nameParam.textContent = '30文字以内で入力してください';
      activeName = false;
    }

    else if (nameInput.value.match(/\s\s/)) {
      nameParam.style.color = 'yellow';
      nameParam.textContent = '連続したスペースが含まれています';
      activeName = false;
    }

    else {
      activeName = true;
      nameParam.style.color = 'white';
      nameParam.textContent = '✔︎正常に入力されました';
    }

    activeDescription(formDescription2);
  });


// description用の処理

  // wordInput入力欄でマウスが押された時に発火させたい。
  wordInput.addEventListener('focus', function() {
    descriptionChange(formDescription1);
  });
  nameInput.addEventListener('focus', function() {
    descriptionChange(formDescription2);
  });

  // もしwordInputにもnameInput以外の場所にフォーカスが当たった場合発火させる処理

  // wordInputがblur(フォーカスが外れた)時の処理
  wordInput.addEventListener('blur', function(){
    // バリデーションが全部通っている場合、description3を表示させる
    if(activeWord && activeName) {
      descriptionChange(formDescription3);
    }
    else {
      descriptionChange(formDescription0);
    }
  });
  // nameInputがblur(フォーカスが外れた)時の処理
  nameInput.addEventListener('blur', function(){
    if(activeWord && activeName) {
      descriptionChange(formDescription3);
    }
    else {
      descriptionChange(formDescription0);
    }
  });
});
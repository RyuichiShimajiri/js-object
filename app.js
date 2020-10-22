console.log('--------------------関数-----------------');
// 関数の書き方
// function 関数名(){
// 処理
// }
function myalert(){
	// alert('自作関数からHello');
	// アラートを表示後も自由に処理を追加できる
	let hantei = confirm('このボタン押してもいいですか？');

    console.log(hantei);



// 問題
// OKボタンが押されたら『大丈夫』、
// キャンセルが押されたら『やり直し』
// とコンソールに表示しましょう

if (hantei === true){
	console.log();
}else{
	console.log(document.getElementById);
}


// 文字の変え方
let messageSpan = document.getElementById("message");
if (hantei === true){
messageSpan.textContent = "大丈夫";
messageSpan.style.color = "blue";
}else{
	messageSpan.textContent = "やり直し";
	messageSpan.style.color = "blue";
}


}
console.log('----------------関数(引数付き)------------');
// 関数とは複数の処理を一つにまとめて名前をつけたもの
// 引数とは処理を行うために必要な情報
// 関数の書き方
// function 関数名(引数1,引数2,...){
//   処理
// }
// alert(表示したい文字)　この場合、表示したい文字、の部分が引数に当たる
function myalert2(displayMessage){
  alert(displayMessage);
}
// 以下の関数を作成して、作成した関数を実行してください。
// 関数名：printHoge
// 処理内容：「Hoge」とコンソールにに表示する
function printHoge(){
  console.log('Hoge');
}
// 作った関数を実行
printHoge();
// // 引数あるバージョン
// function printHoge(moji){
//   console.log(moji);
// }
// printHoge('Hoge');
// 以下の関数を作成して、作成した関数を実行してください。
// 関数名：printNum
// 引数：1つの数値
// 処理内容：引数で受け取った数値をコンソールにに表示する
function printNum(num){
  console.log(num);
}
printNum(30);
// 下の関数を作成して、作成した関数を実行してください。
// 関数名：printKuku
// 引数：1つの数値
// 処理内容：引数で受け取った数値の九九（1から9までかけた数）をコンソールにに表示する
// 引数に1を指定したら、1の段の計算結果がコンソールに表示されるようにする
// 引数に2を指定したら、2の段の計算結果がコンソールに表示されるようにする
// for文は1個で大丈夫です（使わなくても大丈夫）
function printKuku(num){
  // let kotae = num * 1;
  // console.log(kotae);
  // kotae = num * 2;
  // console.log(kotae);
  // kotae = num * 3;
  // console.log(kotae);
  // kotae = num * 4;
  // console.log(kotae);
  // kotae = num * 5;
  // console.log(kotae);
  // kotae = num * 6;
  // console.log(kotae);
  // kotae = num * 7;
  // console.log(kotae);
  // kotae = num * 8;
  // console.log(kotae);
  // kotae = num * 9;
  // console.log(kotae);
//   for(let i=1; i <=9:i++){
//   	console.log(num * i);
//   }
}
// // 二の段
printKuku(2);
// // 三の段
printKuku(3);
// 今日の宿題
// OKボタンが押されたら、『大丈夫』、
// キャンセルが押されたら『やり直し』
// と"message"のspanタグの部分に表示しましょう
// 関数名：printkakezan
// 引数
// 処理内容：引数で受け取った２つの数値の掛け算の答えをコンソールに表示する
function printkakezan(kake, zan){
 console.log(kake*zan);
}
printkakezan(2,4);

// 関数名：printIsEven
// 引数：1つの数値
// 処理内容引数で受け取った数値が偶数の場合は『偶数です』と出力し、
// 奇数の場合は『奇数です』と出力する

function printTsEven(guu){
	if (guu % 2 === 0){
		console.log("偶数です");
}else{
	console.log("奇数です");
}
}
printTsEven(2)

// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：pieintMassage
// 引数１：１つの文字列
// 引数２：１つの数字
// 処理内容：引数で受け取った文字列を、引数で受け取った数値分繰り返し出力する


function printMessage(doraretu, dorasuu){
	for(let i =1; i<= dorasuu; i++){
		console.log(doraretu);
	}
}
printMessage("どらえもん",4);












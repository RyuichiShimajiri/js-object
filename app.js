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





// 今日の宿題
// OKボタンが押されたら、『大丈夫』、
// キャンセルが押されたら『やり直し』
// と"message"のspanタグの部分に表示しましょう







}
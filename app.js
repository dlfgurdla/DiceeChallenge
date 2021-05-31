//alert('테스트');

//1이미지태그 선택 
var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');


//랜덤 숫자 만들기
var ran1 = Math.floor(Math.random() * (6) )+ 1;
var ran2 = Math.floor(Math.random() * (6) )+ 1;

//2주소 src속성에 사진 6주소를 넣는다.
img1.setAttribute('src','images/dice'+ran1+'.png');
img2.setAttribute('src','images/dice'+ran2+'.png');

var h1 = document.querySelector('h1');

if(ran1 > ran2) {
    h1.textContent = "🚩Play 1 win!";
} else if (ran1 < ran2) {
    h1.textContent = "Play 2 win!🚩";
} else {
    h1.textContent = "Draw!";
}
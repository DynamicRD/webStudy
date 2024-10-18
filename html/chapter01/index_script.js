//dic#box 객체를 가져온다.
//원래라면 객체클래스 객체참조변수 = window.document.getElementById("box");
//근데 자료형 그냥 let으로 퉁치고 대입값에 따라 변수의 타입을 결정함
let div_box = window.document.getElementById("box");
let position = 0;

function moveBox(){
    if(position < 200){
        position += 1;
        div_box.style.left = position + "px";
    }else{
        position = 0;
        div_box.style.left = position + "px";
    }
    //계속해서 moveBox() 불러주는 콜백기능 부여한다
    window.requestAnimationFrame(moveBox);
}

moveBox();
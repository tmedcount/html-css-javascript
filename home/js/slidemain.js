var slideNum = 0; // 슬라이드 인덱스 초기값 선언
var slideAuto = null; // 공간은 있지만 값이 없다 cf.) '' = 공백이 값
// on | off = switch or flag 변수
// 함수 선언(아래)

function play_w(directw) {
  // 좌우로 슬라이드 되는 함수 선언(왼쪽 | 오른쪽)
  if (directw == "right") {
    slideNum = slideNum + 1; // 슬라이드 번호 증가
    if (slideNum > 2) {
      // 슬라이드 이미지가 3개일 떄로 고정
      slideNum = 0;
    }
  } else if (directw == "left") {
    slideNum = slideNum - 1; // 슬라이드 번호 감소
    if (slideNum < 0) {
      slideNum = 2; // 무한 반복
    }
  } else {
    slideNum = directw; // string으로 형 변환
  }

  // li 태크에서 클래스가 seq인 것 3개를 each함수로 3번 반복
  // 결과는 모든 슬라이드 버튼을 _off.png(작은 정원)로 바꾸는 명령
  $(".rollingbtn")
    .find("li.seq a")
    .each(function () {
      $("li.seq a img").attr(
        "src",
        $("li.seq a img").attr("src").replace("_on.png", "_off.png")
      );
    });
  // 현재 선택된 슬라이드 이미지만 _on.png(타원)로 replace
  $("li.butt" + slideNum + " a img").attr(
    "src",
    $("li.butt" + slideNum + " a img")
      .attr("src")
      .replace("_off.png", "_on.png")
  );
  // slideNum조건 실행
  if (slideNum == 0) {
    $(".viewImgList li.imglist1").animate({ opacity: 0 }, 1000); // 서서히 사라짐
    $(".viewImgList li.imglist2").animate({ opacity: 0 }, 1000); // 서서히 사라짐
    $(".viewImgList li.imglist0").animate({ opacity: 1 }, 1000); // 서서히 나타남
  } else if (slideNum == 1) {
    $(".viewImgList li.imglist0").animate({ opacity: 0 }, 1000); // 서서히 사라짐
    $(".viewImgList li.imglist2").animate({ opacity: 0 }, 1000); // 서서히 사라짐
    $(".viewImgList li.imglist1").animate({ opacity: 1 }, 1000); // 서서히 나타남
  } else if (slideNum == 2) {
    $(".viewImgList li.imglist0").animate({ opacity: 0 }, 1000); // 서서히 사라짐
    $(".viewImgList li.imglist1").animate({ opacity: 0 }, 1000); // 서서히 사라짐
    $(".viewImgList li.imglist2").animate({ opacity: 1 }, 1000); // 서서히 나타남
  }
  // flag - true(자동 슬라이드), false(슬라이드 멈춤)
  if (slideAuto) {
    // true 일 때
    clearTimeout(slideAuto); // play_w 함수 실행 중지
  }
  slideAuto = setTimeout('play_w("right")', 3000); // 3초 단위로 play_w('right')를 실행하라
} // play_w 함수 끝

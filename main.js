const tab = document.querySelector('#tab');
const btns = tab.querySelectorAll('ul li');
const boxs = tab.querySelectorAll('section article');

//반복문 돌면서 이벤트 연결하기
//클릭했을때 이벤트를 연결해야하는데, li 3개에 다 이벤트를 연결해야되니까 반복문 이용
//각각의 반복도는 버튼,순서값 전달한 다음에
//btn파라미터 받은 요소에 addeventlistner.
//클릭이벤트명, 실행할 함수
btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		//함수 호출
		activation(btns, idx);
		activation(boxs, idx);
	});
});

//이벤트와 함수 분리
//파라미터(통로명)(그룹요소,순서값)
function activation(arrEl, index) {
	//모든버튼을 초기화해서 on 없애고
	//각각의 반복도는 el요소의 클래스리스트의 리무브로 on을 다 제거
	for (const el of arrEl) el.classList.remove('on');
	//클릭한 idx버튼만 on을 추가해줌
	//btns요소에서 idx번째요소만 다시 on을 추가해줌
	arrEl[index].classList.add('on');
}

//클릭할때마다 순간적으로 for문을 반복돌면서 on을 다 초기화해주고 클릭한 idx번째 요소만 on을 붙여줌

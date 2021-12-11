const area = document.getElementById('area');
let move = 0;
let result = '';
const contentWrapper = document.getElementById('content');
const modalResult = document.getElementById('modal-result-wrapper')
const overlay = document.getElementById('overlay')
const btnClose = document.getElementById('btn-close')

area.addEventListener('click', e => {
  if(e.target.className = 'box') {
    move % 2 == 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0'; // определяет чей ход и что ставить
    move++;
    check()
  }
})

const check = () => {
  const boxes = document.getElementsByClassName('box');
  const arr = [         
      [0,1,2],  // выйгрыш по горизонтали
      [3,4,5],  // выйгрыш по горизонтали
      [6,7,8],  // выйгрыш по горизонтали
      [0,3,6],  // выйгрыш по вертикали
      [1,4,7],  // выйгрыш по вертикали
      [2,5,8],  // выйгрыш по вертикали
      [0,4,8],  // выйгрыш по горизонтали
      [2,4,6],  // выйгрыш по горизонтали
  ];
  for(i = 0; i < arr.length; i++) {
    if(
      boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X' //проверка выигрышка X
    ) {
      result = 'крестики';
      prepareResult(result);
    } else if (
        boxes[arr[i][0]].innerHTML == '0' && boxes[arr[i][1]].innerHTML == '0' && boxes[arr[i][2]].innerHTML == '0' //проверка выигрышка 0
    ) {
      result = 'нолики';
      prepareResult(result);
    }
  }
}
// модальное окно вылезает при победе
const prepareResult = winner => {
  contentWrapper.innerHTML = `Победили ${winner} !`;
  modalResult.style.display = 'block';
}

const closeModal = () => {
  modalResult.style.display = 'none'; 
  location.reload();   //перезагрузка страницы 
}
// модальное откно закрывается
overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);

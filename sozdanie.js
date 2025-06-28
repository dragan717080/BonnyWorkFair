/**
 * @param {PointerEvent<HTMLButtonElement>} e
 *
 * @returns {boolean}
 */
const requestMaster = (e) => {
  e.preventDefault();

  const requestMasterName = document.querySelector("input[name='nazvanie']").value;
  console.log(requestMasterName);

  return true;
}


const requestMasterBtn = document.getElementById('sozdanie-btn');
requestMasterBtn.addEventListener('click', (e) => requestMaster(e));

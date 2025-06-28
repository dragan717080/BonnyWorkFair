const hire = () => {
  console.log('1');
}

/**
 * Only keep background for the currently active input option, and remove from others.
 * @param {Array<HTMLDivElement>} allOptions
 * @param {HTMLDivElement} activeElement
 * @return {void}
 */
const onlyGiveBackgroundToCurrentlyActiveInput = (
  allOptions,
  activeElement
) => {
  console.log('activeElement:', activeElement);
  const otherElements = allOptions.toSpliced(allOptions.indexOf(activeElement), 1);
  console.log(otherElements);

  // Give orange background to active element
  activeElement.style.backgroundColor = '#E1592C';
  activeElement.style.border = '1px solid #FFF';
  activeElement.style.color = '#FFF';

  // Give default to other elements
  otherElements.forEach(otherElement => {
    otherElement.style.backgroundColor = '#F5F5F5';
    otherElement.style.border = '1px solid #CDCDCD';
    otherElement.style.color = '#9C9C9C';
  });
}


const addListenersForPaypalAndCash = () => {
  const allOptions = [
    document.getElementById('date-container'),
    document.getElementById('time-container'),
    document.getElementById('paypal-container'),
    document.getElementById('cash-container')
  ];

  allOptions.forEach((activeElement) =>
    activeElement.addEventListener('click', () => onlyGiveBackgroundToCurrentlyActiveInput(allOptions, activeElement))
  );
}

const hireBtn = document.getElementById('hire-btn');
hireBtn.addEventListener('click', () => hire());

addListenersForPaypalAndCash();

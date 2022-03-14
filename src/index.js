import './style.css';

const firstPageH1 = document.getElementById('first-page-h1');
const secondPageH2 = document.getElementById('second-page-h2');
const firstPageSection = document.getElementById('first-page-section');
const secondPageSection1 = document.getElementById('second-page-section1');
const secondPageSection2 = document.getElementById('second-page-section2');

secondPageH2.style.display = 'none';
secondPageSection1.style.display = 'none';
secondPageSection2.style.display = 'none';

document.getElementById('login-submit').addEventListener('click', () => {
  const emailField = document.getElementById('user-email');
  const userEmail = emailField.value;
  // console.log(userEmail);
  const passwordField = document.getElementById('user-password');
  const userPassword = passwordField.value;
  console.log(userPassword);

  if (userPassword !== '' && userEmail !== '') {
    secondPageH2.style.display = 'block';
    secondPageSection1.style.display = 'block';
    secondPageSection2.style.display = 'block';
    firstPageSection.style.display = 'none';
    firstPageH1.style.display = 'none';
  } else {
    alert('Please fill the form');
  }
});

document.getElementById('deposit-btn').addEventListener('click', () => {
  // deposit

  const depositInput = document.getElementById('deposit-input');
  const newDepositAmount = depositInput.value;

  const depositTotal = document.getElementById('deposit-total');
  const previousDepositAmount = depositTotal.innerText;

  const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
  console.log(depositTotal.innerText);
  depositTotal.innerText = newDepositTotal;

  // update

  const balanceTotal = document.getElementById('balance-total');
  const balanceAmount = balanceTotal.innerText;

  const newBalanceTotal = parseFloat(balanceAmount) + parseFloat(newDepositAmount);
  balanceTotal.innerText = newBalanceTotal;

  depositInput.value = '';
});

document.getElementById('withdraw-btn').addEventListener('click', () => {
  // withdraw

  const withdrawInput = document.getElementById('withdraw-input');
  const withdrawAmount = withdrawInput.value;

  const withdrawTotal = document.getElementById('withdraw-total');
  const previousWithdrawAmount = withdrawTotal.innerText;

  const newWithdrawTotal = parseFloat(previousWithdrawAmount) + parseFloat(withdrawAmount);

  withdrawTotal.innerText = newWithdrawTotal;
  withdrawInput.value = '';

  // balance

  const balanceTotal = document.getElementById('balance-total');
  const balanceAmount = balanceTotal.innerText;

  const newBalanceTotal = parseFloat(balanceAmount) - parseFloat(withdrawAmount);
  balanceTotal.innerText = newBalanceTotal;
});
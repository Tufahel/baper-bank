const banking = () => {
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

  const sum = (a, b) => parseFloat(a) + parseFloat(b);

  const getInputValue = (id) => {
    const input = document.getElementById(id);
    const amount = input.value;
    input.value = '';
    return amount;
  };

  const updateInnerText = (id, money) => {
    const total = document.getElementById(id);
    const amount = total.innerText;
    const newTotal = sum(amount, money);
    total.innerText = newTotal;
  };

  document.getElementById('deposit-btn').addEventListener('click', () => {
    // deposit
    const depositAmount = getInputValue('deposit-input');
    updateInnerText('deposit-total', depositAmount);

    // update
    updateInnerText('balance-total', depositAmount);
  });

  document.getElementById('withdraw-btn').addEventListener('click', () => {
    // withdraw
    const withdrawAmount = getInputValue('withdraw-input');
    updateInnerText('withdraw-total', withdrawAmount);

    // balance
    updateInnerText('balance-total', -withdrawAmount);
  });
};

export default banking;
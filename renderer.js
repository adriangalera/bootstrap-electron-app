const bankAccountsList = document.getElementById('bank-accounts-list');
const createAccountButton = document.getElementById('create-account-button');
const modal = document.getElementById('modal');
const accountNameInput = document.getElementById('account-name');
const accountProviderSelect = document.getElementById('account-provider');
const saveAccountButton = document.getElementById('save-account');
const closeModalButton = document.getElementById('close-modal');

let bankAccounts = [];

function renderBankAccounts() {
  bankAccountsList.innerHTML = '';
  bankAccounts.forEach(account => {
    const li = document.createElement('li');
    li.textContent = `${account.name} - ${account.provider}`;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      bankAccounts = bankAccounts.filter(acc => acc.name !== account.name);
      renderBankAccounts();
      // Notify main process
      window.electronAPI.deleteBankAccount(account.name);
    });
    li.appendChild(deleteButton);
    bankAccountsList.appendChild(li);
  });
}

createAccountButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

saveAccountButton.addEventListener('click', () => {
  const newAccount = {
    name: accountNameInput.value,
    provider: accountProviderSelect.value
  };
  bankAccounts.push(newAccount);
  renderBankAccounts();
  modal.style.display = 'none';
  accountNameInput.value = '';
  accountProviderSelect.value = 'kutxabank';
  // Notify main process
  window.electronAPI.saveBankAccount(newAccount);
});

renderBankAccounts();
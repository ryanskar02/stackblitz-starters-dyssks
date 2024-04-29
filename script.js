// Complete the Account class below based on the following requirements:
// 1. We want to able to create a checking and a separate savings account like so:
// const CheckingAccount = new Account('Checking');
// const SavingsAccount = new Account('Savings');

// 2. We want to OPEN each account and if one is already open, then we want to let the user know that the account is already open
// i.e.
// CheckingAccount.open();
// SavingsAccount.open();
// if we call CheckingAccount.open() again, we should receive a message that says the account is already open

// 3. We want to CLOSE an open account and in doing so set the balance to 0
// i.e.
// CheckingAccount.close();
// SavingsAccount.close();

// 4. We want to be able to deposit money into our OPEN accounts, if an account is not open then we want to inform the user the account isn't open
// i.e.
// CheckingAccount.deposit(500);
// SavingsAccount.deposit(500);

// 5. We want to be able to withdraw money from our open accounts, if the balance of the account allows for it.  If the balance is less than the requested withdraw amount, then we want to let the user know that "There are not enough funds to withdraw the requested amount"
// i.e. if CheckingAccount balance is 1000
// CheckingAccount.withdraw(2000) should show us a "insufficient funds" message in the console

// 6. We want to be able to get the balance of an open account
// i.e.
// CheckingAccount.balance should console.log the balance

// 7. We want to be able to transfer an amount from a current open account to another, target, open account.
// If either account is not open, we want to let the user know this
// If the balance of the current account is insufficient to make the transfer then we want to let the user know this.
// CheckingAccount.transfer(100, SavingsAccount)

class Account {
  constructor(type) {
    this.type = type;
    this.isOpen = false;
    this.balance = 0;
  }

  open() {
    if (this.isOpen) {
      console.log(`The ${this.type} account is already open.`);
    } else {
      this.isOpen = true;
      console.log(`Opened ${this.type} account.`);
    }
  }

  close() {
    this.balance = 0;
    this.isOpen = false;
    console.log(`Closed ${this.type} account.`);
  }

  deposit(amount) {
    if (!this.isOpen) {
      console.log(`Cannot deposit into closed ${this.type} account.`);
    } else {
      this.balance += amount;
      console.log(`Deposited ${amount} into ${this.type} account.`);
    }
  }

  withdraw(amount) {
    if (!this.isOpen) {
      console.log(`Cannot withdraw from closed ${this.type} account.`);
    } else if (amount > this.balance) {
      console.log(`There are not enough funds to withdraw the requested amount from ${this.type} account.`);
    } else {
      this.balance -= amount;
      console.log(`Withdrew ${amount} from ${this.type} account.`);
    }
  }

  getBalance() {
    if (!this.isOpen) {
      console.log(`Cannot get balance of closed ${this.type} account.`);
    } else {
      console.log(`Balance of ${this.type} account: ${this.balance}`);
    }
  }

  transfer(amount, targetAccount) {
    if (!this.isOpen || !targetAccount.isOpen) {
      console.log("Both accounts must be open to transfer funds.");
    } else if (amount > this.balance) {
      console.log(`Insufficient funds in ${this.type} account to transfer ${amount}.`);
    } else {
      this.balance -= amount;
      targetAccount.balance += amount;
      console.log(`Transferred ${amount} from ${this.type} account to ${targetAccount.type} account.`);
    }
  }
}

// Usage
const CheckingAccount = new Account('Checking');
const SavingsAccount = new Account('Savings');

CheckingAccount.open();
SavingsAccount.open();
CheckingAccount.open(); // Should show message that account is already open

CheckingAccount.deposit(500);
SavingsAccount.deposit(500);

CheckingAccount.withdraw(2000); // Should show insufficient funds message

CheckingAccount.transfer(100, SavingsAccount);
SavingsAccount.getBalance();
CheckingAccount.getBalance();

CheckingAccount.close();
SavingsAccount.close();
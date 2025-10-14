personAccount = {
firstName: "John",
lastName: "Doe",
incomes: [1000, 2000, 3000],
expenses: [500, 700, 800],
totalIncome: function() {
    return this.incomes.reduce((acc, income) => acc + income, 0);
},
totalExpense: function() {
    return this.expenses.reduce((acc, expense) => acc + expense, 0);
},
accountInfo: function() {
   return 'thong tin tai khoan: ' + this.firstName + ' ' + this.lastName + '\n' +
          'Tong thu nhap: ' + this.totalIncome() + '\n' +
          'Tong chi phi: ' + this.totalExpense() + '\n' +
          'So du: ' + (this.totalIncome() - this.totalExpense());
},
addIncome: function(amount) {
    this.incomes.push(amount);
},
addExpense: function(amount) {
    this.expenses.push(amount);
},
accountBalance: function() {
    return this.totalIncome() - this.totalExpense();
}
}
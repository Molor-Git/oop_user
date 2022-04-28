class User {
    
    constructor(username, emailAddress) {
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
    }
    makeDeposit(amount) {
        this.accountBalance += amount;
    }
    withdrawal(amount) {
        this.accountBalance -= amount;
    }
    transfer(name, amount) {
        if (name === molor) {
            oyuka.accountBalance -= amount
            molor.accountBalance += amount
        }
        else if (name === oyuka){
            molor.accountBalance -= amount
            oyuka.accountBalance += amount
        }
    }
}
const molor = new User("Molor", "molor@email.com");
const oyuka = new User("Oyuka", "oyuka@email.com");

console.log(`Deposit made to Users account!`)
molor.makeDeposit(6000)
oyuka.makeDeposit(4000)
console.log(molor)
console.log(oyuka)

console.log(`Withdrawal made to Users account!`)
molor.withdrawal(400)
oyuka.withdrawal(600)

console.log(molor)
console.log(oyuka)

console.log("Transfer from Oyuka to Molor")

oyuka.transfer(molor,3000)
console.log(molor)
console.log(oyuka)

console.log("Trasfer from Molor to Oyuka")
molor.transfer(oyuka,5000)
console.log(molor)
console.log(oyuka)
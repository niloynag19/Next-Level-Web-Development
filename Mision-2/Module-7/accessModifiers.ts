
class BankAccount {
    public readonly userId: number;
    public userName: string;
    protected userBalance: number

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId,
        this.userName = userName,
        this.userBalance = userBalance
    }

    addBalance(balance: number) {
        this.userBalance = this.userBalance + balance;
    }
}

class Any extends BankAccount{
    use(){
        this.userBalance
    }
}


const niloyAccount = new BankAccount(12, "Niloy", 100)
niloyAccount.addBalance(100);

console.log(niloyAccount);
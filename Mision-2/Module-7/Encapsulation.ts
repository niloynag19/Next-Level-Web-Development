class BankAccount2 {
    public readonly userId: number;
    public userName: string;
    private _userBalance: number

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance;
    }

    private addBalance(balance: number) {
        this._userBalance += balance;
    }
    deposit(amount: number) {
        this.addBalance(amount);
    }
    get balance() {
        return this._userBalance;
    }
}

// -----------------------

const nandonAccount1 = new BankAccount2(12, "Niloy", 100);
nandonAccount1.deposit(120);
console.log(nandonAccount1.balance); 


class BankAccount1 {
    public readonly userId: number;
    public userName: string;
    private _userBalance: number

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId,
        this.userName = userName,
        this._userBalance = userBalance
    }

    set addBalance(balance: number) {
        this._userBalance = this._userBalance + balance;
    }

    get getBalance(){
        return this._userBalance
    }
}

const nandonAccount = new BankAccount1(12, "Niloy", 100)

// nandonAccount.addBalance(100);

// console.log(nandonAccount.getBalance());
nandonAccount.addBalance=120;
console.log(nandonAccount.getBalance);
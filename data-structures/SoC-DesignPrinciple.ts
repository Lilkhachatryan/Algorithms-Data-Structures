// Example of code without SoC
// Also TDA is not implemented

{
    class User {
        _id: string = '';
        name: string = '';
        balance: number = 0;


        constructor(name) {
            this._id = Math.random().toString(36).substring(7);
            this.name = name;
        }
    }

    class AccountService {

        log(msg: string) {
            console.log((new Date()) + " :: " + msg);
        }

        transfer(user1: User, user2: User, amount: number): any {
            // validate amount
            if ( amount <= 0 ){
                this.log("amount 0, nothing changed.");
                return {user1, user2};
            }

            // validate if user1 have enough
            if ((user1.balance - amount) < 0) {
                this.log("user " + user1._id + " did not have enough funds.");
                return {user1, user2};
            }

            //get from user1
            user1.balance -= amount;
            // add to user2
            user2.balance += amount;

            this.log("User " + user1._id + " now has " + user1.balance);
            this.log("User " + user2._id + " now has " + user2.balance);

            return {user1, user2};
        }

        updateBalance(user: User, amount: number): User {
            user.balance += amount;
            this.log("User " + user._id + " now has " + user.balance);
            return user;
        }

    }

    const aService = new AccountService();
    let u1 = new User("john");
    u1 = aService.updateBalance(u1, 1000);

    let u2 = new User("bob");
    u2 = aService.updateBalance(u2, 500);

    console.log( aService.transfer(u1, u2, 250) );
}

// Example of proper SoC 

/**
 * VALIDATORS
 */
class StringLengthValidator {
    static greaterThan(value: string, length: number): boolean {
        if ( value.length > length)  {
            return true
        } else {
            throw new Error("String is not long enough.");
        }
    }
}

class UserBalanceValidator {
    static haveEnoughFunds(user: User, amount: number): boolean {
        return (user.getBalance() - amount) > 0;
    }
}

/**
 * INTERFACES
 */
interface IUserAccount {
    _id: string;
    name: string;
    balance: number;
}

/**
 * CLASSES
 */
class User implements IUserAccount {

    _id: string = '';
    name: string = '';
    balance: number = 0;

    constructor(name) {
        this._id = this._generateRandomID();
        this.setName(name);
    }

    private _generateRandomID() {
        return Math.random().toString(36).substring(7);
    }

    getId(): string {
        return this._id;
    }

    setName(name: string): User {
        StringLengthValidator.greaterThan(name, 2);
        this.name = name;
        return this;
    }

    getBalance(): number {
        return this.balance;
    }

    setBalance(amount: number): User {
        this.balance = amount;

        LoggerService.log("User " + this.getId() + " now has " + this.getBalance() );
        return this;
    }
}

class LoggerService {

    static log(message: string): string {
        message = (new Date()) + " :: " + message;
        console.log(message);
        return message;
    }

}

class AccountService {


    transfer(fromUser: User, toUser: User, amount: number): any {
        if (!UserBalanceValidator.haveEnoughFunds(fromUser, amount)) {
            LoggerService.log("User " + fromUser.getId() + " has not enough funds.");
            return {fromUser, toUser};
        }

        fromUser.setBalance(fromUser.getBalance() - amount);
        toUser.setBalance(toUser.getBalance() + amount);

        return {fromUser, toUser}
    }

    updateBalance(user: User, amount: number) : User {
        user.setBalance(user.getBalance() + amount);
        return user;
    }

}

const aService = new AccountService();
let u1 = new User("john");
let u2 = new User("bob");

u1 = aService.updateBalance(u1, 1000);
u2 = aService.updateBalance(u2, 500);

console.log( aService.transfer(u1, u2, 250) );
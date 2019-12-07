// Example of how KISS does NOT look like:

class payup {

    howmuchtopay(region: string, amount: number, tax: number, country: string, price: number) {
  
      if (country == "pl_PL") {
        if (region == "masovia" || region == "Lubusz") {
          if (amount > 15) {
            price -= ((15/100)*price);
            price += ((tax/100)*price);
            return (price * amount);
          }
          return ((price+((tax/100)*price)) * amount);
        } else {
          return ((price+((tax/100)*price)) * amount);
        }
      } else {
        return (price*amount);
      }
  
    }
  
}
  
  
const p = new payup();
console.log( p.howmuchtopay("masovia", 25, 23, "pl_PL", 1000) );


// After using KISS principle, it does look like this

interface Country {
    code: string;
    discountAmountPercent: number;
    taxAmountPercent: number;
    discountRegions: Array<string>;
}

class Poland implements Country {
    code: string = "pl_PL";
    discountAmountPercent: number = 15;
    taxAmountPercent: number = 23;
    discountRegions: Array<string> = [
    "masovia",
    "lubusz"
    ];
}

class Payment {

    setTax(price: any, tax: number) {
        return (price + (tax/100*price));
    }

    setDiscount(price: any, discount: number) {
        return (price - ((discount/100)*price));
    }

    pay(country: Country, region: string, amount: number, nettoPrice: number) {

        if (
        country.discountRegions.indexOf(region.toLowerCase()) != -1
        && amount > 15
        ) {
        nettoPrice = this.setDiscount(nettoPrice, country.discountAmountPercent);
        }

        const bruttoPrice = this.setTax(nettoPrice, country.taxAmountPercent);
        return (bruttoPrice*amount);
    }
  }
  
  const payment = new Payment();
  console.log ( payment.pay((new Poland), 'masovia', 25, 1000) );
  
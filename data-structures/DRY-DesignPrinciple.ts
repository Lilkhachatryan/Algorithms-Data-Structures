// Example of not good DRY code is

{
    class Week {
        days: any;
        constructor() {
        this.days = [];
        this.days.push({
            name: "Monday",
            order: 1
        });
        this.days.push({
            name: "Tuesday",
            order: 2
        });
        this.days.push({
            name: "Wednesday",
            order: 3
        });
        this.days.push({
            name: "Thursdya",
            order: 4
        });
        this.days.push({
            name: "Friday",
            order: 5
        });
        this.days.push({
            name: "Saturday",
            order: 6
        });
        this.days.push({
            name: "Sunday",
            order: 7
        });
        }
    
        list() {
        console.log(this.days);
        }
    }
    
    const w = new Week();
    w.list();
}
  

// Example of proper class with good DRY code

enum dayNames {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
  }
  
  class Day {
    name: string;
    order: number;
  
    constructor(name: string, order: number = 0) {
      this.name = name;
      this.order = order;
    }
  
    setOrder(order: number) : Day {
      this.order = order;
      return this;
    }
  
  }
  
  class Week {
  
    days: Array<Day> = new Array();
  
    private addDay(name: string): Day {
      const day = new Day(name);
      const index = this.days.push(day);
      day.setOrder(index)
      return day;
    }
  
    constructor() {
       for(let dayName in dayNames) {
         this.addDay(dayName);
       }
    }
  
    listDays() {
      console.log(this.days);
    }
  
  }
  
  const firstWeek = new Week();
  firstWeek.listDays();
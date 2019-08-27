class LinkedListNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

var number1 = new LinkedListNode(2);
number1.next = new LinkedListNode(4);
number1.next.next = new LinkedListNode(3);

var number2 = new LinkedListNode(5);
number2.next = new LinkedListNode(6);
number2.next.next = new LinkedListNode(4);

class Solution {
	constructor() {
		this.sum = null;
	}
	addTwoNumbers(number1, number2, c = 0) {
		var number3 = number1.data + number2.data;
		if(c !== 0 ) { number3 += 1}
		c = number3 >= 10 ? 1 : 0;
		 
            if(!this.sum){ 
                this.sum = new LinkedListNode(c ? number3 - 10 : number3);
				console.log("sum1", this.sum);
            } else {
                this.sum.next = new LinkedListNode(c ? number3 - 10 : number3);
				this.sum = this.sum.next;
				
				console.log("sum2", this.sum);
            }
			
			if(number1.next) {
				number1 = number1.next;
				number2 = number2.next;
				
				this.addTwoNumbers(number1, number2, c);
			}
		return  this.sum;
	}
}

var solution = new Solution();
var result = solution.addTwoNumbers(number1, number2);

while (result) {
 	console.log(result.data);
 	result = result.next;
}
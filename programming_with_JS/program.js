class Program {
    palindrome() {
        var rem, num, sum = 0;
        var number = 12321;

        num = number;
        while (number > 0) {
            rem = number % 10;
            number = parseInt(number / 10);
            sum = sum * 10 + rem;
        }
        if (sum == num) {
            return "Palindrome";
        }
        else {
            return "Not palindrome";
        }
    }

    armstrong() {
        let num = 153, sum = 0, rem = 0;
        let number = num;
        let len = num.toString().length;
        while (num > 0) {
            rem = num % 10;
            sum = sum + Math.pow(rem, len);
            num = parseInt(num / 10);
            // console.log(sum);
        }
        if (sum == number) {
            return "Armstrong no.";
        } else {
            return "Not a Armstrong no.";
        }
    }
    primeNumber() {
        let num = 2;
        for (let i = 2; i <= num/2; i++) {
            if(num%i==0){
                return "Number is not prime";
            }
        }
        return "Number is prime";
    }


    maxAndMin() {
        let arr = [12, 23, 11, 233, 22, 44, 67, 76, 95, 6, 11, 96, 7, 1];
        let max = 0, min = Infinity;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            } else if (arr[i] < min) {
                min = arr[i];
            }
        }
        return "maximum: " + max + ", minimum: " + min;
    }
    secondHighLow() {
        let arr = [12, 23, 11, 233, 22, 44, 67, 76, 95, 6, 11, 96, 7, 1];
        let max = arr[0];
        let secondmax = arr[0];
        let min = arr[0];
        let secondmin = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                secondmax = max;
                max = arr[i];
            } else if (arr[i] > secondmax) {
                secondmax = arr[i];
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                secondmin = min;
                min = arr[i];
            }
            else if (arr[i] < secondmin) {
                secondmin = arr[i];
            }
        }
        return "Second maximum: " + secondmax + ",second minimum: " + secondmin;
    }
    fibonacci(n){
        if(n<=1){
            return n;
        }        
        return this.fibonacci(n-1)+this.fibonacci(n-2);
    }

    factorial(n){
        if(n<0)
        return "please enter positive number";
        if(n==1||n==0){ 
            return 1;
        }
        return n*this.factorial(n-1);
    }
    sumArray(){
        let arr = [10,20,30,40,50];
        let sum = arr.reduce(function(sum,next){
            return sum+next;
        },0);
        
        return sum;
    }
    arrayReverse(){
        let arr = [10,20,30,40,50];let count =0;
        let temp =0;
        for(let i=0;i<arr.length/2;i++){
            temp= arr[i];
            arr[i] = arr[arr.length-i-1];
            arr[arr.length-i-1]=temp;
            count++;
        }
        return arr;
    }
    sorting(){
        let arr = [3,2,1,5,6,4,3,5,6,7,8,8,9,0];
        let temp = 0;
        for(let i=0;i<arr.length-1;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]>arr[j]){
                    temp = arr[i];
                    arr[i]=arr[j];
                    arr[j] =temp;
                }
            }
        }
        return arr;
    }
    searching(n){
        let arr = [10,22,2,1,21,56,23,56,45,34,35,34,3,54,64,34];
        if(arr.includes(n))
            return "Element found";
        else
            return "Element not found";
    }
    word_count(n){
        let str = "lorem lipsum iteeeeee dkdm sls gngnd oe dleow sldid";
        return str.split(" ").length;
    }
    searchChar(){
        let str ="fldsjf lsdkfj lsadfkj dfkas ldf ks dskl jasfklllj";
        if(str.includes("lsdkfj"))
            return "character found";
        else
            return "character not found";
    }
    individualWordReverse(){
        let str = "This is a string whose individual word to be reversed";
        let arr = str.split(" ");
        let reverse;
        for(let i=0;i<arr.length;i++){
            reverse += arr[i].split("").reverse().join("")+" ";
        }
        return reverse;        
    }
    digitCount(){
        let num =1234344;
        let digit = 0;
        while(num>=1){
            digit+=1;
            num =parseInt(num/10);
        }
        return digit;
    }
    
}
p = new Program();
console.log(p.palindrome());
console.log(p.armstrong());
console.log(p.primeNumber());
console.log(p.maxAndMin());
console.log(p.secondHighLow());
console.log(p.fibonacci(9));
console.log(p.factorial(5));
console.log(p.sumArray());
console.log(p.arrayReverse());
console.log(p.sorting());
console.log(p.searching(23));
console.log(p.word_count());
console.log(p.searchChar());
console.log(p.individualWordReverse());
console.log(p.digitCount());
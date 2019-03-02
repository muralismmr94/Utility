/* @author : Murali
* version :1.0
*/

var readline = require('readline-sync');
module.exports = {


/*
* @purpose :Using user name taken from user and change the certain string to user input. 

** @description : Declaring a function and passing the userinput to change the string.

* @function: Taken user input form the function and prints to change the name.
*/ 
    replaceString(input) {
        if (input.length > 2) {
            console.log("Hello " + input + ", How are you?");
            flag = false;
        }
        else
            console.log("User name should be greater than two letters.");
    },

  /*
* @purpose : By using random function flip the coin. accept user input to flip number of times to flip coin
*            and print the percentage of head vs tails
*
* @description : Declaring a function and passing the userinput for fliping the coin
*                no of times
* @function: coinflip takes the no of times to flip coin and print the percentage of
*            head and tail
*/ 

    flipCoin(times) {
        var tails = 0, heads = 0;
        for (let index = 0; index < times; index++) {
            var value = Math.random();
            if (value < 0.5)
                tails++;
            else
                heads++;
        }
        console.log("the total no of heads is :"+heads)
        console.log("the total no of tails is :"+tails)
        console.log("the percentage of heads is: " + (heads / times) * 100 + " %");
        console.log("the percentage of tails is: " + (tails / times) * 100 + " %");
    },


/*
* @purpose : Accept four digit input of year from the user and check given inputs is Leap year or not
*
* @description : Declaring a function and passing the four digit number from  user input.
*                
* @function: function checks length of the given number, if length equals to 4, then it prints
*given number is Leap year or not.
*/ 
    leafYear(year) {
        if (year % 400 == 0 || year % 4 == 0) {
            console.log("your entered year " + year + " is leap year...");
        }
        else {
            console.log("your entered year " + year + " is not a leap year...");
        }
    },

/*
* @purpose : To Accept value of "N" from user and prints a table of the powers of 2 
*            that are less than or equal to 2^N. value of N should be less then 31.
*
* @description : Prints the value of two's power
*                
* @function: function checks the given number is less then 31, if less then 31, then it prints
*            the value of two's power i.e., 2^N value.
*/
    powerOfTwo(num) {
        var start = 2, end = 31;
        if (num >= 0 && num < end) {
            for (var i = 0; i <= num; i++) {
                var d = +Math.pow(start, i);
                console.log(b + "^" + i + "=" + d);
            }
        }
        else {
            console.log("please enter a number between o to 30");
        }
    },
/*
* @purpose : To generate Harmonic numbersTo Accept value of "N" from user and prints a table of the powers of 2 
*            that are less than or equal to 2^N. 
*
* @description : To generate sum of harmonic numbers by accepting input from user.
*                
* @function: function Harmonic function takes user input and sum it number of times that user given.
*/
    hormonic(num) {
        var sum = 0;

        for (var i = 1; i <= num; i++) {
            sum += (1 / i);
        }

        return sum.toFixed(3);
    },
/*
@purpose : To compute the prime factorization of N using brute force.
*
* @description : To compute the prime factorization of N by accepting input from user.
 */
    primeFSSactor(n) {
        while(n % 2 == 0) {
            console.log(2 + " ");
            n /= 2;
        }
        for (let i = 3; i <= n; i += 2) {
            while (n % i == 0) {
                console.log(i + " ");
                n /= i;
            }
        }
        if (n > 2)
            console.log(n);
    },
    /*
    @purpose : Simulates a gambler who start with some initial stake amount and place fair 1 bets until 
    *          he/she goes broke (i.e. has no money) or reach goal(gains expected amount). Keeps track of the number of 
    *          times he/she wins and the number of bets he/she makes. will run the experiment N times, 
    *          averages the results, and prints them out.
    *
    * @description : Play till the gambler is broke or has won
    *                
    */
    gambler(stake, goal, number) {
    
        var bets = 0, wins = 0, loss = 0;
        for (let i = 0; i < number; i++) {
            bets++;

            if (stake > 0 && stake < goal) {
                if (Math.random() < 0.5)
                    wins++;
                else
                    wins--;
            }
          if (stake == goal)
          wins++;
        }
        var d = (wins / goal) * 100;
        console.log(wins + " wins of " + goal);
        console.log("the percentage of wins " + d +" %");
        console.log("the percentage of loss " + (100 - d)+" %");
    },
    /*
    @purpose : Given N distinct Coupon Numbers, how many random numbers do you 
    *          need to generate distinct coupon number? This program simulates this random process.
    *
    * @description : total random number needed to have all distinct numbers.               
    */
    generateCoupon(number) {
        var ar = [];
        for (var i = 0; i < number; i++) {
            ar[i] = Math.floor(Math.random() * number);
            for (var j = 0; j < i; j++) {
                if (ar[i] == ar[j]) {  
                    i--;
                 }
            }
        }
        console.log(ar);
    },
/*
* @purpose : Given N distinct Coupon Numbers, how many random numbers do you 
*            need to generate distinct coupon number? This program simulates this random process.
*
* @description : total random number needed to have all distinct numbers.
*                
*/
    twoDimArray(a, b, arr) {
        for (let i = 0; i < a; i++) {
            arr.push([]);
            for (let j = 0; j < b; j++) {
                arr[i][j] = readline.question("Enter value  "+i+" "+j+" of array : ");
            }
        }
        /**
         * 
         */
        console.log("2Dimentional array elements:");
        for (let i = 0; i < a; i++) {
            console.log(arr[i]);
        }
    },
    /*
    * @purpose : A program with cubic running time. Read in N integers and counts the 
    *            number of triples that sum to exactly 0.
    * @description :Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0.
    */        
    sumOfThree(num, ar) {
        for (let i = 0; i < num; i++) {
            ar[i] = readline.questionInt("enter array [" + i + "] value: ");

        }
        var count = 0;
        for (let i = 0; i < num; i++) {
            for (let j = i + 1; j < num; j++) {
                for (let k = j + 1; k < num; k++) {
                    if (Number(ar[i]) + Number(ar[j]) + Number(ar[k]) == 0) {
                        count++;
                        console.log(ar[i] + " " + ar[j] + " " + ar[k]);
                    }
                }
            }
        }
        console.log(count);
    },
/*
@purpose : A program with cubic running time. Read in N integers and counts the 
*          number of triples that sum to exactly 0.
* @description :Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0.                
*/
    distance(x, y) {
        var z = Math.sqrt(x * x + y * y).toFixed(2);
        console.log("Euclidean distance from the point (" + x + "," + y + ") to the origin (0, 0) is " + z);
    },
    
  
/*
* @description: return the time in seconds from 1970.
*/
        currentSeconds() {
        var date = new Date();
        return date.getSeconds();
    },
    /*
    * @purpose : A Stopwatch Program for measuring the time that elapses between 
    *           the start and end clicks
    * @description :Measure the elapsed time between start and end.     
    */
    stopWatch(request) {

        var startTime = 0, stopTime = 0;
        var num = request.question("please enter 0 to start stopwatch");
        {
            startTime = this.currentSeconds();
            console.log(startTime);
            var num1 = request.question("please enter 1 for stop the watch");
            stopTime = this.currentSeconds();
            console.log(stopTime);
            var time = stopTime - startTime;
            console.log("stop watch time is " + time + " seconds");
        }
    },
/*
* @purpose : To find the roots of the equation a*x*x + b*x + c. 
*            Since the equation is x*x, hence there are 2 roots. The 2 roots of the equation can be 
*            found using a formula.
* @description : Take a, b and c as input values to find the roots of x.
*/    

    quadratic(a, b, c) {
        var delta = (b * b) - (4 * a * c);
        console.log(delta);
        if (delta == 0) {
            var root = -b / (2 * a);
            console.log("root value: " + root);
        }
        else if (delta > 0) {
            var root1 = ((-b + (Math.sqrt(delta))) / 2 * a);
            var root2 = (-b - (Math.sqrt(delta))) / 2 * a;
            console.log("First root " + root1);
            console.log("Second root " + root2);
        }
        else if (delta < 0) {
            var root1 = -b / 2 * a;
            var root2 = (Math.sqrt(-delta)) / 2 * a;
            console.log("First root " + root1);
            console.log("Second root " + root2);
        }
    },
    /*
    @purpose : To find the windchill. The temperature t (in Fahrenheit) and the
    *           wind speed v (in miles per hour),the National Weather Service defines the 
    *           effective temperature (the wind chill) .
    *
    * @description : The formula is given by the national weather service. Formula is not
    *   
    */        
    windChill(t, v) {
        var windChill = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
        console.log("the temparature is " + t + " the windspeed is " + v);
        console.log("the windchill is " + windChill);
    },

    
   /* -----------------------------------------------------------------------------------
    *-----------------------------------------------------------------------------------  
    *                                ALGORITHMS PROGRAMS
    *
    *@purpose : Take 2 Strings as Input such abcd and dcba and Check for Anagrams
    * @description : One string is an anagram of another if the second is simply a rearrangement 
    * of the first. For example, 'heart' and 'earth' are anagrams...                 
    */
    isAnagram(a, b) {
        var x = [];
        x = a.toLowerCase();
        var y = [];
        y = b.toLowerCase();
        if (x.length != y.length) {
            return false;
        }
        else {
            var m = [], n = [];
            m = x.split("");
            n = y.split("");
            x = m.sort();
            y = n.sort();
            if (x.length == y.length) {
                var j = 0;
                while (j < x.length) {
                    for (let i = j; i < x.length; i++) {
                        if (x[j] != y[i]) {
                            return false;
                        } else {
                            j++;
                        }
                    }
                }
                 return true;
            }
        }
    },

    /*
    @purpose : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range.
    *
    * @description : Find prime Numbers 
    */     
    isPrime(n) {
        if (n == 0 || n == 1) {
            return false;
        } else {
            for (let i = 2; i < n; i++) {
                if (n % i == 0) {
                    return false;
                }
            }
            return true;
        }
    },

    /* Purpose : Use the random number that should print in the reverse order . then, the 
    *            reverse ordered string or number must be equal to given user input.it is similar to anagram
    *  @descriptipn: Declaring the function and passing the userinput as argument.
    *  @function   : Diplayname takes the userinput and print it with palinddrome.
    */
    isPalimdrome(string1) {
        var str = "";
        for (let index = 0; index < string1.length; index++) {
            str = string1.charAt(index) + str;
        }
        if (str == string1) {
            return true;
        }
        return false;
    },

    //number is Anagrampalindrom checking

    isPalimdrome2String(num1, num2) {
        var str = "";
        num1 = num1 + "";
        num2 = num2 + "";
        for (let i = 0; i < num1.length; i++) {
            str = num1.charAt(i) + str;
        }
        if (str == num2) {
            return true;
        }
        return false;
    },

    isAnagramNum(num, num1) {
        var m = [], n = [];

        m = num.split("");
        n = num1.split("");
        if (m.length != n.length) {
            return false;
        }
        else {
            m = m.sort();
            n = n.sort();
            var j = 0;
            while (j < m.length) {
                for (let i = 0; i < m.length; i++) {
                    if (m[j] != n[i]) {
                        return false;
                    } else {
                        j++;
                    }
                }
                return true;
            }
        }
    },

    /*  Purpose      : Prints anagram palindrome numbers.
    *
    *  @descriptipn: To prints 1 to 1000 between Prime anagram palindrome numbers.
    */             
    isAnagramPalindrome() {
        var arr = [];
        for (let index = 0; index < 1000; index++) {
            if (this.isPrime(index)) {
                arr.push(index);
            }

        }
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (this.isAnagramNum(arr[i].toString(), arr[j].toString())) {
                    if (this.isPalimdrome2String(arr[i], arr[j])) {
                        console.log(arr[i], "  ", arr[j]);
                    }
                }
            }
        }
    },

/* Purpose : It is going to find the number that is between what we have to given to 
             user input.Here we have to fix the limit.it is going to generate the random numbers
             between the given limit.
*  @descriptipn: Declaring the function and passing the userinput as argument.
*  @function   : Diplayname takes the userinput and print it with some sentence.                    
*/ 
    findNumber(low, high) {
        var mid = low + Math.floor((high - low) / 2)
        console.log(mid)
        if (low < high) {
            if (low == high - 1) {
                var c;
                c = readline.question("Is the number " + low + " if yes, press 'y'. Else Press 'n' : ")
                if (c == 'y' )
                    return low;
                if (c == 'n' )
                    return high;
            }
            c = readline.question("Is the number " + mid + - +high + " if yes, press 'y'. Else Press 'n' : ")
            if (c == 'y')
                mid = this.findNumber(mid, high)
            if (c == 'n')
                mid = this.findNumber(low, mid - 1)
        }
        return mid;
    },


    // file call function   

    fileCall(path) {
        var fileStream = require('fs');
        var f = fileStream.readFileSync(path, 'utf8');
        var arr = f.split(' ');
        return arr;
    },

    //write filecall function
    writeFile(filename, Data) {
        const fs = require('fs');
        fs.writeFile(filename, Data, function (err) {
            if (err) {
                return console.log(err);
            }

        });
    },

    //create array function
    createArray(num) {
        var arr = [];
        for (let index = 0; index < num; index++)
            arr[index] = readline.questionInt("Enter the " + index + " element: ");
        return arr;
    },

    /*@Purpose : It is a insertion sort form sorting.it is going to sort a numbers or variable in
    *           the ascending and descending order.Taken input from the user.It is going 
    *           to check the next element.If it is bigger than this then it should be 
    *           swapped.  
    *@descriptipn: Declaring the function and passing the userinput as argument.
    *@function   : Diplayname takes the userinput and print it with some sentence.   
    */    
    insertionSort(arr) {
        
        for (let i = 0; i < arr.length; i++) {
            for (let j = i; j > 0; j--) {
                if (arr[j] < arr[j - 1]) {
                    var a= arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = a;
                }
            }
        }
        return arr;
    },

    /*@Purpose      : It is a bubble form sorting.it is going to sort a numbers or variable in
    *                the ascending and descending order.Taken input from the user.It is going 
    *                to check the next element.If it is bigger than this then it should be 
    *                swapped.
    * @descriptipn: Declaring the function and passing the userinput as argument.
    *  @function   : Diplayname takes the userinput and print it with some sentence.                    
    */   
    bubbleSort(arr) {
        
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < (arr.length - i - 1); j++) {
                if (arr[j] > arr[j + 1]) {  
                    var a = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = a;
                }
            }
        }
        return arr;
    },
/*       
* Purpose      : It is a mergesort form sorting.it is going to sort a numbers or variable in
                 the ascending and descending order.Taken input from the user.It is going to check the
                 next element.If it is bigger than this then it should be swapped.
*  @descriptipn: Declaring the function and passing the userinput as argument.
*  @function   : Diplayname takes the userinput and print it with some sentence.                    
*/  
    mergeSort(arr) {
        if (arr.length == 1) {
            return arr;
        }
        else {
        const m = Math.floor(arr.length / 2);
        const left = arr.slice(0, m); 
        const right = arr.slice(m);
        return this.merge(
            this.mergeSort(left),
            this.mergeSort(right)
        )
        }

    },

    merge(left, right) {
        let result = [];
        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {
            
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    },
/*
* Purpose     : It is going to generate the seperate and multiple amount based on our user
                requirements.it wil give in the seperate order.
* @descriptipn: Declaring the function and passing the userinput as argument.
* @function   : Diplayname takes the userinput and print it with some sentence.                    
*/   
    vendingMachine(amount, i, notes) {
        var arr = [1000, 500, 100, 50, 10, 5, 2, 1];
        if (amount == 0 && i == arr.length) {
            console.log("Total number of notes ", notes);
            return;
        }
        else if (Math.floor(amount / arr[i]) > 0) {
            console.log(arr[i] + " notes is " + Math.floor(amount / arr[i]));
            notes = notes + Math.floor(amount / arr[i]);
            amount = amount % arr[i];
           this.vendingMachine(amount, i + 1, notes);
            return;
        }
        this.vendingMachine(amount, i + 1, notes); 
    },
    /*
    * Purpose     : It is used to calculate the temperature based on our formulae.
    * @descriptipn: Declaring the function and passing the userinput as argument.
    * @function   : Diplayname takes the userinput and print it with some sentence.                    
    */ 

    temperaturConversion(temp, i) {
        var ctof, ftoc;
        if (i == 1) {
            ctof = (temp * 9 / 5) + 32;
            console.log("Converting temperature from celsius to fahreinheit:" + ctof);
        }
        if (i == 2) {
            ftoc = (temp - 32) * 5 / 9;
            console.log("Converting temperature from fahreinheit to celsius:" + ftoc);
        }
    },
/*
* Purpose      : It is used to calculate the EMI depends on formulae.
* @descriptipn : Declaring the function and passing the userinput as argument.
* @function    : Diplayname takes the userinput and print it with some sentence.                    
*/
    payment(p, y, r) {
        var n = 12 * y;
        var r1 = r / (12 * 100);
        var res = (p * r1) / (1 - Math.pow(1 + r1, (-n)));
        console.log("Payment is : " + res);
    },
/*
*Purpose : It is used to find the day of the week using formulas.
*@description ;Declaring the function and passing the three arguments as user input date,month,year. 
*@function  :Diplayname takes the userinput and print day of week logic 
*/    
    dayOfWeek(d, m, y) {
        var y0 = y - Math.floor((14 - m) / 12); 
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
		var m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
		var d0 = (d + x + Math.floor((31 * m0) / 12)) % 7;
		return d0;
    },
/*
*Purpose :It is used to find the square root of the of a nonnegative number c given in the input using Newton's method:
*@description: Declaring the function and passing the  argument as user input .
*@function :Dispaly the square root of the epsilson value.
*/
    // Newtons sqrt logic 
    sqrt(c) {
       
        if(c > 0){
            var t=c;
       var epsilon = 1e-15;
            while(Math.abs(t - c/t) > epsilon*t){
                t =(c/t+t)/2;
            }
            console.log("the sqrt of t is "+ t)
        }
        else{
            console.log("its not a valid input...")
        }
    },
/*
* Purpose      :It is used to generate the random numbers that should converted into 
*               Binary form.
* @descriptipn :Declaring the function and passing the userinput as argument.
* @function    :Diplayname takes the userinput and print it with some sentence.                    
*/    
    toBinary(num){
       var str = num.toString();
        console.log(str)
        var bin = (+str).toString(2);   
        var s=" ";
        console.log(bin);
        var j=bin.length-1;
        for(let i=0;i<bin.length;i++){
            var res=Math.floor(Math.pow(2,j));
            
            if(bin[i]==1){
            s=s+res+" + ";
            bin.length--;
            j--;
            }else{
            s=""+s;
            bin.length--;
            j--;
            }
            
        }
        console.log(s+"= "+num);
        
    },
  /*
* Purpose      :The binary (base 2) representation of the decimal number typed as the input.
* @descriptipn :Declaring the function and passing the userinput as argument.
* @function    :Diplayname takes the userinput and print it with corresponding number.                    
*/    

     swapNibble(bin) {
        return ((bin & 0x0F) << 4 | (bin & 0xF0) >> 4); 
    },
    decimalToBinary(str)
    {
        return str.toString(2);
    }

}
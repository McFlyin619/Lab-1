module.exports = {
    isEven: function(num) {
        var res = num % 2;
        return (res == 0);
    },
    isOdd: function(num) {
        var res = num % 2;
        return (res == 1);
    },
    greater: function(num1,num2) {
        if(num1 > num2) 
            return num1;
        
        return num2;
    },
    smaller: function(num1,num2) {
        if(num1 < num2)
            return num1;
        
        return num2;
    }  
};
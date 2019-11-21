module.exports = {
convertToBinary: function (quotient) {
    let binArray = [];
    let initNum = quotient;
    while(quotient>=1){
        if(quotient % 2 === 0){
            binArray.push("0");
        }
        else {
            binArray.push("1");
        }
        quotient = Math.floor(quotient/2);
    }

    let result = "";
    for(let i=binArray.length-1; i>=0; i--){
        result += binArray[i];
     }
      console.log(initNum + " in binary is " + result);
 },


    convertToHexa: function(num) {
	
	let hexadecimalString = '';
    let quotient = 0;
    let initNum2 = num;
	while(num >= 1) {

		quotient = num % 16;
		
		switch(quotient) {
			case 15: 
				hexadecimalString = 'F'+ hexadecimalString;
				break;
			case 14: 
				hexadecimalString = 'E' + hexadecimalString;
				break;
			case 13: 
				hexadecimalString = 'D' + hexadecimalString;
				break;
			case 12: 
				hexadecimalString = 'C' + hexadecimalString;
				break;
			case 11: 
				hexadecimalString = 'B' + hexadecimalString;
				break;
			case 10: 
				hexadecimalString = 'A' + hexadecimalString;
                break;
            case 9: 
				hexadecimalString = '9' + hexadecimalString;
                break;
            case 8: 
				hexadecimalString = '8' + hexadecimalString;
                break;
            case 7: 
				hexadecimalString = '7' + hexadecimalString;
                break;
            case 6: 
				hexadecimalString = '6' + hexadecimalString;
                break;
            case 5: 
				hexadecimalString = '5' + hexadecimalString;
                break;
            case 4: 
				hexadecimalString = '4' + hexadecimalString;
                break;
            case 3: 
				hexadecimalString = '3' + hexadecimalString;
                break;
            case 2: 
				hexadecimalString = '2' + hexadecimalString;
                break;
            case 1: 
				hexadecimalString = '1' + hexadecimalString;
                break;  
            case 0: 
				hexadecimalString = '0' + hexadecimalString;
                break;  
		}

		num = Math.floor(num/16);
        
	}
	
    console.log(initNum2 + " in hexadecimal is " + hexadecimalString);
    return hexadecimalString;
    
}

}





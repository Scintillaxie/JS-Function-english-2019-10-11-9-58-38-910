function palindrome(message){
// wirte your code here			 
	if(message.split('').reverse().join('') === message){
		console.log('true');
	}
	else{
		console.log('false');
	}
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true

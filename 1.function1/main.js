function reverseString(message){
	// wirte your code here
	var b = Array.from(message);
	console.log(b.reverse().join(""));
}
reverseString('hello'); // should return 'olleh'

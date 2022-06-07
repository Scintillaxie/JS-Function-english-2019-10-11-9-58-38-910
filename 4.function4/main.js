function countWords(message){
	// wirte your code here
	message = message.replace(/(^\s*)|(\s*$)/gi,"");
	message = message.replace(/[ ]{2,}/gi," ");
	message = message.replace(/\n /,"\n");
	console.log(message.split(' ').length);	   
}
countWords('Good morning, I love JavaScript.'); // should return 5

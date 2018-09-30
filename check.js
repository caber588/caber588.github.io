function check(){
	var msg = '';
	if(document.getElementById('account').value == ''){
		msg += '請輸入電子郵件或電話\n';		
	}
	if(document.getElementById('password').value == ''){
		msg += '請輸入密碼\n';		
	}
	 if(msg != ''){
		 alert(msg);		 
	 }	
}
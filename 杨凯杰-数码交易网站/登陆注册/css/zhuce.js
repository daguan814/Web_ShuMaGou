function $(id){
	return document.getElementById(id);
}
function login(){
	var admin=$("admin").value;
	var namer=$("namer").value;
	var phone=$("phone").value;
	var password=$("password").value;
                var passwords=$("passwords").value;
	if(admin=="114514"&&namer=="114514"&&phone=="123456789"&&password=="123"&&passwords=="123")
		window.open("../登陆注册/login.html");
}
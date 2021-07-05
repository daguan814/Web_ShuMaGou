function $(id){
	return document.getElementById(id);
}
function login(){
	var admin=$("admin").value;
	var password=$("password").value;
	if(admin=="114514"&&password==123)
		Window.location.href="../登陆后/loginindex.html"
}
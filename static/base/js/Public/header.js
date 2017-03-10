    //
	// var ms = $("#vip");
  	// var add = $("#_picture");
 	// ms.mouseenter(function(){
	//   	add.css("display",'block');
	//     ms.css("display",'none');
	// });
 	// add.mouseleave(function(){
	//   	add.css( "display",'none');
	//     ms.css("display",'block');
	// });
// var url = window.location.href;
// var itemChild = $('.NLast a');
// for (var i = 0; i < itemChild.length; i++) {
// 	if (url==itemChild[i].href.toString()) {
// 		$('#_first').removeAttr('id');
// 		$('.NLast')[i].id = "_first";
// 		break;
// 	}
// }
var url = window.location.href;
//var urlString2 = new Array('index','System','ItemShow','Course','SignUp');
var urlString = new Array('home','System','Project','Course','Signup');
for (var i = 0; i<urlString.length; i++){
	// alert('123');
	if (url.indexOf(urlString[i])>=0){
		$('#_first').removeAttr('id');
		$('.NLast a')[i].id = "_first";
		break;
	}
}
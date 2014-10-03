function toggleMenu(e){
	$.titleHolder.backgroundColor = "#777";
	setTimeout(function(){
		$.titleHolder.backgroundColor = "transparent";
		showSidePanel();
	},100);
}
var isAnimated = false;
function showSidePanel(){
	var t1 = Ti.UI.create2DMatrix();
	var animateIcon = Ti.UI.create2DMatrix();
	if(isAnimated == false){
		t1 = t1.translate(210 * (Ti.Platform.displayCaps.dpi / 160), 0);
		animateIcon = animateIcon.translate(-6 * (Ti.Platform.displayCaps.dpi / 160), 0);
		isAnimated = true;
	}else{
		t1 = t1.translate(-210 * (Ti.Platform.displayCaps.dpi / 160), 0);
		animateIcon = animateIcon.translate(0 * (Ti.Platform.displayCaps.dpi / 160), 0);
		isAnimated = false;
	}
	var a1 = Ti.UI.createAnimation();
	a1.transform = t1;
	a1.duration = 250;
	$.sideMenu.animate(a1);
	
	var a2 = Ti.UI.createAnimation();
	a2.transform = animateIcon;
	a2.duration = 250;
	$.menuImage.animate(a2);
	
}

function pageNavigation(e){
	Ti.API.info(e["itemIndex"]);
	showSidePanel();
	if(e["itemIndex"]==0){
		var indexWindow = Alloy.createController('index').getView();
 		indexWindow.open();
	}
}
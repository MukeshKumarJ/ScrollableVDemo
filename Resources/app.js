var baseWin = Titanium.UI.createWindow({
    title:'Window',
    borderRadius:7
});
var win = Titanium.UI.createWindow({
	url:'/ui/common/LoginView.js',
    title:'Window',
    //borderRadius:7
});

baseWin.add(win);

win.open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP});

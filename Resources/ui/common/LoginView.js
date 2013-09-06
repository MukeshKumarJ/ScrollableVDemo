var curWin = Ti.UI.currentWindow;

curWin.backgroundColor = '#ffffff';

var imageCollection = [
'http://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png',
'http://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png',
'http://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png',
'http://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png',
'http://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png',
'http://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png'
];

var scrollableView = Ti.UI.createScrollableView({
	showPagingControl:true,
  	maxZoomScale:5,
  	minZoomScale:1
});

curWin.add(scrollableView);

var viewCollection = [];
for (var i = 0; i < imageCollection.length; i++) {
var view = Ti.UI.createView({
  	backgroundColor:'yellow',
  	top:10,
  	bottom:10,
  	left:10,
  	right:10,
  	borderRadius:9,
  	borderColor:'#C2D1E0'
});
var img = Ti.UI.createImageView({
    maxZoomScale:5,
    image:imageCollection[i]
});
view.add(img);
viewCollection.push(view);
}
scrollableView.addEventListener('scroll', function(e){

});

scrollableView.addEventListener('scrollend', function(e){

});


scrollableView.views = viewCollection;

function loadViews(index)
{
    loadedViews = [];
    var selectedPage = 0;
    var i = 0;
 
    if(index > 0)
    {
        i = index - 1;
        var v1 = Titanium.UI.createView({index:i});
        addImageToView(v1, viewCollection[i]);
        loadedViews.push(v1);
        selectedPage = 1;
    }
 
        i = index;
        var v2 = Titanium.UI.createView({index:i});
        addImageToView(v2, viewCollection[i]);
        loadedViews.push(v2);
 
    if(index < viewCollection.length - 1)
    {
        i = index + 1;
        var v3 = Titanium.UI.createView({index:i});
        addImageToView(v3, viewCollection[i]);
        loadedViews.push(v3);
    }
    else
    {
        selectedPage = 1;
    }
 
    scroller.views = loadedViews;
    scroller.currentPage = selectedPage;
    lastView = loadedViews[scroller.currentPage];
}
 
function addImageToView(view, imageUrl)
{
   var imageView = Titanium.UI.createImageView({image:imageUrl});
   view.add(imageView);
}


var NS4DOM = (document.layers) ? true:false;
var IEDOM = (document.all) ? true:false;
var W3CDOM = (document.getElementById) ? true:false;


function getObject(id) {
	if (NS4DOM) ref="document."+id;
	else if (IEDOM) ref=id;
	else if (W3CDOM) ref="document.getElementById('"+id+"')";
	var object=eval(ref);
	return object;
}


function GetPage(loc) {
            var ext = loc.substring(loc.lastIndexOf("/"), loc.length);
            return ext;       
        }
		

var descImg="topRspacer";

function goPage(P) {
	parent.frames['mainFrame'].location.href=P + "a.htm";
	var pageDesc = new Image(561,100);
		pageDesc.src = 'images/' + P + 'desc.gif';
	parent.frames['topFrame'].document.desc.src=pageDesc.src;
	descImg = P + 'desc';
	window.focus();
}


var rollImg = "";
var rollExt = "";


var descPic = new Array();
	descPic['/auto1a.htm'] = 'auto1desc';


function overMe(img,ext) {
	var x="";
	if (ext=='j') x=".jpg";
	else if (ext=='g') x=".gif";
		
	var imgOver = new Image();
		imgOver.src = "images/" + img + "Over" + x;
	var imgDesc = new Image(561,100);
		imgDesc.src = "images/" + img + "desc.gif";
		document.images[img].src=imgOver.src;
		parent.frames['topFrame'].document.images['desc'].src=imgDesc.src;
		
		rollImg = img;
		rollExt = x;

var loc = new String(parent.mainFrame.location);
if (GetPage(loc)!=="/homea.htm") descImg = descPic[GetPage(loc)];		
}

function outMe() {
			
	var imgOver = new Image();
		imgOver.src = "images/" + rollImg + rollExt;
	var imgDesc = new Image(561,100);
		imgDesc.src = "images/" + descImg + ".gif";
		document.images[rollImg].src=imgOver.src;
		parent.frames['topFrame'].document.images['desc'].src=imgDesc.src;
}




function showIt(o) {
	getObject(o + 'Nav').style.height="";
	getObject(o + 'Sub').className="sub";
	
	openSub = o;
}

function hideIt(o) {
	getObject(o + 'Nav').style.height="38px";
	getObject(o + 'Sub').className="hideSub";
	openSub="";	
}

var openSub = "";

function showSub(o) {
if (openSub != "" && openSub != o) hideIt(openSub);

if (o != openSub) showIt(o);
else if (o == openSub) hideIt(o);

window.focus();
}
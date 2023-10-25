
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
	parent.frames['mainFrame'].location.href="auto" + P + "a.htm";
	var pageDesc = new Image(561,100);
		pageDesc.src = 'images/auto' + P + 'desc.gif';
	parent.frames['topFrame'].document.desc.src=pageDesc.src;
	descImg='auto' + P + 'desc';
}


var descPic = new Array();
	descPic['/auto1a.htm'] = 'auto1desc';


function overMe(F,img,ext) {
	
	var frm = "";
	var x = "";
		if (F=='t') frm = "topFrame";
		else if (F=='l') frm = "leftFrame";
		if (ext=='j') x = '.jpg';
		else if (ext=='g') x = '.gif';
		
	var imgOver = new Image();
		imgOver.src = "images/" + img + "Over" + x;
	var imgDesc = new Image(561,100);
		imgDesc.src = "images/" + img + "desc.gif";
		document.images[img].src=imgOver.src;
		document.images['desc'].src=imgDesc.src;

var loc = new String(parent.mainFrame.location);
if (GetPage(loc)!=="/home.htm") descImg = descPic[GetPage(loc)];		
}

function outMe(F,img,ext) {
	var frm = "";
	var x = "";
		if (F=='t') frm = "topFrame";
		else if (F=='l') frm = "leftFrame";
		if (ext=='j') x = '.jpg';
		else if (ext=='g') x = '.gif';
		
	var imgOver = new Image();
		imgOver.src = "images/" + img + "" + x;
	var imgDesc = new Image(561,100);
		imgDesc.src = "images/" + descImg + ".gif";
		document.images[img].src=imgOver.src;
		document.images['desc'].src=imgDesc.src;
}
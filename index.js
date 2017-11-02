/*
 * 
 *
 * 定义和编写函数
 * 函数列表：named() searchElements() unfoldElements()
 *        createElement() deleteElements()
 * 
 * 
 */
function named(){
	var name=prompt("请输入节点名称");
	var names="新建节点";
	if(name=="")
	{
		return names;
	}
	else return name;
}

function creatFirElement(a){
	var firstnav=document.createElement("ul");
	firstnav.setAttribute("class","firnav");
	var onav=document.createElement("ul");
	onav.setAttribute("class","nav");
	var navlist=document.createElement("li");
	navlist.setAttribute("class","nav-down");
	var listname=document.createElement("span");
	var listunfold=document.createElement("a");
	listunfold.setAttribute("class","unfold");
	listunfold.setAttribute("href","#");
	listunfold.setAttribute("onclick","unfoldElements(this)");
	var listfold=document.createElement("a");
	listfold.setAttribute("class","fold");
	listfold.setAttribute("href","#");
	listfold.setAttribute("onclick","foldElements(this)");
	var listdelete=document.createElement("a");
	listdelete.setAttribute("class","delete");
	listdelete.setAttribute("href","#");
	listdelete.setAttribute("onclick","deleteElements(this)");
	var listadd=document.createElement("a");
	listadd.setAttribute("class","addnode");
	listadd.setAttribute("href","#");
	listadd.setAttribute("onclick","createElements(this)");
	var tree=document.getElementById("tree");
	listname.innerHTML=named();
	tree.insertBefore(firstnav,a);
	tree.childNodes[tree.childNodes.length-2].appendChild(navlist);
	var trees=tree.childNodes[tree.childNodes.length-2];
	trees.childNodes[0].appendChild(listname);
	trees.childNodes[0].appendChild(listdelete);
	trees.childNodes[0].appendChild(listunfold);
	trees.childNodes[0].appendChild(listfold);
	trees.childNodes[0].appendChild(listadd);
}

function createElements(a){
	var firstnav=document.createElement("ul");
	firstnav.setAttribute("class","firnav");
	var onav=document.createElement("ul");
	onav.setAttribute("class","nav");
	var navlist=document.createElement("li");
	navlist.setAttribute("class","nav-down");
	var listname=document.createElement("span");
	var listunfold=document.createElement("a");
	listunfold.setAttribute("class","unfold");
	listunfold.setAttribute("href","#");
	listunfold.setAttribute("onclick","unfoldElements(this)");
	var listfold=document.createElement("a");
	listfold.setAttribute("class","fold");
	listfold.setAttribute("href","#");
	listfold.setAttribute("onclick","foldElements(this)");
	var listdelete=document.createElement("a");
	listdelete.setAttribute("class","delete");
	listdelete.setAttribute("href","#");
	listdelete.setAttribute("onclick","deleteElements(this)");
	var listadd=document.createElement("a");
	listadd.setAttribute("class","addnode");
	listadd.setAttribute("href","#");
	listadd.setAttribute("onclick","createElements(this)");
	var now=a;
	var par=now.parentNode;
	listname.innerHTML=named();
	par.appendChild(onav);
	onav.appendChild(navlist);
	onav.childNodes[0].appendChild(listname);
	onav.childNodes[0].appendChild(listdelete);
	onav.childNodes[0].appendChild(listunfold);
	onav.childNodes[0].appendChild(listfold);
	onav.childNodes[0].appendChild(listadd);
}

function deleteElements(a){
	var par=a.parentNode;
	var grapar=par.parentNode;
	var grandpar=grapar.parentNode;
	grapar.removeChild(par);
	grandpar.removeChild(grapar);
}

function unfoldElements(a){
	var par=a.parentNode;
	for(var i=5;i<par.childNodes.length;i++)
	{
		par.childNodes[i].style.display="block";
	}
}

function foldElements(a){
	var par=a.parentNode;
	for(var i=5;i<par.childNodes.length;i++)
	{
		par.childNodes[i].style.display="none";
	}
}

function searchElements(){
	var word=document.getElementById("sear").value;
	var searlist=document.getElementsByTagName("li");
	alert(searlist.length);
	for (var i=0,j=0;i<searlist.length;i++)
	{
		var name=searlist[i].childNodes[0].innerHTML;
		var par=searlist[i].parentNode;
		var grapar=par.parentNode;
		if(name==word)
		{
			searlist[i].setAttribute("class","selected");
			par.style.display="block";
			for(var i=5;i<grapar.childNodes.length;i++)
				grapar.childNodes[i].style.display="block";
			j++;
		}
	}
	if(j==0)	alert("节点不存在");
}

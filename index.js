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

function creatFirElement(ele){
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
	listname.innerHTML=named();
	var tree=document.getElementById("tree");
	tree.insertBefore(firstnav,ele);
	tree.childNodes[tree.childNodes.length-2].appendChild(navlist);
	var trees=tree.childNodes[tree.childNodes.length-2];
	trees.childNodes[0].appendChild(listname);
	trees.childNodes[0].appendChild(listdelete);
	trees.childNodes[0].appendChild(listunfold);
	trees.childNodes[0].appendChild(listfold);
	trees.childNodes[0].appendChild(listadd);
}

function createElements(ele){
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
	var now=ele;
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

function deleteElements(ele){
	var par=ele.parentNode;
	var grapar=par.parentNode;
	var grandpar=grapar.parentNode;
	grapar.removeChild(par);
	grandpar.removeChild(grapar);
}

function unfoldElements(ele){
	var par=ele.parentNode;
	for(var i=5;i<par.childNodes.length;i++)
	{
		par.childNodes[i].style.display="block";
	}
}

function foldElements(ele){
	var par=ele.parentNode;
	for(var i=5;i<par.childNodes.length;i++)
	{
		par.childNodes[i].style.display="none";
	}
}

function fold(ele){
	if(ele.length!==undefined)
	{
		for(var i=0;i<ele.length;i++)
		{
			var note=ele[i].parentNode;
			if(note.getAttribute("id")!=="tree")
			{
				note.style.display="block";
				fold(note);
			}
		}
	}
	else
	{
		var note=ele.parentNode;
		if(note.getAttribute("id")!=="tree")
		{
			note.style.display="block";
			fold(note);
		}
	}
}

function searchElements(){
	var word=document.getElementById("sear").value;
	var searlist=document.getElementsByTagName("li");
	for (var i=0,j=0;i<searlist.length;i++)
	{
		var name=searlist[i].childNodes[0].innerHTML;
		if(name==word)
		{
			searlist[i].setAttribute("class","selected");
			j++;
		}
	}
	var nodes=document.getElementsByClassName("selected");
	fold(nodes);
	if(j==0)	alert("节点不存在");
}

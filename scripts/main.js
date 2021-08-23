let ScrollElements = document.querySelectorAll(".btn-item");
let IdArr = [0,840,1400,2200,4000]
function RemoveBackground(item){
	item.classList.remove("btn-clicked");
}

function addBackground(item) {
	item.classList.add("btn-clicked");
}

function GetElementIndex(nodelist) {
for(let e = 0 ; e < nodelist.length ; e++) {
	nodelist[e].addEventListener('click', function() {
    window.scrollTo( 0,IdArr[e]);
  });
}
}

function ChangeBackground() {
	/*change items classes to default*/
	ScrollElements.forEach(item => {
	RemoveBackground(item);
	})
	/*add class for clicked item*/
	addBackground(this);
	/*Move to page item*/
	GetElementIndex(ScrollElements);
}
ScrollElements.forEach(item => {
	item.addEventListener("click",ChangeBackground);
})

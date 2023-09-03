
var bucketList = []

var listContainer = document.querySelector("#list-container")


function addValues() {
    //taking inputs from input field
    var value = document.getElementById("input-field").value
    //pushing it inside the array - bucketList
    bucketList.push(value)
    displayList()
}

function displayList() {
// clearing the pervious list
    listContainer.innerHTML = ""
    for (let i = 0; i < bucketList.length; i++){
        var li = document.createElement("li") 
        li.innerHTML = bucketList[i] + `<span class="checked" onclick=remove(`+i+`)> <img class="checked" src="https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png"></span>`;
        li.className="list"
        //inserting the element into the #list-container
        listContainer.append(li)

        

    }
}


function reset() {

    //empty the array
    bucketList = []
    //after emptying the list we are displaying that in the #list-container
    displayList()
}

function remove(idx) {
    bucketList.splice([idx], 1);
    displayList();
    
}
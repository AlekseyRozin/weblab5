let leftButton = document.querySelector(".align-left-button");


leftButton.addEventListener('dblclick', (e) => {
    let index = window.innerWidth < 900 ? 0 : 1;
    if(document.getElementsByClassName('third')[index].checked){
        document.querySelector('.three').style.textAlign = 'left';
        document.querySelector('.three').style.alignItems = "start";
        console.log('sd');
        localStorage.setItem(3,true);
    }
    if(document.getElementsByClassName('fourth')[index].checked){
        document.querySelector('.main-right').style.alignItems = "start";
        document.querySelector('.main-right ul').style.padding = "0px";
        localStorage.setItem(4,true);
    }
    if(document.getElementsByClassName('fifth')[index].checked){
        document.querySelector('.five').style.textAlign = 'left';
        localStorage.setItem(5,true);
    }
});

function swap(){
  let fourClass = window.innerWidth < 900 ? "#myLinks" : ".main-right",
      four = document.querySelector(fourClass),
      five = document.querySelector(".five"),
      temp = four.innerHTML;

  four.innerHTML = five.innerHTML;
  five.innerHTML = temp;
}

function area(){
  let a = prompt("Введите параметр а овала", 0);
      b = prompt("Введите параметр b овала", 0),
      res = (a*b*Math.PI).toFixed(2),
      three = document.querySelector(".three");

  three.innerHTML += res;
}

function countWords(){
    let area = document.querySelector(".myTextArea");
    if(area.style.display === 'none'){
        alert('Textarea isn\'t available since u didn\'t delete the cookies');
        return;
    }

    let text = area.value;
    if(text === ""){
        alert("Empty text!");
        return;
    }
    let wordsCount = text.trim().split(' ').length;

    alert("Amount of words in textarea: " + wordsCount);
    let cookieStr = "words=" + wordsCount;
    document.cookie = cookieStr;
}

function toggleBurger() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
      x.style.display = "none";
  } else {
      x.style.display = "flex";
  }
  console.log("sas");
}

function dataLoad(){
    if(localStorage.getItem(3)){
        document.querySelector('.three').style.textAlign = 'left';
    }
    if(localStorage.getItem(4)){
        document.querySelector('.main-right').style.alignItems = "start";
        document.querySelector('.main-right ul').style.padding = "0px";
    }
    if(localStorage.getItem(5)){
        document.querySelector('.five').style.textAlign = 'left';
    }
    let area = document.querySelector(".myTextArea");
    if (document.cookie){
        let message = "Cookie: " + document.cookie + "\nDelete cookie?";
        let ans = confirm(message);
        if (ans){
            document.cookie = "words=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            area.style.display = 'block';
        } else {
            alert("Cookie not deleted. You need to reload the page!");
            area.style.display = 'none';
        }
    } else {
      area.style.display = 'block';
    }
}


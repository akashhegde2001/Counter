let count_el=document.getElementById("cnt")
let saveel = document.getElementById("save-el")
let errorel=document.getElementById("error")
let count=0;
function incr(){
    console.log("Clicked")
    count=count+1
    count_el.innerText=count
}
function dec(){
    console.log("Clicked")
    count=count-1
    count_el.innerText=count
}

function save(){
    if(count!=0){
    let countstr=" "+count + " - "
    saveel.innerText+=countstr
    count_el.innerText=0
    console.log(count);
    count=0;
}

}


let well=document.getElementById("wlcm")
let name="Akash Hegde"
let greet="Welcome back "

well.innerText=greet + name


let inputField = document.getElementById("inputField");
let addButton  = document.getElementById("addButton");
let container  = document.getElementById("flex-container");
let inputFieldFlex = document.getElementById("inputField-Flex");
let list       = document.getElementsByClassName("list");
let btnAddFieldOuter = document.getElementById("btnAddField-outer");
let addTaskField = document.getElementById("addTaskField");
let btnCancelFieldOuter = document.getElementById("btnCancelField-outer");
let headingFlex = document.getElementById("heading-flex");
let btnAddFieldOuterBack =document.getElementById("btnAddField-outer-back");
var index=999;
let childrens =1;
let flag =false;
// debugger;
// let removingID =null;
let arrobj=[];
let mini =[];
btnAddFieldOuterBack.addEventListener("click",function(){
    flag=false;
    btnAddFieldOuterBack.style.display ="none";
    headingFlex.style.display = "none";
    container.style.justifyContent="space-between";
    heading.style.display="inline-block";
    for(let i=0;i<arrobj.length;i++){
        arrobj[i].style.display="inline-block";
    }
});
btnAddFieldOuter.addEventListener("click",function(){
    document.getElementById("blur").style.cssText=`opacity: 0.7;filter: blur(2px);`;
    addTaskField.style.display="inline-block";
    if(flag==true){  /// we are in the index2 page
        // code to redirect from index2 page to index page...
        flag=false;
        btnAddFieldOuterBack.style.display ="none";
        headingFlex.style.display = "none";
        container.style.justifyContent="space-between";
        heading.style.display="inline-block";
        for(let i=0;i<arrobj.length;i++){
            arrobj[i].style.display="inline-block";
        }
    }
});

addButton.addEventListener("click",function(){


    let uniId = Date.now();
    let flexItems = document.createElement("div");
    flexItems.className="flex-items";
    flexItems.id= uniId*2;
    flexItems.innerHTML = 
    `<div class="flex-items-heading" id=${uniId}>
    ${inputField.value}
    </div>
    <hr id="TaskListHr">
    <div class="flex-items-taskList">
        <ol class="list">
        </ol>
    </div>
    <div class="flex-items-footer" id=${childrens}>
        <button ><i class="fa-solid fa-circle-plus icon add"></i></button>
        <button ><i class="fa-regular fa-trash-can delete"></i></button>
    </div>`;
    console.log("flexItems",flexItems);
    
    // container.appendChild(flexItems);

    arrobj.push(flexItems);
    
    for(let i=0;i<arrobj.length;i++){
        // console.log("arrobj",arrobj[i]);
        container.appendChild(arrobj[i]);
    }

    document.getElementById("noItems").style.display="none";
    console.log("arrobj ",arrobj[0].id);
    
    let flexItemsHeading = document.getElementById(uniId);
 
    flexItemsHeading.addEventListener("click",function(event){
        flag=true;
        // container.style.display="none";
        // console.log("outside",arrobj);
        // let showData = document.getElementById("showData");
        // showData.style.display = "inline-block";
        // showData.appendChild(event.target.parentElement);
        // removingID = event.target.parentElement.id;
        // (function(childElement){
        //     setTimeout(function(){
                
        //         showData.removeChild(childElement);
        //         console.log("inside",showData.childNodes);
        //         showData.style.display = "none";
        //         for(let i=0;i<arrobj.length;i++){
        //             container.appendChild(arrobj[i]);
        //         }
        //         container.style.display="flex";
        //     },10000);
        // })(event.target.parentElement);
        container.style.justifyContent="center";
        btnAddFieldOuterBack.style.display ="inline-block";
        let currentID= event.target.parentElement.id;
        headingFlex.innerText= event.target.innerText;
        heading.style.display="none";
        for(let i=0;i<arrobj.length;i++){
            if(arrobj[i].id==currentID){
                continue;
            }else{
                arrobj[i].style.display="none";
            }
        }


    });
    let addbtn = document.getElementById(childrens);
    addbtn.addEventListener("click",function(event){

        console.log("event.target.innerText==<i class="+"fa-solid fa-circle-plus icon">+"</i> Add items", event.target.parentElement.innerHTML);
        let addBtnstr =  "<i class="+"\"fa-solid fa-circle-plus icon add"+"\"></i>";
        let deletBtnstr =  "<i class="+"\"fa-regular fa-trash-can delete"+"\"></i>";
        console.log("addBtnstr, ",addBtnstr);
        if(event.target.parentElement.tagName=="BUTTON" && event.target.parentElement.innerHTML==addBtnstr){
            console.log("event.target.parentElement.parentElement.id ",event.target.parentElement.parentElement.id);
            let li = document.createElement("li");

            let addTaskFieldFlex = document.getElementById("addTaskField-flex");
            
            addTaskFieldFlex.style.display="inline-block";
            
            let btnAddFieldFlex = document.getElementById("btnAddField-Flex");
            console.log(event.target.parentElement.parentElement.id);
            mini.push(event.target.parentElement.parentElement.id-1);
            btnAddFieldFlex.addEventListener("click",function(){
                console.log("event.target.parentElement.parentElement.id ",event.target.parentElement.parentElement);
                let li = document.createElement("li");
                li.innerHTML = `<span class="span">${inputFieldFlex.value}</span> <button id=${index}>Mark complete</button>`;
                if(inputFieldFlex.value!=" "){
                    list[mini[mini.length-1]].appendChild(li);
                    index++;
                }
                
                inputFieldFlex.value=" ";
                addTaskFieldFlex.style.display="none"
                let markbtn = document.getElementById(index-1);
                markbtn.addEventListener("click",function(event1){
                            console.log("event1.target.parentElement.firstChild.text ",event1.target.parentElement.firstElementChild.innerText);
                            // console.log("event.target.parentElement.firstChild.text ",event.target.parentElement.firstElementChild.innerText);
                            event1.target.parentElement.firstElementChild.style.textDecoration = "line-through";
                            event1.target.parentElement.firstElementChild.style.color = "Red";
                            event1.target.parentElement.removeChild(event1.target.parentElement.children[1]);

                            return;
                });
            });

            
        }else if(event.target.parentElement.tagName=="BUTTON" && event.target.parentElement.innerHTML==deletBtnstr){
            // event.target.parentElement.parentElement.remove();
            for(let i=0;i<arrobj.length;i++){
                if(event.target.parentElement.parentElement.parentElement.id==arrobj[i].id){
                    arrobj.splice(i,1);
                    break;
                }
            }
            if(arrobj.length<=0){
                document.getElementById("noItems").style.display="inline-block";
            }
            event.target.parentElement.parentElement.parentElement.style.display="none";
        }

        // index++;

    });



   
    
    // let addbtn     = document.getElementsByClassName("addbtn");
    // console.log(addbtn);
    // for (let i = 0; i < addbtn.length; i++) {
        
    //     addbtn[i].addEventListener("click", function (event) {
    //         // console.log(event.target.parentElement.parentElement.parentElement.children);
    //         index = [...event.target.parentElement.parentElement.parentElement.children].indexOf(
    //             event.target.parentElement.parentElement);
    //         console.log(index);
    //         let li = document.createElement("li");
    //         li.innerText=inputFieldFlex.value;
    //         list[index].appendChild(li);
            
    //     });
    //     // console.log(index);
    // }
    // index++;
    inputField.value=" ";
    addTaskField.style.display="none"; 
    document.getElementById("blur").style.cssText=`opacity: 1;filter: blur(0);`;
    childrens++;
});

btnCancelFieldOuter.addEventListener("click",function(){
    inputField.value=" ";
    addTaskField.style.display="none"; 
    document.getElementById("blur").style.cssText=`opacity: 1;filter: blur(0);`;
});


(function(){
    console.log("IIFA");
    if(arrobj.length==0 && flag==false){
        document.getElementById("noItems").style.display="inline-block";
    }
})();


// function testAdd(event){

//     let ioField = document.getElementById("ioField");

//     ioField.style.display="inline-block"
  
//     let btnAddFieldFlex = document.getElementById("btnAddField-Flex");

//     btnAddFieldFlex.addEventListener("click",function(){
//         console.log("event.target.parentElement.parentElement.id ",event.target.parentElement.parentElement);
//         let li = document.createElement("li");
//         li.innerHTML = `<span class="span">${inputFieldFlex.value}</span> <button id=${index}>Mark complete</button>`;
//         if(inputFieldFlex.value!=" "){
//             list[event.target.parentElement.parentElement.id-1].appendChild(li);
//             index++;
//         }
       
//         inputFieldFlex.value=" ";
//         ioField.style.display="none"
//     });


    
// }


// console.log("event.target.parentElement.parentElement.id ",event.target.parentElement.parentElement.id);
// let li = document.createElement("li");
// // let index = list[event.target.parentElement.parentElement.id-1].children.length;
// // console.log("index ",index);
// li.innerHTML = `<span class="span">${inputFieldFlex.value}</span> <button id=${index}>Mark complete</button>`;

// // li.innerText=inputFieldFlex.value;
// list[event.target.parentElement.parentElement.id-1].appendChild(li);

// let markbtn = document.getElementById(index);
// markbtn.addEventListener("click",function(event1){
//     console.log("event.target.parentElement.firstChild.text ",event1.target.parentElement.firstElementChild.innerText);
//     event1.target.parentElement.firstElementChild.style.textDecoration = "line-through";
// });


// function markbtncall(event){
//     console.log("Markbtncall =event.target.parentElement.firstChild.text ",event.target.parentElement.firstElementChild.innerText);
//     let markbtn = document.getElementById(index);
//     markbtn.addEventListener("click",function(event1){
//         console.log("event1.target.parentElement.firstChild.text ",event1.target.parentElement.firstElementChild.innerText);
//         // console.log("event.target.parentElement.firstChild.text ",event.target.parentElement.firstElementChild.innerText);
//         event1.target.parentElement.firstElementChild.style.textDecoration = "line-through";
//     });
// }
const body = document.body;
const createScript = document.createElement("script");
const createScript2 = document.createElement("script");
const createScript3 = document.createElement("script");
const select_uni = document.querySelector("select");
const options_header = document.querySelector('.options_header');
const options = document.querySelector('.options');
select_uni.value = localStorage.getItem("branch");
function set(file) {
    const select = document.querySelector("select");

    localStorage.setItem("branch",file);
    localStorage.setItem("firstrun", true);
    location.reload();
}

if (!(localStorage.getItem("branch"))) {
options.innerHTML = "<div style = 'font-size:1rem' class = 'op active'>Welcome to CR Works!</div>";
    options_header.style.display = "none";
    document.getElementById("body_head").textContent = "Select Your Branch";
    const addTo = document.getElementById("classes");
    addTo.innerHTML="";
    addTo.insertAdjacentHTML("beforeend", `
    <div onclick = "set('cser.js')"style = "text-align:center;cursor:pointer;" class = "class"><img style = "width:1.1rem; vertical-align:text-top" src = "cser.png"> CSE R</div>
    <div onclick = "set('ee.js')"style = "text-align:center;cursor:pointer;" class = "class"><img style = "width:1.1rem; vertical-align:text-top" src = "ee.png"> Electrical</div>
    <div onclick = "set('me.js')" style = "text-align:center;cursor:pointer" class = "class"><img style = "width:1.1rem;vertical-align:text-top" src = "me.png"> Mechanical</div>
`)
}
function changeFunc() {
    const selectBox = document.querySelector("select");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    return selectedValue;
   }
if (localStorage.getItem("branch") == "cser.js") {
    body.append(createScript);
    createScript.addEventListener("load", ()=>{
        createScript2.setAttribute("src","script.js");
        body.append(createScript2);
        body.append(createScript3);
        createScript3.setAttribute("src", "cser_student.js")
    })
    createScript.setAttribute("src",localStorage.getItem("branch"));
    
}
if (localStorage.getItem("branch") == "me.js") {
    body.append(createScript);
    
    createScript.addEventListener("load", ()=>{
        createScript2.setAttribute("src","script.js?version='6.9'");
        body.append(createScript2);
    })
    createScript.setAttribute("src",localStorage.getItem("branch"));
    
}
if (localStorage.getItem("branch") == "ee.js") {
    body.append(createScript);
    
    createScript.addEventListener("load", ()=>{
        createScript2.setAttribute("src","script.js?version='6.9'");
        body.append(createScript2);
    })
    createScript.setAttribute("src",localStorage.getItem("branch"));
    
}
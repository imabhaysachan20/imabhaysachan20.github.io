let filtered_list=[];
const popup_container = document.querySelector(".popup_container");
const debouncedsearch = debounce(searchlistfunc,300);
const popup_body = document.querySelector(".popup_body");
const popup_heading_text = document.querySelector(".popup_heading_text");
const branch = localStorage.getItem("branch").split(".")[0].toUpperCase();
let popup_menu_default;
async function list_popup(e) {
    // document.querySelector('img[alt="www.000webhost.com"]').style.display="none";
    await new Promise(()=>{popup_container.classList.toggle("show");
    if (popup_menu_default) {
        popup_body.innerHTML = popup_menu_default;
        popup_heading_text.textContent = "Lists";
    }}
    )
}

async function show_list(listname,id) {
        popup_menu_default = popup_body.innerHTML;
        popup_body.innerHTML="";
        popup_heading_text.textContent = listname;
        await new Promise((r)=>{popup_body.innerHTML += `<form action="#" class="list-search-form">
        <img src="search.png">
        <div style="width: 100%;" class="form-input">
        <input id = "searchlist" type="text" placeholder="Search Rollno/Name">
    </div>
        <div style="margin-left: auto;" class="form-input">
        <select onchange = "list_filter()" id = "selectlist" placeholder = "A">
            <option value = "list-filter-default">Filters</option>
            <option value = "sec1">Section1</option>
            <option value = "sec2">Section2</option>
            <option value = "f">Girls Only</option>
            <option value = "m">Boys Only</option>
        </select>
    </div>
        
    </form>`
        const container = document.createElement("div");
        container.setAttribute("class", "class list_contain");
        let elem = `<div class="class"><span>Rollno <input onchange = "fullroll()" id = "fullroll" type = "checkbox" checked><small><label for = "fullroll">(Full RollNo)</label></small></span><span>Name</span></div>`
            container.innerHTML+=elem;
        for (student of cser_students) {
            let Rollno = student.Rollno;
            let Name=  student.Name;
            let elem = `<div class="class"><span>${Rollno}<img onclick=copyroll("${Rollno.slice(11)}") style="margin-left:3px;cursor:pointer" width="10px" src ="copy.png"></span><span>${Name}</span></div>`
            container.innerHTML+=elem;
        }
        popup_body.append(container);
        const searchlist = document.getElementById("searchlist");
        searchlist.addEventListener("input", debouncedsearch);
    r()})
}
async function copyroll(rollno) {
    await new Promise((r)=>{
        const copytext = cser_students[rollno-1].Rollno;
        let img;
        for (elem of document.querySelectorAll(".class span img")) {
            if (elem.parentNode.textContent.slice(11)==rollno){
                img = elem;
            }
        }
        navigator.clipboard.writeText(copytext).then(function() {
            popup_alert(`${cser_students[rollno-1].Name}'s <b>FULL Rollno copied!</b>`)});
            img.setAttribute("src", "copied.png");
    })
}
async function fullroll() {
    await new Promise((r)=>{const checkbox = document.getElementById("fullroll");
    if (!checkbox.checked) {
    for (elem of document.querySelectorAll(".class span:first-child")) {
        if (elem == document.querySelectorAll(".class span:first-child")[0]) {
            continue;
        }
        elem.innerHTML = elem.innerHTML.slice(11);
    }}
    else {
     {
        if (filtered_list) {
            let count = 0;
            for (elem of document.querySelectorAll(".class span:first-child")) {
                if (elem == document.querySelectorAll(".class span:first-child")[0]) {
                    continue;
                }
                elem.innerHTML = filtered_list[count].Rollno+`<img onclick=copyroll("${filtered_list[count].Rollno.slice(11)}") style="margin-left:3px;cursor:pointer" width="10px" src ="copy.png">`;
                count++;
            }}
        else{
        show_list(popup_heading_text.textContent);
        }
    }
}});
}
function list_filter() {
    document.querySelector(".list-search-form option").textContent="None";
    const select = document.getElementById("selectlist");
    const list_contain = document.querySelector(".list_contain");
    list_contain.innerHTML="";
    let elm = `<div class="class"><span>Rollno <input onchange = "fullroll()" id = "fullroll" type = "checkbox" checked><small><label for = "fullroll">(Full RollNo)</label></small></span><span>Name</span></div>`
            list_contain.innerHTML+=elm;
    switch(select.value) {
        case "f":
            filtered_list=[];
                for (x of cseinfo.get(cser_students).female) {
                    filtered_list.push(cser_students[x-1]);
                    }
            for (x of filtered_list) {
                let student = x;
                let Rollno = student.Rollno;
                let Name=  student.Name;
                let elem = `<div class="class"><span>${Rollno}<img onclick=copyroll("${Rollno.slice(11)}") style="margin-left:3px;cursor:pointer" width="10px" src ="copy.png"></span><span>${Name}</span></div>`
                list_contain.innerHTML+=elem;
            }
            popup_alert(`found ${filtered_list.length} record(s)`)
            break;
        case "m":
            filtered_list=[];
            filtered_list = cser_students.filter((obj)=>{
                for (x of cseinfo.get(cser_students).female) {
                    if (obj.Rollno.slice(11)==x){
                        return false;
                    }
                }
                return true;
            })
            for (x of filtered_list) {
                let student = x;
                let Rollno = student.Rollno;
                let Name=  student.Name;
                let elem = `<div class="class"><span>${Rollno}<img onclick=copyroll("${Rollno.slice(11)}") style="margin-left:3px;cursor:pointer" width="10px" src ="copy.png"></span><span>${Name}</span></div>`
                list_contain.innerHTML+=elem;
            }
            popup_alert(`found ${filtered_list.length} record(s)`)
            break;
        case "list-filter-default":
            filtered_list= [];
            show_list(popup_heading_text.textContent);
            break;
        case "sec1":
            filtered_list=[]
            filtered_list = cser_students.filter((obj)=>{
                return (obj.Rollno.slice(11)<=""+cseinfo.get(cser_students).Section2);
            })
            for (x of filtered_list) {
                let student = x;
                let Rollno = student.Rollno;
                let Name=  student.Name;
                let elem = `<div class="class"><span>${Rollno}<img onclick=copyroll("${Rollno.slice(11)}") style="margin-left:3px;cursor:pointer" width="10px" src ="copy.png"></span><span>${Name}</span></div>`
                list_contain.innerHTML+=elem;
            }
            popup_alert(`found ${filtered_list.length} record(s)`);
        break;
        case "sec2":
            filtered_list=[]
            filtered_list = cser_students.filter((obj)=>{
                return (obj.Rollno.slice(11)>""+cseinfo.get(cser_students).Section2);
            })
            for (x of filtered_list) {
                let student = x;
                let Rollno = student.Rollno;
                let Name=  student.Name;
                let elem = `<div class="class"><span>${Rollno}<img onclick=copyroll("${Rollno.slice(11)}") style="margin-left:3px;cursor:pointer" width="10px" src ="copy.png"></span><span>${Name}</span></div>`
                list_contain.innerHTML+=elem;
            }
            popup_alert(`found ${filtered_list.length} record(s)`);
        break;
        }

        }
function debounce(func,time) {
    let timeid;
    return function(...args) {
        if(timeid) {
            clearTimeout(timeid);
        }
        timeid = setTimeout(()=>{
        func.call(this,...args)},time);
    }
}
function searchlistfunc(e) {
    key = e.target.value.toLowerCase();
    if (key) {
    filtered_list=[];
    const list_contain = document.querySelector(".list_contain");
    list_contain.innerHTML="";
    let elm = `<div class="class"><span>Rollno <input onchange = "fullroll()" id = "fullroll" type = "checkbox" checked><small><label for = "fullroll">(Full RollNo)</label></small></span><span>Name</span></div>`
    list_contain.innerHTML+=elm;
    let alphakey = key.match(/[a-z]+/gi)?key.match(/[a-z]+/gi).join():null;
    let numkey = key.match(/\d+/g) ? key.match(/\d+/g).join() : null;
    for (x of cser_students) {
        if ((x.Rollno.includes(numkey)) || x.Name.toLowerCase().includes(alphakey)) {
            filtered_list.push(x);
        }
    }
    for (x of filtered_list) {
        let student = x;
        let Rollno = student.Rollno;
        let Name=  student.Name;
        let elem = `<div class="class"><span>${Rollno}<img onclick=copyroll("${Rollno.slice(11)}") style="margin-left:3px;cursor:pointer" width="10px" src ="copy.png"></span><span>${Name}</span></div>`
        list_contain.innerHTML+=elem;
    }
    setTimeout(()=>{popup_alert(`${filtered_list.length} records found`)},500);
    if (filtered_list.length==0) {
        popup_body.firstElementChild.nextElementSibling.textContent= "No Matching Results";
    }
}
else {
    show_list(popup_heading_text.textContent);
    const searchbar = document.getElementById("searchlist");
    searchbar.focus();
}
}

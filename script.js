let scrollOff = window.scrollY;
window.addEventListener("scroll", ()=>{
    if (window.scrollY < scrollOff) {
        
        document.getElementsByClassName('btn-list')[0].style.animationName = "appear";
        document.getElementsByClassName('btn-list')[0].style.display = "inline-block";
    }
    else {
        document.getElementsByClassName('btn-list')[0].style.animationName = "disapper";
        
        
    }
    scrollOff = window.scrollY;
})
let days = ["Monday", "Tuesday","Wednusday", "Thusrsday", "Friday", "Saturday"];
let bool_delete_mode = false;
let bool_edit_mode = false;
const d = new Date();
let day = d.getDay();
function exe(day, type) {
    bool_delete_mode = false;
        bool_edit_mode = false;
    document.getElementsByClassName("options_header")[0].children[1].style.opacity = 0.3;
    
    document.getElementsByClassName("options_header")[0].children[2].style.opacity = 0.3;
    document.getElementById('classes').innerHTML="";
    if (day>6 || day ==0) {
        document.getElementById('classes').innerHTML="Sunday Hai No Class";
    }
    if (type =="week") {
        document.getElementById('body_head').innerHTML = `${days[day-1]} Classes` ;   
    }
    if (type=="tod") {
    document.getElementsByClassName('active')[0].setAttribute('class', 'op');
        document.getElementsByClassName('op')[1].setAttribute('class', 'op active');
        document.getElementById('body_head').innerHTML = "Today's Class";        
    }

    if (type=="tom") {
    document.getElementsByClassName('active')[0].setAttribute('class', 'op')
        document.getElementsByClassName('op')[0].setAttribute('class', 'op active');
        document.getElementById('body_head').innerHTML = "Tomorrow's Classes";}
    
    if (day == 1) {
        for (let i = 0; i<monday.length;i++) {
            
            createNewClass(monday[i].Subject_Name,monday[i].Time_Start,monday[i].Time_End,monday[i].Faculty_Name,monday[i].Venue);
        }
    }
    if (day == 2) {
        for (let i = 0; i<tuesday.length;i++) {
            createNewClass(tuesday[i].Subject_Name,tuesday[i].Time_Start,tuesday[i].Time_End,tuesday[i].Faculty_Name,tuesday[i].Venue);
        }
    }
    if (day == 3) {
        for (let i = 0; i<wed.length;i++) {
            createNewClass(wed[i].Subject_Name,wed[i].Time_Start,wed[i].Time_End,wed[i].Faculty_Name,wed[i].Venue);
        }
    }
    if (day == 4) {
        for (let i = 0; i<thus.length;i++) {
            createNewClass(thus[i].Subject_Name,thus[i].Time_Start,thus[i].Time_End,thus[i].Faculty_Name,thus[i].Venue);
        }
    }
    if (day == 5) {
        for (let i = 0; i<fri.length;i++) {
            createNewClass(fri[i].Subject_Name,fri[i].Time_Start,fri[i].Time_End,fri[i].Faculty_Name,fri[i].Venue);
        }
    }
    if (day == 6) {
        for (let i = 0; i<sat.length;i++) {
            createNewClass(sat[i].Subject_Name,sat[i].Time_Start,sat[i].Time_End,sat[i].Faculty_Name,sat[i].Venue);
        }
    
    }
    

}
function createNewClass(Subject, Time_Start, Time_End, Faculty_Name,Venue) {
let classes = document.getElementById('classes');
let j = document.createElement('div');
j.setAttribute('class', 'class');
classes.appendChild(j);
let div1 = document.createElement('div');
div1.setAttribute('class','c1');
j.appendChild(div1)
let div2 = document.createElement('div');
div2.setAttribute('class', 'class-title');
div2.innerHTML = Subject;
div1.appendChild(div2);
let div3 = document.createElement('div');
div3.setAttribute('class', 'class-time');
div3.innerHTML += '<img style="vertical-align: middle;" src = "clock.png" width="16px">'
let span1 = document.createElement('span');
let span2 = document.createElement('span');
span1.innerHTML += " ";
span1.setAttribute('class', 'time-start');
span2.setAttribute('class', 'time-end');
span1.innerHTML+= Time_Start;

span2.innerHTML = Time_End;
div3.appendChild(span1);
div3.innerHTML+="-";
div3.appendChild(span2);
div1.appendChild(div3);
let new_div = document.createElement("div");
new_div.setAttribute('class', 'c2');
j.appendChild(new_div);
let new_empty_div = document.createElement("div");
new_div.appendChild(new_empty_div);
new_empty_div.innerHTML += '<img style="vertical-align: middle;" width="25px" src = "faculty.png">';
let new_span_1 = document.createElement('span');
new_span_1.setAttribute('class', 'faculty-name')
new_empty_div.appendChild(new_span_1);
new_span_1.innerHTML = Faculty_Name;
let new_empty_div_2 = document.createElement('div');
new_empty_div_2.innerHTML += '<img style="vertical-align: middle;" width = "25px"src="venue.png">'
new_div.appendChild(new_empty_div_2);
let new_span_2 = document.createElement('span');
new_span_2.setAttribute('class', 'venue')
new_empty_div_2.appendChild(new_span_2);
new_span_2.innerHTML = Venue;
}

function weekwise() {
    document.getElementsByClassName("options_header")[0].children[1].style.opacity = 0.3;
     bool_delete_mode = false;
        bool_edit_mode = false;
    document.getElementsByClassName("options_header")[0].children[2].style.opacity = 0.3;
    document.getElementsByClassName('active')[0].setAttribute('class', 'op');
        document.getElementsByClassName('op')[2].setAttribute('class', 'op active');
        document.getElementById('body_head').innerHTML = "Today's Class";
        document.getElementById('body_head').innerHTML = "Week Wise Classes";
        document.getElementById('classes').innerHTML = "";
        let classes = document.getElementById('classes');

        for (let k = 0; k<days.length; k++) {
    let j = document.createElement('div');
j.setAttribute('class', 'class');
j.style.textAlign = "center";
j.style.cursor = "pointer";
j.style.fontFamily = "Segoe UI";
j.innerHTML = days[k];
j.setAttribute('onclick', `exe(${k+1}, "week")`);
classes.appendChild(j);
        }
    }
async function popup_alert(msg) {
    await new Promise((r)=>{document.getElementById("popup").innerHTML =  msg;
    document.getElementById("popup").style.display = "block";
    let t = setTimeout(()=>{document.getElementById("popup").style.display="none"},1500);
r();}
    )
}

function evt_rem(e) { e.target.style.display = "none"};
    if (bool_edit_mode==true) {
        document.getElementsByClassName("options_header")[0].children[1].style.opacity = 0.3;    
    }
function delete_mode() {
    
    
    if (bool_delete_mode==true) {
        document.getElementsByClassName("options_header")[0].children[1].style.opacity = 0.3;
        document.querySelectorAll('.class').forEach((elem)=> {elem.removeEventListener("click", evt_rem)});
        popup_alert('Delete turned off');
        bool_delete_mode = false;   
        return;  
    }

    
    if (document.getElementById('classes').children.length == 0) {
        popup_alert('No class on dashboard to delete!');
        return;  
    }         
    document.querySelectorAll('.class').forEach((elem)=> {elem.addEventListener("click", evt_rem)});
    popup_alert('Delete mode on. <br> Tap/click on element to delete on dashboard');
    document.getElementsByClassName("options_header")[0].children[1].style.opacity = 1;
        bool_delete_mode = true;
}
function edit() {
    if (bool_edit_mode==true) {
        document.getElementsByClassName("options_header")[0].children[2].style.opacity = 0.3;
        document.querySelectorAll('.class').forEach((elem)=> {elem.contentEditable = false});
        popup_alert('Edit Mode Off');
        bool_edit_mode = false;   
        return;  
    }
    document.querySelectorAll('.class').forEach((elem)=> {elem.contentEditable = true});
    document.getElementsByClassName("options_header")[0].children[2].style.opacity = 1;
    popup_alert("Edit mode on edit any element on dashboard")
    bool_edit_mode=true;

}
exe(day+1,'tom');
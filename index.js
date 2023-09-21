let projNames = ["proj1", "proj2", "proj3", "proj4", "proj5"];
let projLinks = [];
let projDetail = [];
projNames.forEach(function(proj){
    projLinks.push(document.getElementById(proj+"link"));
    projDetail.push(document.getElementById(proj));
});

navProj = document.getElementById("navProjects");
projList = document.getElementById("projList");
navProj.hidden = true;

toggleProjList = function() {
    if (navProj.hidden == true) {
        navProj.hidden = false;
        projList.style.backgroundColor = 'lightgray';
    }
    else {
        navProj.hidden = true;
        projList.style.backgroundColor = 'lightblue';
    }
}
projFocus = function(evt) {
    let idx = projLinks.indexOf(evt.target);
    projDetail[idx].style.display = "grid";
    for (let i = 0; i < projDetail.length; i++) {
        if (i == idx) {
            continue;
        }
        projDetail[i].style.display = "none";
    }
}
projSelect = function(evt) {
    projFocus(evt);
    navProj.hidden = true;
}

projList.addEventListener('mousedown', toggleProjList);

projLinks.forEach(function(proj){
    proj.addEventListener('mouseover', projFocus);
    proj.addEventListener('click', projSelect)
});

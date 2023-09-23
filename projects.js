let projNames = ["proj1", "proj2", "proj3", "proj4", "proj5"];
let projLinks = [];
let projDetail = [];
projNames.forEach(function(proj){
    projLinks.push(document.getElementById(proj+"link"));
    projDetail.push(document.getElementById(proj));
});

navProj = document.getElementById("navProjects");
navProj.style.visibility = "hidden";
projList = document.getElementById("projList");

toggleProjList = function() {
    if (navProj.style.visibility == "hidden") {
        navProj.style.visibility = "visible";
        projList.style.backgroundColor = 'lightgray';
    }
    else {
        navProj.style.visibility = "hidden";
        projList.style.backgroundColor = 'lightblue';
        for (let i = 0; i < projDetail.length; i++) {
            projDetail[i].style.visibility = "hidden";
        }
    }
}
projFocus = function(evt) {
    let idx = projLinks.indexOf(evt.target);
    projDetail[idx].style.visibility = "visible";
    for (let i = 0; i < projDetail.length; i++) {
        if (i == idx) {
            continue;
        }
        projDetail[i].style.visibility = "hidden";
    }
}
projSelect = function(evt) {
    projFocus(evt);
}

projList.addEventListener('mousedown', toggleProjList);

projLinks.forEach(function(proj){
    proj.addEventListener('mouseover', projFocus);
    proj.addEventListener('click', projSelect)
});

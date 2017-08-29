
/*******************************************
  FUNCTIONALITY FOR PROJCTES PAGE
*********************************************/
/*These arrays automatically populate with the project elements*/
var projects = document.getElementsByClassName('projectBox');

var projectButtons = document.getElementsByClassName('openView');

var projectCloseButtons = document.getElementsByClassName('closeView');

var projectLargeViews = document.getElementsByClassName('largeViewContainer');

/*Hide all the projects without the class specified by the function call*/
function filter(langClass){
  for(var i = 0; i < projects.length; i++){
    if(projects[i].classList.contains(langClass)){
      projects[i].style.display='flex';
    }else{
      projects[i].style.display='none';
    }
  }
};

/*Each button's filter function calls*/
$("#buttonWebDev").click(function(){
  filter("webDev")
});

$("#buttonJava").click(function(){
  filter("java")
});

$("#buttonCPlus").click(function(){
  filter("cPlus")
});

$("#buttonAll").click(function(){
  showAllProjects();
});

//Hide all of the projects, show the full page view.
function hideAllProjects(){
  for(var i = 0; i < projects.length; i++){
    projects[i].style.display='none';
  }
};

function showAllProjects(){
  for(var i = 0; i < projects.length; i++){
    projects[i].style.display='flex';
  }
};


//Open the corresponding large view when button is clicked
$("body").click(function(event){
  var buttonID = event.target.id;
  for(var i = 0; i < projects.length; i++){
      if(projectButtons[i].id === buttonID){
        projectLargeViews[i].style.display='flex';
        $(".langNavButton").hide();
        $("#buttonReturn").show();
        hideAllProjects();
      }
  }
});

//Close all large views when button is clicked
$("body").click(function(event){
  var buttonID = event.target.id;
  for(var i = 0; i < projects.length; i++){
      if(projectCloseButtons[i].id === buttonID){
        projectLargeViews[i].style.display='none';
        $("#buttonReturn").hide();
        $(".langNavButton").show();
        showAllProjects();
        //If they hit the red button on top, we need to loop through all
        //large views and hide them because we dont know which is open.
      }else if(buttonID === "buttonReturn"){
        for(var i = 0; i < projectLargeViews.length; i++){
          projectLargeViews[i].style.display='none';
        }
        $("#buttonReturn").hide();
        $(".langNavButton").show();
        showAllProjects();
      }
  }
});

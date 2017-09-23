var hexagonNav = document.getElementById('hexagon');
var hexagonTop = document.getElementById('hexagon-top');
var hexagonBottom = document.getElementById('hexagon-bottom');
var hamburgerLine1 = document.getElementById('hamburger-line-1'); 
var hamburgerLine2 = document.getElementById('hamburger-line-2'); 
var hamburgerLine3 = document.getElementById('hamburger-line-3'); 
var smallScreenNav = document.getElementById('small-screen-nav-container');
var about = document.getElementById('about');
var leftAbout = document.getElementById('left-about');
var aboutPic = document.getElementById('aboutpic');
var caseyPic = document.getElementById('caseypic');
var navAbout = document.getElementById('nav-about');
var rightAbout = document.getElementById('right-about');
var project = document.getElementById('project');
var leftProject = document.getElementById('left-project');
var rightProject = document.getElementById('right-project');
var leftContact = document.getElementById('left-contact');
var rightContact = document.getElementById('right-contact');
var projectPic = document.getElementById('projectpic');
var contact = document.getElementById('contact');
var contactPic = document.getElementById('contactpic');
var moonEnding = document.getElementById('moon-ending');
var hexagonLines = document.querySelectorAll('#hexagon p');
var smallNav = document.getElementsByClassName('nav-link-small');
var navContainer = document.getElementById('small-screen-nav-container');
var body = document.getElementsByTagName('body');
var checkNavForStatus = true;
var checkNavForColors = true;
var topOfProject;
var counter = 1;
adjustLayoutScroll();

function adjustLayoutScroll() {
    var aboutFromTop = about.offsetTop;
    var projectFromTop = project.offsetTop;
    var contactFromTop = contact.offsetTop;
    var rightProjectFromTop = rightProject.offsetTop;
    var windowFromTop = window.scrollY;
    var windowWidth = window.outerWidth;
    var windowInnerHeight = window.innerHeight;
    var rightAboutHeight = rightAbout.scrollHeight;
    var rightProjectHeight = rightProject.scrollHeight;
    var rightContactHeight = rightContact.scrollHeight;
    var topOfContact = contact.offsetTop - windowInnerHeight;
    var topOfMoonEnding = moonEnding.offsetTop - windowInnerHeight;
    var leftAboutScrollHeight = leftAbout.scrollHeight;
    var leftProjectScrollHeight = leftProject.scrollHeight;
    var leftContactScrollHeight = leftContact.scrollHeight;
    console.log('hi');
    topOfProject = project.offsetTop - windowInnerHeight;
    leftAbout.style.height = windowInnerHeight + 'px';
    leftProject.style.height = windowInnerHeight + 'px';
    leftContact.style.height = windowInnerHeight + 'px';

    
    fixedToAbsoluteLayout(aboutFromTop, aboutPic, 'aboutpic', topOfProject, leftAbout, rightAboutHeight, leftAboutScrollHeight, 'aboutpic-mutate');
    fixedToAbsoluteLayout(projectFromTop, projectPic, 'projectpic', topOfContact, leftProject, rightProjectHeight, leftProjectScrollHeight, 'aboutpic-mutate');
    fixedToAbsoluteLayout(contactFromTop, contactPic, 'contactpic', topOfMoonEnding, leftContact, rightContactHeight, leftContactScrollHeight, 'aboutpic-mutate');

    function fixedToAbsoluteLayout(position, pic, bigPic, topOfElement, leftChildElement, heightOfSibling, leftElementHeight, smallPic) {
        if (position <= windowFromTop && windowWidth >= 991) {
            pic.setAttribute('id', bigPic);
            pic.style.marginTop = '0';

            if (windowFromTop >= topOfElement) {
                leftChildElement.style.position = 'absolute';
                leftChildElement.setAttribute('style', 'top:' + (heightOfSibling - leftElementHeight) + 'px');
                leftChildElement.style.height = windowInnerHeight + 'px';
            
            } else if (topOfElement >= windowFromTop) {
                leftChildElement.setAttribute('style', 'top: 0px');
                leftChildElement.style.position = 'fixed';
                leftChildElement.style.height = windowInnerHeight + 'px';
            } 
          
        } else if (windowWidth <= 991) {
            leftChildElement.style.position = 'static';
            pic.setAttribute('id', smallPic);
            pic.style.marginTop = windowInnerHeight / 3 + 'px';


            if (aboutFromTop <= (windowFromTop - leftAboutScrollHeight + 45)) {
                changeNavColors('rgb(30, 188, 234)', '10px solid rgb(30, 188, 234)', '10px solid rgb(30, 188, 234)', '2px solid white');
            } else {
                changeNavColors('white', '10px solid white', '10px solid white' , '2px solid rgb(30, 188, 234)');
            }

            if (projectFromTop <= (windowFromTop - leftProjectScrollHeight + 45)) {
                changeNavColors('white', '10px solid white', '10px solid white', '2px solid rgb(30, 188, 234)');
            }

            if (contactFromTop <= (windowFromTop - leftContactScrollHeight + 45)) {
                changeNavColors('rgb(30, 188, 234)', '10px solid rgb(30, 188, 234)', '10px solid rgb(30, 188, 234)', '2px solid white');
            }


            function changeNavColors(string1, string2, string3, string4) {
                hexagonNav.style.backgroundColor = string1;
                hexagonTop.style.borderBottom = string2;
                hexagonBottom.style.borderTop = string3;

                for (var i = 0; i < 3; i++) {
                    hexagonLines[i].style.borderTop = string4;
                }
                
            }
                 
        } else {
            leftChildElement.style.position = 'absolute';
            leftChildElement.setAttribute('style', 'top: 0px');
            leftChildElement.style.height = windowInnerHeight + 'px';
        }
    }
};


window.addEventListener('scroll', function() {
   adjustLayoutScroll();

});


window.addEventListener('resize', function() {
    adjustLayoutScroll();
    windowWidth = window.outerWidth;
    
    if (windowWidth >= 991) {
        smallScreenNav.style.display = 'none';
        hamburgerLine1.classList.add('hamburger-line-1');
        hamburgerLine3.classList.add('hamburger-line-3');
        hamburgerLine1.removeAttribute('class');
        hamburgerLine3.removeAttribute('class');
        hamburgerLine1.setAttribute('id', 'hamburger-line-1');
        hamburgerLine3.setAttribute('id', 'hamburger-line-3');
        hamburgerLine2.style.display = 'block';
        smallScreenNav.style.display = 'none';
        hexagonNav.style.backgroundColor = 'white';
        hexagonTop.style.borderBottom = '10px solid white';
        hexagonBottom.style.borderTop = '10px solid white';
        hamburgerLine1.style.borderTop = '2px solid #2EB5E5';
        hamburgerLine3.style.borderTop = '2px solid #2EB5E5';  
        checkNavForStatus = true;
    } else {
       
    }
});

hexagonNav.addEventListener('mouseover', function() {
    
    if (checkNavForStatus === true) {
        hamburgerLine1.classList.add('hamburger-margin-left-1');
        hamburgerLine3.classList.add('hamburger-margin-left-3');
    }
});

hexagonNav.addEventListener('mouseout', function() {

    if (checkNavForStatus === true) { 
        hamburgerLine1.classList.remove('hamburger-margin-left-1');
        hamburgerLine3.classList.remove('hamburger-margin-left-3');
    }
})

function hexagonNavAnimationAndClose() {

    if (checkNavForStatus === true) {
        body[0].classList.add('stop-scrolling');
        hamburgerLine2.style.display = 'none';
        hamburgerLine1.classList.remove('hamburger-margin-left-1');
        hamburgerLine3.classList.remove('hamburger-margin-left-3');
        hamburgerLine1.removeAttribute('id');
        hamburgerLine3.removeAttribute('id');
        hamburgerLine1.setAttribute('class', 'hamburger-line-1-transform');
        hamburgerLine3.setAttribute('class', 'hamburger-line-3-transform');
        smallScreenNav.style.display = 'block';
        hexagonNav.style.backgroundColor = '#2EB5E5';
        hexagonTop.style.borderBottom = '10px solid #2EB5E5';
        hexagonBottom.style.borderTop = '10px solid #2EB5E5';
        hamburgerLine1.style.borderTop = '2px solid white';
        hamburgerLine3.style.borderTop = '2px solid white';        
        checkNavForStatus = false;
        adjustLayoutScroll();
    } else {
        body[0].classList.remove('stop-scrolling');
        hamburgerLine1.classList.add('hamburger-line-1');
        hamburgerLine3.classList.add('hamburger-line-3');
        hamburgerLine1.removeAttribute('class');
        hamburgerLine3.removeAttribute('class');
        hamburgerLine1.setAttribute('id', 'hamburger-line-1');
        hamburgerLine3.setAttribute('id', 'hamburger-line-3');
        hamburgerLine2.style.display = 'block';
        smallScreenNav.style.display = 'none';
        hexagonNav.style.backgroundColor = 'white';
        hexagonTop.style.borderBottom = '10px solid white';
        hexagonBottom.style.borderTop = '10px solid white';
        hamburgerLine1.style.borderTop = '2px solid #2EB5E5';
        hamburgerLine1.style.borderTop = '2px solid #2EB5E5';
        hamburgerLine3.style.borderTop = '2px solid #2EB5E5';  
        checkNavForStatus = true;
        adjustLayoutScroll();
    }
};

hexagonNav.addEventListener('click', function() {
        hexagonNavAnimationAndClose()
        adjustLayoutScroll();
});

for (var i = 0; i < smallNav.length; i++) {
    smallNav[i].addEventListener('click', function() {
        navContainer.style.display = 'none';
        hexagonNavAnimationAndClose();
    });
   
}


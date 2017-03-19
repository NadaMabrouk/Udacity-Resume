var bio = {
    "name": "Nada Mabrouk",
    "role": "Front-End Web Developer",
    "welcomeMessage": "Passionate, beginner, and self-learner front-end web developer who is looking for an opportunity in the field to learn more and add value. ",
    "biopic": "images/profile.jpg",
    "info": "nada.mohamed.1991@gmail.com",
    "contacts": {
        "mobile": "+41779119276",
        "email": "nada.mohamed.1991@gmail.com",
        "github": "NadaMabrouk",
        "location": "Zurich, Switzerland"
    },
    "skills": ["Programming", "Teaching", "HTML", "CSS", "JavaScript", "Bootstrap", "Grunt"]
};

var work = {
    "jobs": [{
            "employer": "Faculty of Computers and Information, Cairo University",
            "title": "Teaching Assistant",
            "location": "5 Ahmed Zewail, Ad Doqi, Giza Governorate 12613, Egypt",
            "dates": "2013-2015",
            "description": "Helped in teaching different set of courses during the two years duration such as: (Computer Network and Information Security, Data Communication, Electronics,and High Speed Networks)"
        },
        {
            "employer": "Faculty of Informatics and Computer Science, British University in Egypt",
            "title": "Teaching Assistant",
            "location": " Suez Rd, EL SHEROUK CITY، Cairo Governorate 11837, Egypt",
            "dates": "2012-2013",
            "description": "Helped in teaching different set of courses during this year such as (Computer Network and Information Security, Computer Architecture,, Electronics, and Introduction to Computer Networks)"
        }
    ]
};

var education = {
    "schools": [{
        "name": "Faculty of Computers and Information, Cairo University",
        "url": "www.fci.cu.edu.eg",
        "location": "5 Ahmed Zewail, Ad Doqi, Giza Governorate 12613, Egypt",
        "degree": "Bachelor Degree",
        "dates": "2008-2012",
        "majors": ["Information Technology"],

    }],
    "onlineCourses": [{
        "title": "Front-End Web development Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "www.udacity.com"
    }]
};

var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "3-2017",
        "description": "A simple responsive website to present all of my work and to be able to apply for jobs through and effective profile that reflect my work.",
        "images": ["images/197x148.gif", "images/197x148.gif"]
    }]
};

var footerInfo = {
	"facebook":"http://www.facebook.com/nada.r.mabrouk",
	"codepen":"http://codepen.io/NadaMabrouk/",
	"linkedin":"http://www.linkedin.com/in/nada-mabrouk-88b41086/",
	"github":"http://github.com/NadaMabrouk"
};




bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }

};

projects.display = function() {
    projects.projects.forEach(function(element) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", element.title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", element.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", element.description));
        if (element.images.length > 0) {
            for (var i = 0; i < element.images.length; i++) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", element.images[i]));
            }
        }

    });
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(element) {
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", element.name).replace("%url%", element.url));
        $(".education-entry:last").append(HTMLschoolDegreeAndDates.replace("%data%", element.degree).replace("%date%", element.dates));
        if (element.majors.length > 1) {
            var majors = element.majors.join();
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", majors));
        } else {
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", element.majors));
        }
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", element.location));
    });

    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        $("#onlineCourses").append(HTMLonlineTitle.replace("%data%", course.title));
        $("#onlineCourses").append(HTMLonlineSchool.replace("%data%", course.school));
        $("#onlineCourses").append(HTMLonlineDates.replace("%data%", course.dates));
        $("#onlineCourses").append(HTMLonlineURL.replace("%data%", course.school).replace("%url%", course.url));
    });

};

work.display = function() {
    work.jobs.forEach(function(element) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", element.employer));
        $(".work-entry:last").append(HTMLworkTitleandDates.replace("%data%", element.title).replace("%date%", element.dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", element.location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", element.description));

    });
};

footerInfo.display = function () {
	$('#footerContacts').append(HTMLfooterFacebook.replace("%data%",footerInfo.facebook));
	$('#footerContacts').append(HTMLfooterCodepen.replace("%data%",footerInfo.codepen));
	$('#footerContacts').append(HTMLfooterLinkedin.replace("%data%",footerInfo.linkedin));
	$('#footerContacts').append(HTMLfooterGithub.replace("%data%",footerInfo.github));	
};

bio.display();
work.display();
projects.display();
education.display();
footerInfo.display();
$("#mapDiv").append(googleMap);
var bio = {
    name: "Lewie Khoury",
    role: "Digital Content Manager",
    contact: {
        mobile: "(408) 691-0062",
        Email: "Lewiekh@gmail.com",
        github: "lewiekh",
        Twitter: "@lewiekhoury",
        location: "San Jose, CA"
    },
    welcomeMessage: "Welcome to my online resume",
    skills: [
        "HTML", "CSS", "Javascript", "Excel", "Google Adwords", "Google Analytics", "SEO", "Jquery"
    ],
    picture: "images/lewie.jpg",
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
    var formattedEmail = HTMLemail.replace("%data%", bio.contact.Email);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.Twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
    $("#header").prepend(formattedPic);
    $("#header").prepend(formattedMessage);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    var ci = ["#topContacts", "#footerContacts"];
    for (x in ci) {
        cInfo = ci[x];
        $(cInfo).append(formattedMobile);
        $(cInfo).append(formattedEmail);
        $(cInfo).append(formattedTwitter);
        $(cInfo).append(formattedGithub);
        $(cInfo).append(formattedLocation);
    }
    $("#header").append(HTMLskillsStart);
    for (var i in bio.skills) {
        si = bio.skills[i];
        var formattedSkills = HTMLskills.replace("%data%", si);
        $("#skills").append(formattedSkills);
    }

};
bio.display();
var work = {
    jobs: [{
        employer: "Verizon, Inc (Through Aditi Consulting)",
        title: "Digital Content Manager",
        location: "San Jose, CA",
        dates: "2016 - Present",
        description: "Review and QC digital content with respect to video quality, playback, artwork, metadata, and other pre-defined data points. Analyze error reports using excel to identify trends. Resolve issues and errors in relation to the meta data in an accurate and timely manner. Help curate content that will be highlighted on the main page of the app. Communicate with content providers to insure content is delivered on time without errors."
    }, {
        employer: "Google, Inc. (Through BC-Forward)",
        title: "Escalations Content Review Analyst",
        location: "San Jose, CA",
        dates: "Oct. 2014 - Dec. 2015",
        description: "Provide Customer Service to Top Partner and business developers. Handling of all escalations quickly and efficiently including all Arabic content. Content curation and analysis using Excel. Being a Subject Matter Expert in all matters processed by the team. Identify holes in customer policies and drafts proposals accordingly. Understand customer’s business needs and maintains high customer satisfaction ratings. Perform follow up on incidents with customer to ensure customer satisfaction Act as the primary knowledge resource for a product and service and use this knowledge to raise process and/or procedure improvement opportunities to team lead Identify root causes for customer dissatisfaction and recommend solutions to improve overall customer satisfaction Assist with monitoring and tracking incidents to ensure resolution occurs within the customer Service Level Agreement"
    }, {
        employer: "Sazze, Inc.",
        title: "Content Marketing/SEO",
        location: "San Jose, CA",
        dates: "May 2014 - Aug 2014",
        description: "Help maintain site's high organic traffic and search engine rankings Build campaigns, keywords, ad copy to promote campaign launch Interpret and analyze data in Excel to identify key trends and insights and adjust keyword and marketing strategy Monitoring new website content finding new deals and coupons Write/post/make changes to Dealsplus.com website Assisting design and development team to build new, search engine friendly site features Email Marketing/Blogging and blogger outreach Business development and CRM, SEM, SEO"
    }]
};
work.display = function() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var workAndtitle = formattedEmployer + formattedWorkTitle;
        $(".work-entry:last").prepend(workAndtitle);
        var formattedWorklocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").prepend(formattedWorklocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedWorkdescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedWorkdescription);
    }
};
work.display();
var education = {
    schools: [{
        name: "UOP",
        city: "San Jose, CA",
        degree: "Bachelor degree",
        major: "Marketing",
        dates: "2012"
    }],
    onlineCourses: [{
        title: "Front-End Web Developer",
        school: "Udacity",
        dates: "2016",
        url: "http://www.udacity.com"
    }, {
        title: "Google Adwords Certification",
        school: "Google, Inc.",
        dates: "2013",
        url: "http://www.google.com"
    }, {
        title: "DoubleClick Certification",
        school: "Google, Inc.",
        dates: "2015",
        url: "http://www.google.com"
    }]
};
education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolname = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var nameAnddgree = formattedSchoolname + formattedDegree;
        $(".education-entry:last").prepend(nameAnddgree);
        var formattedSchooldates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchooldates);
        var formattedSchoollocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        $(".education-entry:last").prepend(formattedSchoollocation);
        var formattedSchoolmajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedSchoolmajor);
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (online in education.onlineCourses) {
        var formattedOnlinetitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        var formattedOnlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        var formattedOnlinedates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
        var onlineSchoolandTitle = formattedOnlinetitle + formattedOnlineschool;
        $(".education-entry:last").append(onlineSchoolandTitle);
        $(".education-entry:last").append(formattedOnlinedates);
    }
};
education.display();
var project = {
    projects: [{
        title: "Lewie's Portfolio",
        dates: "2016",
        description: "Created a portfolio for my self with HTML and CSS using the bootstrap framework",
        images: ["http://lewiekhoury.com/images/port_image1.jpg", "http://lewiekhoury.com/images/port_image2.jpg"],
    }, {
        title: "Lewie's Resemue",
        dates: "2016",
        description: "Created a an online resume using Javascript, CSS, and HTML hosted on http://wwww.lewiekhoury.com",
        images: ["http://lewiekhoury.com/images/res_1.jpg", "http://lewiekhoury.com/images/res_2.jpg"],

    }]
};
project.display = function() {
    for (var proj in project.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjecttitle = HTMLprojectTitle.replace("%data%", project.projects[proj].title);
        $(".project-entry:last").prepend(formattedProjecttitle);
        var formattedProjectdates = HTMLprojectDates.replace("%data%", project.projects[proj].dates);
        $(".project-entry:last").append(formattedProjectdates);
        var formattedProjectdesc = HTMLprojectDescription.replace("%data%", project.projects[proj].description);
        $(".project-entry:last").append(formattedProjectdesc);
        var formattedProjectimages = HTMLprojectImage.replace("%data%", project.projects[proj].images[0]);
        $(".project-entry:last").append(formattedProjectimages);
        var formattedProjectimages = HTMLprojectImage.replace("%data%", project.projects[proj].images[1]);
        $(".project-entry:last").append(formattedProjectimages);
    }
};
project.display();
$("#mapDiv").append(googleMap);
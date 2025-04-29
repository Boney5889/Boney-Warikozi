var initDot = document.getElementById("loading");
var loading = setInterval(function() {
    if(initDot.innerHTML.length == 5) {
        initDot.innerHTML = "";
    } else {
        initDot.innerHTML += ".";
    }
}, 350); // Dot Speed

var $loadingMessage = $('#loadingH1');

setTimeout(function() {
    clearInterval(loading);
    $loadingMessage.hide();
}, 1500);

var initProgram = setTimeout(function(){
    var greeting = "Education";
    var job = "Unversity of Marland Globle Compass"
    var message = "RUNNING SECURITY ARCHITECH RESUME FOR BONEY";
    var $identityDiv = $("#identity-results");
    var $name = "Unversity of Marland Globle Compass";
    var $alias = " Aug 2023 - Aug 2025"
    var $occupation  = "Software Development and Security";
    var $frontEnd  = "Bachelor’s degree in software development and security\n" +
        "Coursework: Software Development, Cloud Programming, and\n" +
        "Cybersecurity\n" +
        "GPA: 3.7";
    var $JSFrameworks = "Austin Community College";
    var $JSLibs = "Aug 2018 - Aug 2020";
    var $CSSFrameworks = "Associate degree of Applied Science in Local Area Network\n" +
        "Administration";
    var $CSSPre = "Coursework: Cybersecurity, Advance Routers and Switches, Network\n" +
        "TCP/IP, Cloud Computing, Firewalls and Network Security,\n \n" +
        "GPA: 3.6";
    var $frontEndAnimation = "WORK EXPERIENCE";
    var $cmsDevelopment = "Charter Communication - Spectrum";
    var $wordpress = "April 2022–present";
    var $design = "Technician level 5+";
    var $webDesign = "• Install and maintain internet, voice, and cable services.\n \n" +
        "• Troubleshoot technical issues at customer premises.\n \n" +
        "• Optimize network performance and reliability.\n \n" +
        "• Deliver exceptional customer service in residential and business\n \n" +
        "settings.";
    var $branding = "Everise";
    var $designAnimation = "May 17, 2021–April 2022";
    var $rise = "Tier 1 Technical Support Agent";
    var $para = "• Worked with a wireless mesh system.\n" +
        "• Effectively troubleshoot the mesh system through a framework and\n" +
        "explain technical information to users of all levels.\n" +
        "• Find ways for customers to get the most out of their wireless\n" +
        "network.";
    var $h = "Profile";
    var $habitpara = "As a graduate in Cyber Operations\n" +
        "with a specialization in software\n" +
        "development and security, I bring\n" +
        "comprehensive knowledge of the\n" +
        "secure software development lifecycle\n" +
        "and cybersecurity frameworks. I am\n" +
        "proficient in designing and\n" +
        "implementing secure architectures for\n" +
        "enterprise systems, with strengths in\n" +
        "threat modeling and vulnerability\n" +
        "assessment.\n" +
        "Knowledge without experience is\n" +
        "obsolete. Weekly, I conduct a project\n" +
        "to demonstrate and sharpen my\n" +
        "knowledge. Some of my work can be\n" +
        "found on the website below.";

    function initIdentityResults(i){
        $("#message").addClass("sign cursor").text(message.substring(0, i));
        if(i < message.length){
            setTimeout(function(){
                initIdentityResults(i + 1);
            }, 35);
        }else{
            $('#message').removeClass("cursor");
            var loadingResume = function(){
                $("#loadingMessage2").show()
                var dotAlpha = document.getElementById("alpha-loading");
                var loadingAlpha = setInterval(function() {
                    if(dotAlpha.innerHTML.length == 6) {
                        dotAlpha.innerHTML = "";
                    } else {
                        dotAlpha.innerHTML += ".";
                        setTimeout(function() {
                            clearInterval(loadingAlpha);
                            $("#loadingMessage2").hide();
                        }, 2000);
                    }
                }, 350);  // Dot Speed
            }
            loadingResume();
            function initName(i){
                $("#name").addClass("sign cursor").text($name.substring(0, i));
                if(i < $name.length){
                    setTimeout(function(){
                        initName(i + 1);
                    }, 35);
                }else{
                    $("#name").removeClass("cursor");
                    setTimeout(function() {
                        initAlias(0);
                    }, 1500);
                }
            }
            setTimeout(function() {
                initName(0);
            }, 2500);

        }
        function initAlias(i){
            $("#alias").addClass("sign cursor").text($alias.substring(0, i));
            if(i < $alias.length){
                setTimeout(function(){
                    initAlias(i + 1);
                }, 35);
            }else{
                $("#alias").removeClass("cursor");
                setTimeout(function() {
                    initOccupation(0);
                }, 1500);
            }
        }
        function initOccupation(i){
            $("#occupation").addClass("sign cursor").text($occupation.substring(0, i));
            if(i < $occupation.length){
                setTimeout(function(){
                    initOccupation(i + 1);
                }, 35);
            }else{
                $("#occupation").removeClass("cursor");
                setTimeout(function() {
                    initFrontEnd(0);
                }, 1500);
            }
        }

        function initFrontEnd(i){
            $('#front-end-span').addClass('fa fa-wrench');
            $('#frontEnd').addClass("cursor").text($frontEnd.substring(0, i));
            if(i < $frontEnd.length){
                setTimeout(function(){
                    initFrontEnd(i + 1);
                }, 35);
            }else{
                $('#frontEnd').removeClass("cursor");
                setTimeout(function() {
                    initJSFrameworks(0);
                }, 1500);
            }
        }
        function initJSFrameworks(i){
            $('#JSFrameworks').addClass("sign cursor").text($JSFrameworks.substring(0, i));
            if(i < $JSFrameworks.length){
                setTimeout(function(){
                    initJSFrameworks(i + 1);
                }, 35);
            }else{
                $('#JSFrameworks').removeClass("cursor");
                setTimeout(function() {
                    initJSLibs(0);
                }, 1500);
            }
        }
        function initJSLibs(i){
            $('#JSLibs').addClass("sign cursor").text($JSLibs.substring(0, i));
            if(i < $JSLibs.length){
                setTimeout(function(){
                    initJSLibs(i + 1);
                }, 35);
            }else{
                $('#JSLibs').removeClass("cursor");
                setTimeout(function() {
                    initCSSFrameworks(0);
                }, 1500);
            }
        }
        function initCSSFrameworks(i){
            $('#CSSFrameworks').addClass("sign cursor").text($CSSFrameworks.substring(0, i));
            if(i < $CSSFrameworks.length){
                setTimeout(function(){
                    initCSSFrameworks(i + 1);
                }, 35);
            }else{
                $('#CSSFrameworks').removeClass("cursor");
                setTimeout(function() {
                    initCSSPre(0);
                }, 1500);
            }
        }
        function initCSSPre(i){
            $('#CSSPre').addClass("sign cursor").text($CSSPre.substring(0, i));
            if(i < $CSSPre.length){
                setTimeout(function(){
                    initCSSPre(i + 1);
                }, 35);
            }else{
                $('#CSSPre').removeClass("cursor");
                setTimeout(function() {
                    initFrontEndAnimation(0);
                }, 1500);
            }
        }
        function initFrontEndAnimation(i){
            $('#frontEndAnimation').addClass("sign cursor").text($frontEndAnimation.substring(0, i));
            if(i < $frontEndAnimation.length){
                setTimeout(function(){
                    initFrontEndAnimation(i + 1);
                }, 35);
            }else{
                $('#frontEndAnimation').removeClass("cursor");
                setTimeout(function() {
                    initCMSDevelopment(0);
                }, 1500);
            }
        }
        function initCMSDevelopment(i){
            $('#cms-span').addClass("fa fa-wordpress")
            $('#cmsDevelopment').addClass("cursor").text($cmsDevelopment.substring(0, i));
            if(i < $cmsDevelopment.length){
                setTimeout(function(){
                    initCMSDevelopment(i + 1);
                }, 35);
            }else{
                $('#cmsDevelopment').removeClass("cursor");
                setTimeout(function() {
                    initWordpress(0);
                }, 1500);
            }
        }
        function initWordpress(i){
            $('#wordpress').addClass("sign cursor").text($wordpress.substring(0, i));
            if(i < $wordpress.length){
                setTimeout(function(){
                    initWordpress(i + 1);
                }, 35);
            }else{
                $('#wordpress').removeClass("cursor");
                setTimeout(function() {
                    initDesign(0);
                }, 1500);
            }
        }
        function initDesign(i){
            $('#design-span').addClass('fa fa-paint-brush');
            $('#design').addClass("cursor").text($design.substring(0, i));
            if(i < $design.length){
                setTimeout(function(){
                    initDesign(i + 1);
                }, 35);
            }else{
                $('#design').removeClass("cursor");
                setTimeout(function() {
                    initWebDesign(0);
                }, 1500);
            }
        }
        function initWebDesign(i){
            $('#webDesign').addClass("sign cursor").text($webDesign.substring(0, i));
            if(i < $webDesign.length){
                setTimeout(function(){
                    initWebDesign(i + 1);
                }, 35);
            }else{
                $('#webDesign').removeClass("cursor");
                setTimeout(function() {
                    initBranding(0);
                }, 1500);
            }
        }
        function initBranding(i){
            $('#branding').addClass("sign cursor").text($branding.substring(0, i));
            if(i < $branding.length){
                setTimeout(function(){
                    initBranding(i + 1);
                }, 35);
            }else{
                $('#branding').removeClass("cursor");
                setTimeout(function() {
                    initDesignAnimation(0);
                }, 1500);
            }
        }
        function initDesignAnimation(i){
            $('#designAnimation').addClass("sign cursor").text($designAnimation.substring(0, i));
            if(i < $designAnimation.length){
                setTimeout(function(){
                    initDesignAnimation(i + 1);
                }, 35);
            }else{
                $('#designAnimation').removeClass("cursor");
                setTimeout(function () {
                    initJobDesForEveris(0);
                }, 1500);
            }
        }

        function initJobDesForEveris(i) {
            $('#rise').addClass("sign cursor").text($rise.substring(0, i));
            if(i < $rise.length){
                setTimeout(function() {
                    initJobDesForEveris( i + 1);
                }, 35);
            }else{
                $('#rise').removeClass("cursor");
                setTimeout(function (){
                    initparagraph(0);
                }, 1500);
            }
        }

        function initparagraph(i){
            $('#para').addClass("sign cursor").text($para.substring(0, i));
            if(i < $para.length){
                setTimeout(function(){
                    initparagraph(i + 1);
                }, 35);
            }else{
                $('#para').removeClass("cursor");
                setTimeout(function () {
                    inithabit(0);
                }, 1500);

            }
        }

        function inithabit(i) {
            $('#h').addClass("sign cursor").text($h.substring(0, i));
            if(i < $h.length){
                setTimeout(function() {
                    inithabit( i + 1);
                }, 35);
            }else{
                $('#h').removeClass("cursor");
                setTimeout(function (){
                    initHabitPara(0);
                }, 1500);
            }
        }

        function initHabitPara(i) {
            $('#habitpara').addClass("sign cursor").text($habitpara.substring(0, i));
            if(i < $habitpara.length){
                setTimeout(function() {
                    initHabitPara( i + 1);
                }, 35);
            }else{
                //$('#habitpara').removeClass("cursor");
                //setTimeout(function (){
                   // initHabitPara(0);
               // }, 1500);
            }
        }

    }

    function initProgramAlpha(i){
        $("#greeting").addClass("cursor").text(greeting.substring(0, i));
        if(i < greeting.length){
            setTimeout(function(){
                initProgramAlpha(i + 1);
            }, 35);
        }else{
            $("#greeting").removeClass("cursor");
            initIdentityResults(0);
        }
    }

    initProgramAlpha(0)

}, 1500);

initProgram()



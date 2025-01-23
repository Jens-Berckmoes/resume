// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });

    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    //animatedModal
    $("#demo01,#demo02,#demo03,#demo04,#demo05,#demo06,#demo07,#demo08,#demo09").animatedModal();

});

const translations = {
    en: {
        title_text: "Resume",
        about_text: "About",
        experience_text:"Experience",
        education_text:"Education",
        accomplishments_text:"Accomplishments",
        skills_text:"Skills",
        contact_text:"Contact",
        about_text_h1:"About me",
        about_text_p:"As a dedicated Java developer, I have consistently demonstrated my ability to take ownership and responsibility. My passion for clean code, thorough testing, and continuous learning has been a driving force in my career. Known for thinking outside the box, I actively seek advice from colleagues and excel at bringing teams together to collaborate and achieve the bigger picture.",
        experience_text_h1:"Experience",
        experience_text_acerta_date_1:"September 2022 - Mai 2024",
        experience_text_acerta_li_1:"Focused on knowledge sharing and mentoring for testing.",
        experience_text_acerta_li_2:"Implemented tools and strategies to reduce resource and reliability costs.",
        experience_text_acerta_li_3:"Developed robust and reliable code using SOLID and Clean Code principles.",
        experience_text_acerta_date_2:"January 2020 - August 2022",
        experience_text_acerta_li_4:"Sole Java developer in a small team, ensuring data accuracy in XML generations.",
        experience_text_acerta_li_5:"Resolved critical software issues and led meetings with managers, senior developers and clients.",
        experience_text_acerta_li_6:"Developed robust and reliable code using SOLID and Clean Code principles.",
        experience_text_volvo_date:"February 2017 - December 2019",
        experience_text_volvo_li_1:"Collaborated with international teams to develop and maintain software applications.",
        experience_text_volvo_li_2:"Developed and maintained code used by factory workers, ensuring usability and efficiency.",
        experience_text_volvo_li_3:"Initiated and implemented testing processes to enhance software reliability.",
        experience_text_volvo_li_4:"Became the sole developer on a project, managing all aspects of its development.",
        experience_text_volvo_li_5:"Refactored legacy code using Clean Code and SOLID principles.",
        experience_text_cegeka_date:"April 2017 - November 2017",
        experience_text_cegeka_li_1:"Managed multiple websites developed in PHP and Angularjs during a six months contract.",
        education_text_h1:"Education",
        education_text_date:"January 2016 - April 2017",
        education_text_h3:"Intec Brussels",
        education_text_li_1:"Education of a year and a half, into one year.",
        education_text_li_2:"top 5 out of 200 applicants.",
        accomplishments_text_h1:"Accomplishments",
        accomplishments_text_date_1:"Mai 2018",
        accomplishments_text_li_1:"Passing score of 82%.",
        accomplishments_text_date_2:"November 2024",
        skills_text_h1:"Skills",
        skills_text_h3_1:"Programming Languages & Frameworks",
        skills_text_h4_1_1:"Advanced",
        skills_text_h4_1_2:"Advanced",
        skills_text_h4_2_1:"Skilled",
        skills_text_h4_2_2:"Skilled",
        skills_text_h4_2_3:"Skilled",
        skills_text_h4_2_4:"Skilled",
        skills_text_h4_3_1:"Competent",
        skills_text_h4_3_2:"Competent",
        skills_text_h4_4_1:"Novice",
        skills_text_h4_4_2:"Novice",
        skills_text_h4_5_1:"Basic Knowledge",
        skills_text_h4_5_2:"Basic Knowledge",
        skills_text_h3_3:"Testing & Quality",
        contact_text_h1:"Contact me",
        contact_text_h3_1:"Mobile Number",
        contact_text_h3_2:"Social Network",
    },
    nl: {
        title_text: "CV",
        about_text: "Over mij",
        experience_text:"Ervaring",
        education_text:"Opleidingen",
        accomplishments_text:"Prestaties",
        skills_text:"Vaardigheden",
        contact_text:"Contact",
        about_text_h1:"Over mij",
        about_text_p:"Als toegewijde Java-ontwikkelaar heb ik keer op keer bewezen verantwoordelijkheid te nemen en eigenaarschap te tonen. Mijn passie voor clean code, grondig testen en continu bijleren heeft mijn carrière vooruitgestuwd. Bekend om mijn out-of-the-box denken, zoek ik actief advies bij collega’s en blink ik uit in het samenbrengen van teams om gezamenlijk het grotere geheel te bereiken.",
        experience_text_h1:"Ervaring",
        experience_text_acerta_date_1:"September 2022 - Mei 2024",
        experience_text_acerta_li_1:"Gefocust op het delen van kennis en begeleiden bij testen.",
        experience_text_acerta_li_2:"Strategieën geïmplementeerd om kosten van middelen en betrouwbaarheid te verlagen.",
        experience_text_acerta_li_3:"Schaalbare en betrouwbare code ontwikkeld volgens SOLID- en Clean Code-principes.",
        experience_text_acerta_date_2:"Januari 2020 - Augustus 2022",
        experience_text_acerta_li_4:"Enige Java-ontwikkelaar in een klein team, verantwoordelijk voor de nauwkeurigheid van gegevens in XML-generaties.",
        experience_text_acerta_li_5:"Kritieke softwareproblemen opgelost en vergaderingen geleid met managers, senior ontwikkelaars en klanten.",
        experience_text_acerta_li_6:"Schaalbare en betrouwbare code ontwikkeld volgens SOLID- en Clean Code-principes.",
        experience_text_volvo_date:"Februari 2017 - December 2019",
        experience_text_volvo_li_1:"Samengewerkt met internationale teams om softwaretoepassingen te ontwikkelen en te onderhouden.",
        experience_text_volvo_li_2:"Code ontwikkeld en onderhouden die door fabrieksarbeiders wordt gebruikt, waarbij bruikbaarheid en efficiëntie zijn gewaarborgd.",
        experience_text_volvo_li_3:"Testprocessen geïnitieerd en geïmplementeerd om de betrouwbaarheid van software te verbeteren.",
        experience_text_volvo_li_4:"Enige ontwikkelaar geworden op een project en alle aspecten van de ontwikkeling beheerd.",
        experience_text_volvo_li_5:"Legacycode gerefactord volgens de principes van Clean Code en SOLID.",
        experience_text_cegeka_date:"April 2017 - November 2017",
        experience_text_cegeka_li_1:"Meerdere websites onderhouden in PHP en AngularJS gedurende een contract van zes maanden.",
        education_text_h1:"Opleidingen",
        education_text_date:"Januari 2016 - April 2017",
        education_text_h3:"Intec Brussel",
        education_text_li_1:"Opleiding van een jaar en een half, in een jaar.",
        education_text_li_2:"Top 5 van de 200 sollicitanten.",
        accomplishments_text_h1:"Prestaties",
        accomplishments_text_date_1:"Mei 2018",
        accomplishments_text_li_1:"Geslaagd met een score van 82%.",
        accomplishments_text_date_2:"November 2024",
        skills_text_h1:"Vaardigheden",
        skills_text_h3_1:"Programmeertalen & Frameworks",
        skills_text_h4_1_1:"Gevorderd",
        skills_text_h4_1_2:"Gevorderd",
        skills_text_h4_2_1:"Bekwaam",
        skills_text_h4_2_2:"Bekwaam",
        skills_text_h4_2_3:"Bekwaam",
        skills_text_h4_2_4:"Bekwaam",
        skills_text_h4_3_1:"Competent",
        skills_text_h4_3_2:"Competent",
        skills_text_h4_4_1:"Beginner",
        skills_text_h4_4_2:"Beginner",
        skills_text_h4_5_1:"Basiskennis",
        skills_text_h4_5_2:"Basiskennis",
        skills_text_h3_2:"Tools & Platformen",
        skills_text_h3_3:"Testen & Kwaliteit",
        contact_text_h1:"Contacteer mij",
        contact_text_h3_1:"Mobiel Nummer",
        contact_text_h3_2:"Social Media",
    }
};

function changeLanguage() {
    const selectedLang = document.getElementById('languageSwitcher').value;
    document.getElementById('title_text').innerText = translations[selectedLang].title_text;
    document.getElementById('about_text').innerText = translations[selectedLang].about_text;
    document.getElementById('experience_text').innerText = translations[selectedLang].experience_text;
    document.getElementById('education_text').innerText = translations[selectedLang].education_text;
    document.getElementById('accomplishments_text').innerText = translations[selectedLang].accomplishments_text;
    document.getElementById('skills_text').innerText = translations[selectedLang].skills_text;
    document.getElementById('contact_text').innerText = translations[selectedLang].contact_text;
    document.getElementById('about_text_h1').innerText = translations[selectedLang].about_text_h1;
    document.getElementById('about_text_p').innerText = translations[selectedLang].about_text_p;
    document.getElementById('experience_text_h1').innerText = translations[selectedLang].experience_text_h1;
    document.getElementById('experience_text_acerta_date_1').innerText = translations[selectedLang].experience_text_acerta_date_1;
    document.getElementById('experience_text_acerta_li_1').innerText = translations[selectedLang].experience_text_acerta_li_1;
    document.getElementById('experience_text_acerta_li_2').innerText = translations[selectedLang].experience_text_acerta_li_2;
    document.getElementById('experience_text_acerta_li_3').innerText = translations[selectedLang].experience_text_acerta_li_3;
    document.getElementById('experience_text_acerta_date_2').innerText = translations[selectedLang].experience_text_acerta_date_2;
    document.getElementById('experience_text_acerta_li_4').innerText = translations[selectedLang].experience_text_acerta_li_4;
    document.getElementById('experience_text_acerta_li_5').innerText = translations[selectedLang].experience_text_acerta_li_5;
    document.getElementById('experience_text_acerta_li_6').innerText = translations[selectedLang].experience_text_acerta_li_6;
    document.getElementById('experience_text_volvo_date').innerText = translations[selectedLang].experience_text_volvo_date;
    document.getElementById('experience_text_volvo_li_1').innerText = translations[selectedLang].experience_text_volvo_li_1;
    document.getElementById('experience_text_volvo_li_2').innerText = translations[selectedLang].experience_text_volvo_li_2;
    document.getElementById('experience_text_volvo_li_3').innerText = translations[selectedLang].experience_text_volvo_li_3;
    document.getElementById('experience_text_volvo_li_4').innerText = translations[selectedLang].experience_text_volvo_li_4;
    document.getElementById('experience_text_volvo_li_5').innerText = translations[selectedLang].experience_text_volvo_li_5;
    document.getElementById('experience_text_cegeka_date').innerText = translations[selectedLang].experience_text_cegeka_date;
    document.getElementById('experience_text_cegeka_li_1').innerText = translations[selectedLang].experience_text_cegeka_li_1;
    document.getElementById('education_text_h1').innerText = translations[selectedLang].education_text_h1;
    document.getElementById('education_text_date').innerText = translations[selectedLang].education_text_date;
    document.getElementById('education_text_h3').innerText = translations[selectedLang].education_text_h3;
    document.getElementById('education_text_li_1').innerText = translations[selectedLang].education_text_li_1;
    document.getElementById('education_text_li_2').innerText = translations[selectedLang].education_text_li_2;
    document.getElementById('accomplishments_text_h1').innerText = translations[selectedLang].accomplishments_text_h1;
    document.getElementById('accomplishments_text_date_1').innerText = translations[selectedLang].accomplishments_text_date_1;
    document.getElementById('accomplishments_text_li_1').innerText = translations[selectedLang].accomplishments_text_li_1;
    document.getElementById('accomplishments_text_date_2').innerText = translations[selectedLang].accomplishments_text_date_2;
    document.getElementById('skills_text_h1').innerText = translations[selectedLang].skills_text_h1;
    document.getElementById('skills_text_h3_1').innerText = translations[selectedLang].skills_text_h3_1;
    document.getElementById('skills_text_h4_1_1').innerText = translations[selectedLang].skills_text_h4_1_1;
    document.getElementById('skills_text_h4_1_2').innerText = translations[selectedLang].skills_text_h4_1_2;
    document.getElementById('skills_text_h4_2_1').innerText = translations[selectedLang].skills_text_h4_2_1;
    document.getElementById('skills_text_h4_2_2').innerText = translations[selectedLang].skills_text_h4_2_2;
    document.getElementById('skills_text_h4_2_3').innerText = translations[selectedLang].skills_text_h4_2_3;
    document.getElementById('skills_text_h4_2_4').innerText = translations[selectedLang].skills_text_h4_2_4;
    document.getElementById('skills_text_h4_3_1').innerText = translations[selectedLang].skills_text_h4_3_1;
    document.getElementById('skills_text_h4_3_2').innerText = translations[selectedLang].skills_text_h4_3_2;
    document.getElementById('skills_text_h4_4_1').innerText = translations[selectedLang].skills_text_h4_4_1;
    document.getElementById('skills_text_h4_4_2').innerText = translations[selectedLang].skills_text_h4_4_2;
    document.getElementById('skills_text_h4_5_1').innerText = translations[selectedLang].skills_text_h4_5_1;
    document.getElementById('skills_text_h4_5_2').innerText = translations[selectedLang].skills_text_h4_5_2;
    document.getElementById('skills_text_h3_2').innerText = translations[selectedLang].skills_text_h3_2;
    document.getElementById('skills_text_h3_3').innerText = translations[selectedLang].skills_text_h3_3;
    document.getElementById('contact_text_h1').innerText = translations[selectedLang].contact_text_h1;
    document.getElementById('contact_text_h3_1').innerText = translations[selectedLang].contact_text_h3_1;
    document.getElementById('contact_text_h3_2').innerText = translations[selectedLang].contact_text_h3_2;


}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize default language
    const langSwitcher = document.getElementById('languageSwitcher');
    langSwitcher.value = 'en'; // Default language
    changeLanguage();

    // Add event listener for language change
    langSwitcher.addEventListener('change', changeLanguage);
});

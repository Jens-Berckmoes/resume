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
        projects_text:"projects",
        contact_text:"Contact",
        about_text_h1:"About me",
        about_text_p:"As a dedicated Java developer with 6 years of experience in Java (8–21), Spring Boot, Hibernate, and Angular 19, I have consistently demonstrated my ability to take ownership and responsibility. My passion for clean code, thorough testing, and continuous learning has been a driving force in my career. Known for thinking outside the box, I actively seek advice from colleagues and excel at bringing teams together to collaborate and achieve the bigger picture.",
        experience_text_h1:"Experience",
        experience_text_personal_date_1:"Mai 2024 - now",
        experience_text_h3_1:"Family sabatical",
        experience_text_personal_li_1:"I Took time off to care for my family. Continued to refine my Java and Angular skills through personal projects, fully ready to return to the job market.",
        experience_text_acerta_date_1:"September 2022 - Mai 2024",
        experience_text_acerta_li_1:"Worked in a backend team on the further development and maintenance of the Acerta-website and internal services.",
        experience_text_acerta_li_2:"Supported testing, bug fixing, and refactoring to improve application reliability.",
        experience_text_acerta_li_3:"Implemented new features using Java (Spring Boot, Hibernate, SQL) within an agile team.",
        experience_text_acerta_li_4:"Wrote scalable, maintainable code following Clean Code and SOLID principles.",
        experience_text_acerta_li_5:"Actively involved in knowledge sharing and continuous technical improvements.",
        experience_text_acerta_date_2:"January 2020 - August 2022",
        experience_text_acerta_li_6:"Sole Java developer within a small team, responsible for ensuring the accuracy of XML data generation.",
        experience_text_acerta_li_7:"Resolved critical software issues and led technical meetings with managers and clients.",
        experience_text_acerta_li_8:"Performed refactorings to improve legacy code based on Clean Code and SOLID principles.",
        experience_text_acerta_li_9:"Developed and maintained data export processes and validation mechanisms.",
        experience_text_volvo_date:"February 2018 - December 2019",
        experience_text_volvo_li_1:"Collaborated with international teams to develop and maintain software applications.",
        experience_text_volvo_li_2:"Developed and maintained code used by factory workers, ensuring usability and efficiency.",
        experience_text_volvo_li_3:"Initiated and implemented testing processes to enhance software reliability.",
        experience_text_volvo_li_4:"Solely managed a project, refactoring legacy code with Clean Code principles.",
        experience_text_cegeka_date:"April 2017 - November 2017",
        experience_text_cegeka_li_1:"Managed and improved multiple websites developed in PHP and Angularjs during a six months contract.",
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
        skills_text_h3_2:"Tools & Platforms",
        skills_text_h3_3:"Testing & Quality",
        projectss_text_h1:"Projects",
        projects_text_h1:"Projects",
        projects_text_p:"This personal project was designed to deepen my knowledge of Java and Angular. The application demonstrates how I combine a Spring Boot backend with a modern Angular frontend to process and show data in real-time.",
        projects_text_li1:"Built with Spring Boot, Hibernate, SQL and Angular",
        projects_text_li2:"Functionalities: fetch items, add, delete and filter them",
        projects_text_li3:"CRUD-system for guild-inventory using REST API",
        projects_text_note:"In this short I will show you how I start the game, pick a character, collect the information for the inventory using an ingame addon, export the data and show it live on the website.",
        projects_text_p_video:"Your browser doens't support video.",
        projects_text_p_2:"This second personal project was designed to demonstrate my knowledge of Java. The application shows how I upload a CSV file from the bank, categorize it, and generate an overview of all expenses. It uses real data, which can also be exported to the desired format.",
        projects_text_li1_2:"Built with Java and JavaFX",
        projects_text_li2_2:"Features: loads a CSV file, generates an overview of expenses and a chart, and allows exporting to CSV, European CSV (';'), and PDF.",
        projects_text_note_2:"In this short demo, I show how to upload a CSV file, generate an overview of expenses and a chart, and export the data to CSV, European CSV (';'), and PDF.",
        projects_text_p_video_2:"Your browser doens't support video.",
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
        about_text_p:"Als toegewijde Java-ontwikkelaar met 6 jaar ervaring in Java (8–21), Spring Boot, Hibernate en Angular 19, heb ik steeds mijn vermogen om verantwoordelijkheid te nemen en eigenaarschap te tonen bewezen. Mijn passie voor clean code, grondig testen en continu bijleren is een drijvende kracht geweest in mijn carrière. Bekend om out-of-the-box te denken, zoek ik actief advies bij collega’s en blink ik uit in het samenbrengen van teams om gezamenlijk het grotere geheel te bereiken.",
        experience_text_h1:"Ervaring",
        experience_text_personal_date_1:"Mei 2024 - nu",
        experience_text_h3_1:"Persoonlijke Verlofperiode",
        experience_text_personal_li_1:"Ik nam bewust een pauze om voor mijn gezin te zorgen. Tijdens deze periode heb ik mijn kennis van Java en Angular verder ontwikkeld door persoonlijke projecten, en ik ben volledig klaar om terug te keren naar de arbeidsmarkt.",
        experience_text_acerta_date_1:"September 2022 - Mei 2024",
        experience_text_acerta_li_1:"Werkte in een backendteam aan de verdere ontwikkeling en het onderhoud van de Acerta-website en interne services.",
        experience_text_acerta_li_2:"Ondersteunde testing, bugfixing en refactorings om de betrouwbaarheid van de applicatie te verbeteren.",
        experience_text_acerta_li_3:"Implementeerde nieuwe features in Java (Spring Boot, Hibernate, SQL) binnen een agile team.",
        experience_text_acerta_li_4:"Schreef schaalbare, onderhoudbare code volgens Clean Code en SOLID.",
        experience_text_acerta_li_5:"Actief betrokken bij kennisdeling en technische verbeteringen.",
        experience_text_acerta_date_2:"Januari 2020 - Augustus 2022",
        experience_text_acerta_li_6:"Enige Java-ontwikkelaar binnen een klein team, verantwoordelijk voor de nauwkeurigheid van XML-datageneraties.",
        experience_text_acerta_li_7:"Loste kritieke softwareproblemen op en leidde technische vergaderingen met managers en klanten.",
        experience_text_acerta_li_8:"Refactorings uitgevoerd om legacy code te verbeteren volgens Clean Code en SOLID.",
        experience_text_acerta_li_9:"Ontwikkelde en onderhoudde data-exportprocessen en validatiemechanismen.",
        experience_text_volvo_date:"Februari 2018 - December 2019",
        experience_text_volvo_li_1:"Samengewerkt met internationale teams om softwaretoepassingen te ontwikkelen en te onderhouden.",
        experience_text_volvo_li_2:"Code ontwikkeld en onderhouden die door fabrieksarbeiders wordt gebruikt, waarbij bruikbaarheid en efficiëntie zijn gewaarborgd.",
        experience_text_volvo_li_3:"Testprocessen geïnitieerd en geïmplementeerd om de betrouwbaarheid van software te verbeteren.",
        experience_text_volvo_li_4:"Alleen verantwoordelijk geweest voor een project waarbij legacy code werd geherstructureerd volgens Clean Code-principes.",
        experience_text_cegeka_date:"April 2017 - November 2017",
        experience_text_cegeka_li_1:"Meerdere websites onderhouden en verbeterd die ontwikkeld waren in PHP en AngularJS, binnen een contract van zes maanden.",
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
        projects_text_h1:"Projecten",
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
        projects_text:"projecten",
        projects_text_p:"Dit persoonlijk project ontwikkelde ik om mijn kennis in Java en Angular verder te verdiepen.De applicatie demonstreert hoe ik een Spring Boot backend combineer met een moderne Angular frontend om data real-time te verwerken en weer te geven.",
        projects_text_li1:"Gebouwd met Spring Boot, Hibernate, SQL en Angular",
        projects_text_li2:"Functionaliteiten: items ophalen, toevoegen, verwijderen en filteren",
        projects_text_li3:"CRUD-systeem voor guild-inventaris met REST API",
        projects_text_note:"In deze korte demo toon ik hoe ik een character in het spel start, de inventory ophaal via mijn backend en deze data live weergeef in de webapp.",
        projects_text_p_video:"Je browser ondersteunt geen videoweergave.",
        projects_text_p_2:"Dit tweede persoonlijke project is ontworpen om mijn kennis van Java te demonstreren. De applicatie toont hoe ik een CSV-bestand van de bank upload, deze categoriseer en een overzicht maak van alle uitgaven. Hierbij wordt gebruikgemaakt van echte data, die ook geëxporteerd kan worden naar het gewenste formaat.",
        projects_text_li1_2:"Gebouwd met Java en JavaFX",
        projects_text_li2_2:"Functionaliteiten: Laadt een CSV, genereert een overzicht van uitgaven en een grafiek, en laat toe om te exporteren naar CSV, European CSV (';') en PDF.",
        projects_text_note_2:"In deze korte demo toon ik hoe ik een CSV-bestand upload, een overzicht van uitgaven en een grafiek genereer, en de data exporteer naar CSV, European CSV (';') en PDF.",
        projects_text_p_video_2:"Je browser ondersteunt geen videoweergave.",
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
    document.getElementById('experience_text_acerta_li_4').innerText = translations[selectedLang].experience_text_acerta_li_4;
    document.getElementById('experience_text_acerta_li_5').innerText = translations[selectedLang].experience_text_acerta_li_5;
    document.getElementById('experience_text_acerta_date_2').innerText = translations[selectedLang].experience_text_acerta_date_2;
    document.getElementById('experience_text_acerta_li_6').innerText = translations[selectedLang].experience_text_acerta_li_6;
    document.getElementById('experience_text_acerta_li_7').innerText = translations[selectedLang].experience_text_acerta_li_7;
    document.getElementById('experience_text_acerta_li_8').innerText = translations[selectedLang].experience_text_acerta_li_8;
    document.getElementById('experience_text_acerta_li_9').innerText = translations[selectedLang].experience_text_acerta_li_9;
    document.getElementById('experience_text_volvo_date').innerText = translations[selectedLang].experience_text_volvo_date;
    document.getElementById('experience_text_volvo_li_1').innerText = translations[selectedLang].experience_text_volvo_li_1;
    document.getElementById('experience_text_volvo_li_2').innerText = translations[selectedLang].experience_text_volvo_li_2;
    document.getElementById('experience_text_volvo_li_3').innerText = translations[selectedLang].experience_text_volvo_li_3;
    document.getElementById('experience_text_volvo_li_4').innerText = translations[selectedLang].experience_text_volvo_li_4;
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
    document.getElementById('projects_text_h1').innerText = translations[selectedLang].projects_text_h1;
    document.getElementById('projects_text_p').innerText = translations[selectedLang].projects_text_p;
    document.getElementById('projects_text_note').innerText = translations[selectedLang].projects_text_note;
    document.getElementById('projects_text_li1').innerText = translations[selectedLang].projects_text_li1;
    document.getElementById('projects_text_li2').innerText = translations[selectedLang].projects_text_li2;
    document.getElementById('projects_text_li3').innerText = translations[selectedLang].projects_text_li3;
    document.getElementById('projects_text_p_video').innerText = translations[selectedLang].projects_text_p_video;
    document.getElementById('projects_text_p_2').innerText = translations[selectedLang].projects_text_p_2;
    document.getElementById('projects_text_note_2').innerText = translations[selectedLang].projects_text_note_2;
    document.getElementById('projects_text_li1_2').innerText = translations[selectedLang].projects_text_li1_2;
    document.getElementById('projects_text_li2_2').innerText = translations[selectedLang].projects_text_li2_2;
    document.getElementById('projects_text_p_video_2').innerText = translations[selectedLang].projects_text_p_video_2;
    document.getElementById('experience_text_h3_1').innerText = translations[selectedLang].experience_text_h3_1;
    document.getElementById('experience_text_personal_li_1').innerText = translations[selectedLang].experience_text_personal_li_1;
    document.getElementById('experience_text_personal_date_1').innerText = translations[selectedLang].experience_text_personal_date_1;


}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize default language
    const langSwitcher = document.getElementById('languageSwitcher');
    langSwitcher.value = 'en'; // Default language
    changeLanguage();

    // Add event listener for language change
    langSwitcher.addEventListener('change', changeLanguage);
});

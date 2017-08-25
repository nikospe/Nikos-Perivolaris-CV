var app = angular.module('singlePage', ["ngRoute"]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        template : "<main></main>"
    })
    .when("/myskills", {
        template : '<my-skills><my-skills>'
    })
    .when("/projects", {
        template : '<projects></projects>'
    })
    .when("/contact", {
        template : '<contact></contact>'
    });

}]);

const SKILLS = [{'name': 'Web Developer', 'value': '80%'},
                {'name': 'Software Development', 'value': '70%'},
                {'name': 'Databases', 'value': '90%'},
                {'name': 'Linux', 'value': '70%'},
                {'name': 'Information Security', 'value': '60%'},
                {'name': 'Technical Support', 'value': '90%'},
                {'name': 'Networking', 'value': '70%'}];
const RECENT_PROJECTS = [{'name': 'Mobile eshop', 'text': 'This eshop is for university work.' 
                            +'Programming languages: '
                            +'HTML5, CSS3, Bootstrap, JavaScript, Jquery, ajax, JSON format, '
                            +'Angularjs 1.6, PHP, SQL. '
                            +'It is fully responsive for mobiles. '
                            +'Find it in online here: http://yourmobileshop.byethost16.com/index.html.',
                            'link': 'https://github.com/nikospe/mobile-eshop'},
                        {'name': 'Calculator with AngulaJS', 'text': 'Calculator is a web application'
                            +'made with Angular and also has a currency converter made with fixer.io'
                            +'api. Responsive design.', 'link': 'https://github.com/nikospe/calculator-with-angular'},
                        {'name': 'Tower of Hanoi', 'text': 'Tower of Hanoi is a web application'
                            +'made with JavaScript only,'
                            +'that is a Graphic representation of Tower of Hanoi'
                            +'abd the times taken until its solution',
                            'link': 'https://github.com/nikospe/tower-of-hanoi'}];
const MORE_PROJECTS = [{'name': 'Multy Api Url Shortener', 'text': 'A back-end application that'
                            +'get a URL and the API that client want to use and send the shortened link'
                            +'by the selected API',
                            'link': 'https://github.com/nikospe/multi-api-urlshortener'},
                        {'name': 'Thesis', 'text': 'A Full stack web site for rating products and services'
                            +'and also provides the stores and companies and their locations at google maps.'
                            +'Made with: HTML5,CSS3, BOOTSTRAP, JavaScript, JQUERY, AJAX, JSON, PHP, SQL)'
                            +'Find it online here: http://nikospergm.000webhostapp.com/',
                            'link': 'https://github.com/nikospe/thesis'}];
const OTHER_PROJECTS = [{'name': 'Stock Manager', 'text': 'University project. Its an administrator'
                            +'system for a bycicle shop that manage the clients orders. Made with C',
                            'link': 'https://github.com/nikospe/stock_manager'},
                            {'name': 'Tic Tac Toe', 'text': 'University project. its the tic tac toe 4X4'
                            +'game, playing with computer or another player made with C',
                            'link': 'https://github.com/nikospe/tic_tac_toe_x4'},
                            {'name': 'Todo List', 'text': 'Its a project just for learning DJANGO'
                            +'framework for python.',
                            'link': 'https://github.com/nikospe/testing-django'}];
const LAST_PROJECTS = [{'name': 'Telecommunication Enterprise', 'text': 'University project'
                            +'Fully-featured internet/intranet platform in Java2EE.'
                            +'Eshop and intranet for administrators',
                            'link': 'https://github.com/nikospe/telecommunication_enterprise'},
                        {'name': 'Booking manager', 'text': 'University project for booking routes'
                            +'mede with Java GUI',
                            'link': 'https://github.com/nikospe/booking-manager'}];                            
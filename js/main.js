class MainCtrl  {
    constructor () {
        this.recentProjects = [{'name': 'Mobile eshop', 'text': 'This eshop is for university work.' 
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
                            'link': 'https://github.com/nikospe/tower-of-hanoi'}];;
        this.moreProjects = [{'name': 'Multy Api Url Shortener', 'text': 'A back-end application that'
                            +'get a URL and the API that client want to use and send the shortened link'
                            +'by the selected API',
                            'link': 'https://github.com/nikospe/multi-api-urlshortener'},
                          {'name': 'Thesis', 'text': 'A Full stack web site for rating products and services'
                            +'and also provides the stores and companies and their locations at google maps.'
                            +'Made with: HTML5,CSS3, BOOTSTRAP, JavaScript, JQUERY, AJAX, JSON, PHP, SQL)'
                            +'Find it online here: http://nikospergm.000webhostapp.com/',
                            'link': 'https://github.com/nikospe/thesis'}];;
    }
}

app.component('main', {
    bindings: {
    },
    template: `
            <!-- Responsive slider - START -->
            <div class="slider">
                <div class="container">
                    <div class="row">
                        <div class="responsive-slider" data-spy="responsive-slider" data-autoplay="true">
                            <div class="slides" data-group="slides">
                                <ul>
                                    <li>
                                        <div class="slide-body" data-group="slide">
                                            <img src="img/2a.jpg" alt="">						
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Responsive slider - END -->
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="contents">
                            <h2>Sofware engineer</h2>
                            <p>Technology enthusiast. I never stop learning new technologies. I love teamwork.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="recent">
                        <button class="btn-primarys"><h3>My Recent Projects</h3></button>
                        <hr>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="content">
                        <div ng-repeat="project in $ctrl.recentProjects" class="col-md-4">
                            <div class="wow flipInY" data-wow-offset="0" data-wow-delay="0.4s">
                                <div class="align-center">
                                    <h4>{{project.name}}</h4>					
                                    <div class="icon">
                                        <i class="fa fa-desktop fa-3x"></i>
                                    </div>
                                    <p class="fix-overflow">
                                        {{project.text}}
                                    </p>
                                    <div class="ficon">
                                        <a href="{{project.link}}" alt="">Learn more</a> <i class="fa fa-long-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="box">
                        <div ng-repeat="project in $ctrl.moreProjects" class="col-md-6">
                            <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.8s">
                                <div class="align-center">
                                    <h4>{{project.name}}</h4>					
                                    <div class="icon">
                                        <i class="fa fa-laptop fa-3x"></i>
                                    </div>
                                    <p class="fix-overflow">
                                        {{project.text}}
                                    </p>
                                    <div class="ficon">
                                        <a href="{{project.link}}" alt="">Learn more</a> <i class="fa fa-long-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
            <div class="container">
                <div class="row">
                    <hr>
                </div>
            </div>`,
    controller : MainCtrl
});
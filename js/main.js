class MainCtrl  {
    constructor () {
        this.recentProjects = RECENT_PROJECTS;
        this.moreProjects = MORE_PROJECTS;
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
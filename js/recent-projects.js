class RecentProjectsCtrl {
    constructor () {
        this.recentProjects = RECENT_PROJECTS;
        this.moreProjects = MORE_PROJECTS;
    }
}

app.component('recentProjects', {
    bindings: {
    },
    template: `<div class="container">
                    <div class="row">
                        <div class="content">
                            <div ng-repeat="project in $ctrl.recentProjects" class="col-md-4">
                                <div class="wow flipInY" data-wow-offset="0" data-wow-delay="0.4s">
                                    <div class="align-center fix-height">
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
                                    <div class="align-center fix-height">
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
                </div>`,
        controller : RecentProjectsCtrl
} );
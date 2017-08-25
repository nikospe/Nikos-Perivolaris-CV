class ProjectsCtrl {
    constructor () {
    }
}

app.component('projects', {
    bindings : {
    },
    template : `
            <div class="container">
                <div class="row">
                    <div class="recent">
                        <button class="btn-primarys"><h3>My projects</h3></button>
                        <hr>
                    </div>
                </div>
            </div>
            <recent-projects></recent-projects>
            <other-projects></other-projects>            
            <section class="portfolio">
                <div class="container">                    
                    <div class="row">
                        <h3 class="black">Lets see some of my projects</h3>
                        <hr>
                        <h3 class="black">Mobile Eshop</h3>                        
                        <h5 class="black">For desktops</h5>
                        <div class="popup-gallery">
                            <div ng-repeat="count in [1,2,3]" class="col-md-4">
                                <img src="img/projects/mob-shop-{{count}}.png" class="img-responsive"alt="" />			
                            </div>
                        </div>
                    </div>
                </div>	
                <div class="box2">
                    <div class="container">
                        <div class="row">
                            <h5 class="black">For mobiles</h5>
                            <div class="popup-gallery">			
                                <div ng-repeat="count in [4,5,6]" class="col-md-4">					
                                <img src="img/projects/mob-shop-{{count}}.png" class="img-responsive"alt="" />                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>	
                <div class="container">                    
                    <div class="row">
                        <h3 class="black">Tower of Hanoi</h3>
                        <div class="popup-gallery">
                            <div ng-repeat="count in [1,2,3]" class="col-md-4">
                                <img src="img/projects/toh-{{count}}.png" class="img-responsive"alt="" />			
                            </div>
                        </div>
                    </div>
                </div>	
                <div class="container">                    
                    <div class="row">
                        <h3 class="black">Web Calculator with AngulaJS</h3>
                        <h5 class="black">For desktops</h5>
                        <div class="popup-gallery">
                            <div class="col-md-4">
                                <img src="img/projects/calc-1.png" class="img-responsive"alt="" />			
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">                    
                    <div class="row">
                        <h5 class="black">For Mobiles</h5>
                        <div class="popup-gallery">
                            <div class="col-md-4">
                                <img src="img/projects/calc-2.png" class="img-responsive"alt="" />			
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">                    
                    <div class="row">
                        <h5 class="black">Thesis</h5>
                        <h3 class="black">For Desktops</h3>
                        <div class="popup-gallery">
                            <div ng-repeat="count in [3,4]" class="col-md-4">
                                <img src="img/projects/thesis-{{count}}.png" class="img-responsive"alt="" />			
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">                    
                    <div class="row">
                        <h3 class="black">For Mobiles</h3>
                        <div class="popup-gallery">
                            <div ng-repeat="count in [1,2]"class="col-md-4">
                                <img src="img/projects/thesis-{{count}}.png" class="img-responsive"alt="" />			
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="container">
                <div class="row">
                    <hr>
                </div>
            </div>`,
    controller: ProjectsCtrl
})
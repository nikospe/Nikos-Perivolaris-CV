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
                        <div class="popup-gallery">
                            <div class="col-md-3">
                                <a href="img/portfolio/1.jpg" title="The Cleaner"><img src="img/portfolio/1.jpg" class="img-responsive"alt="" /></a>				
                            </div>
                            <div class="col-md-3">					
                                <a href="img/portfolio/2.jpg" title="The Cleaner"><img src="img/portfolio/2.jpg" class="img-responsive"alt="" /></a>
                            </div>
                            <div class="col-md-3">
                                <a href="img/portfolio/3.jpg" title="The Cleaner"><img src="img/portfolio/3.jpg" class="img-responsive"alt="" /></a>
                            </div>
                            <div class="col-md-3">
                                <a href="img/portfolio/4.jpg" title="The Cleaner"><img src="img/portfolio/4.jpg" class="img-responsive"alt="" /></a>				
                            </div>
                        </div>
                    </div>
                </div>	
                <div class="box2">
                    <div class="container">
                        <div class="row">
                            <div class="popup-gallery">			
                                <div class="col-md-3">					
                                    <a href="img/portfolio/5.jpg" title="The Cleaner"><img src="img/portfolio/5.jpg" class="img-responsive"alt="" /></a>
                                </div>
                                <div class="col-md-3">
                                    <a href="img/portfolio/6.jpg" title="The Cleaner"><img src="img/portfolio/6.jpg" class="img-responsive"alt="" /></a>
                                </div>
                                <div class="col-md-3">
                                    <a href="img/portfolio/7.jpg" title="The Cleaner"><img src="img/portfolio/7.jpg" class="img-responsive"alt="" /></a>
                                </div>
                                <div class="col-md-3">					
                                    <a href="img/portfolio/8.jpg" title="The Cleaner"><img src="img/portfolio/8.jpg" class="img-responsive"alt="" /></a>
                                </div>
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
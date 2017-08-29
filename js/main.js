class MainCtrl  {
    constructor () {
       
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
                                            <img src="img/013.jpg" class="img-responsive" alt="">						
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
            <recent-projects></recent-projects>
            <div class="container">
                <div class="row">
                    <hr>
                </div>
            </div>`,
    controller : MainCtrl
});
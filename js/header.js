app.component('myHeader', {
    bindings : {

    },
    template : `
            <header>
                <div class="container" >
                    <div class="row">
                        <nav class="navbar navbar-default" role="navigation">
                            <div class="container-fluid">
                                <div class="navbar-header">
                                    <img id="my-image" src="img/my-image.png">
                                    <div class="navbar-brand">
                                        <a href="index.html"><h1 id="navbar-h1">Nikos Perivolaris</h1></a>
                                    </div>
                                </div>
                                <div class="menu">
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li role="presentation"><a href="#!/" id="navtabs-li">Home</a></li>
                                        <li role="presentation"><a href="#!/myskills" id="navtabs-li">My skills</a></li>
                                        <li role="presentation"><a href="#!projects" id="navtabs-li">Projects</a></li>
                                        <li role="presentation"><a href="#!contact" id="navtabs-li">Contact me</a></li>						
                                    </ul>
                                </div>
                            </div>			
                        </nav>
                    </div>
                </div>
            </header>`
});
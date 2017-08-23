class ContactCtrl {
    constructor () {

    }

    sendMeMessage() {
        alert('Thanks for your message!');
        window.location.reload();
    }
}

app.component('contact', {
    bindings : {

    },
    template : `
            <div class="container">
                <div class="row">
                    <div class="recent">
                        <button class="btn-primarys"><h3>Contact</h3></button>
                        <hr>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="recent">
                            <button class="btn-primarys"><h3>Send me a message</h3></button>
                        </div>		
                        <form role="form">
                            <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                            </div>					
                            <textarea class="form-control" rows="8"></textarea>
                            <button ng-click="$ctrl.sendMeMessage()" type="submit" class="btn btn-default">Submit</button>
                        </form>
                    </div>			
                    <div class="col-lg-6">
                        <div class="recent">
                            <button class="btn-primarys"><h3>Get in touch with me</h3></button>
                        </div>
                        <div class="contact-area">
                            <h4>Location:</h4>Greece, Athens<br>
                            <h4>Telephone:</h4>6979017768</br>
                            <h4>Email:</h4>nikosper.gm@gmail.com
                            <h4>Github:</h4>https://github.com/nikospe
                            <h4>Linkedin:</h4>https://www.linkedin.com/in/nikos-perivolaris-79399a131
                        </div>										
                    </div>			
                </div>
            </div>	
            <div class="container">
                <div class="row">
                    <hr>
                </div>
            </div>`,
    controller: ContactCtrl
});
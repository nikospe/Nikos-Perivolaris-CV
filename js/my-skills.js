class MySkillsCtrl {
	constructor () {
		this.skills = [{'name': 'Web Developer', 'value': '80%'},
						{'name': 'Software Development', 'value': '70%'},
						{'name': 'Databases', 'value': '90%'},
						{'name': 'Linux', 'value': '70%'},
						{'name': 'Information Security', 'value': '60%'},
						{'name': 'Technical Support', 'value': '90%'},
						{'name': 'Networking', 'value': '70%'}]
	}
	
	cancelEvent (e) {
		e.preventDefault();
	}
}

app.component('mySkills', {
    bindings: {
    },
    template: `    
			<div class="container">
				<div class="row">
					<div class="recent">
						<button class="btn-primarys"><h3>Skills</h3></button>
						<hr>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<div class="page-header">
							<div class="blog">
								<h3>Harokopio University of Athens</h3>
								<img src="img/xarokopeio.png" class="img-responsive"alt="" />			
								<h3>Harokopio University of Athens (BSc) Informatics and Telematics</h3>
								<h5>Some Courses</h5>
								<ul>
									<li><p>Web Programming</p></li>
									<li><p>Operating Systems</p></li>
									<li><p>Image prossecing</p></li>
									<li><p>Object Oriented Programming</p></li>
									<li><p>Databases</p></li>
									<li><p>Information System Security</p></li>
									<li><p>Unix</p></li>
									<li><p>System and software analysis</p></li>
								</ul>
							</div>
						</div>				
					</div>
					<div class="col-md-4">				
						<ul class="list-group">
							<h5><strong>Skills</strong></h5>
							<li ng-repeat="skill in $ctrl.skills" class="list-group-item">
								<span class="badge">{{skill.value}}</span>
									<a href="#" alt="">{{skill.name}}</a>
							</li>
						</ul>
					</div>
					<div class="col-md-4">	
						<div class="popular-tags">
							<h5>Languages</h5>
							<ul class="tags">
								<li><a ng-click="$ctrl.cancelEvent($event)" href="#">Greek</a></li>
								<li><a ng-click="$ctrl.cancelEvent($event)" href="#">English</a></li>
							</ul>
						</div>				
					</div>
					<div class="col-md-4">	
						<div class="popular-tags">
							<h5>Inerests</h5>
							<ul class="tags">
								<li><a ng-click="$ctrl.cancelEvent($event)" href="#">Web development</a></li>
								<li><a ng-click="$ctrl.cancelEvent($event)" href="#">Martial Arts</a></li>
								<li><a ng-click="$ctrl.cancelEvent($event)" href="#">Music</a></li>
							</ul>
						</div>				
					</div>						
				</div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<div class="page-header">
							<div class="blog">
								<h3>Work Experience</h3>
								<img src="img/work-experience.png" class="img-responsive"alt="" />			
								<h3>Software Developer</h3>
								<h5>Freelancer</h5>
								<ul>
									<li><p>Web development</p></li>
									<li><p>Open source contribution</p></li>
									<li><p>Software development</p></li>
									<li><p>Pentester</p></li>
								</ul>
								<h3>Technical Support</h3>
								<h5>Greek army (Special Forces)</h5>
								<ul>
									<li><p>Network troubleshooting</p></li>
									<li><p>OS troubleshooting</p></li>
								</ul>
								<h3>Technical Support</h3>
								<h5>Family business</h5>
								<ul>
									<li><p>Computers Technical Support</p></li>
									<li><p>Mobiles Technical Support</p></li>
								</ul>
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
	controller : MySkillsCtrl
});
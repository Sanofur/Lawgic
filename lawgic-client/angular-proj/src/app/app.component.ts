import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router 	} from "@angular/router"
import { RestService } from './rest.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
/*

 @Input() productData = {username: '',password: ''};

title = 'LAWGIC';
    registerForm: FormGroup;
    submitted = false;

  constructor(public rest: RestService, private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit() {

  	 this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
  }

  get f() { return this.registerForm.controls; }

onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

//console.log(this.registerForm);
        var username = this.registerForm.value.firstName;
        var pwd = this.registerForm.value.password;

        this.productData = {username: username,password: pwd};

//console.log(this.productData);
   		this.addProduct();
       // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }


    addProduct() {
    	this.rest.addProduct(this.productData).subscribe((result)=>{
    		console.log(result);
    		if (result.length != 0) {
    			//alert('SUCCESS!! :-)\n\n' + JSON.stringify(result));
    			this.router.navigate(['/','cases']).then(nav => {
    				console.log(nav);
    			}, err => {
    				console.log(err);
    			});
    		}else{
    			alert('FAILED!! :-)\n\n' + JSON.stringify(result));
    		}
    		//this.router.navigate(['/login/login/'+result._id]);
    	}, (err) => {
    		console.log(err);
    	});
    	
    }*/

 }

import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from './rest.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {


 @Input() productData = {username: 'sano',password: 'sano123'};

title = 'LAWGIC';
    registerForm: FormGroup;
    submitted = false;

  constructor(public rest: RestService, private formBuilder: FormBuilder) {

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

   this.addProduct();
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }


    addProduct() {
    	this.rest.addProduct(this.productData).subscribe((result)=>{
    		console.log(result);
    		//this.router.navigate(['/login/login/'+result._id]);
    	}, (err) => {
    		console.log(err);
    	});
    	
    }

 }

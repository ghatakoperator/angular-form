import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';






@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
checkOut:boolean = false;
  constructor() {}
  ngOnInit(): void {
  }
 
  registerForm = new FormGroup({
    firstname: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    lastname: new FormControl("",[Validators.required, Validators.pattern("[a-zA-Z].*")]),
    country: new FormControl("+91",[Validators.required]),
    checkOut: new FormControl(false, [Validators.requiredTrue]),
    email: new FormControl("",[Validators.required, Validators.email]),
    mobileno: new FormControl("",[Validators.required, Validators.pattern(/^\d{10}$/)]),
   
   
  });
  
  
  
  callSomeLogic() {
//    
console.log(this.registerForm);
alert(JSON.stringify(this.registerForm.value, null, 2));

}

get FirstName(): FormControl{
  return this.registerForm.get("firstname") as FormControl;
}
get LastName(): FormControl{
  return this.registerForm.get("lastname") as FormControl;
}
get country(): FormControl{
  return this.registerForm.get("country") as FormControl;
}
get CheckOut(): FormControl {
  return this.registerForm.get("checkOut") as FormControl;
}
get Email(): FormControl {
  return this.registerForm.get("email") as FormControl;
}
get MobileNo(): FormControl {
  return this.registerForm.get("mobileno") as FormControl;
}


};

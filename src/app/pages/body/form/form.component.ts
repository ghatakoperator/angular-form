import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    firstname: new FormControl("", [Validators.required, Validators.minLength(2)]),
    lastname: new FormControl("",[Validators.required]),
    country: new FormControl("",[Validators.required]),
    checkOut: new FormControl(false, [Validators.requiredTrue]),
  
   
  });
  
  
  
  callSomeLogic() {
//    
console.log(this.registerForm);

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

};

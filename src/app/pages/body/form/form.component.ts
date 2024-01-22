import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
required: any;

  constructor() {}
  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    firstname: new FormControl("", [Validators.required, Validators.minLength(2)]),
    lastname: new FormControl("",[Validators.required]),
    country: new FormControl(""),
    // checkbox: new FormControl("");
  });
  // form: FormGroup;
//   userData = { firstName: '', lastName: '', country: '' };
//   inputValue: string="";
//   showAlert: boolean = false;
// firstName: any;
// lastName: any;
// country: any;
//   // someValue:string="";
//   // someValues:Array<string> = new Array<string>();
//   constructor(private fb: FormBuilder) {
//     // this.form = this.fb.group({
//     //   name: ['', Validators.required]
//     // });
//   }
  callSomeLogic() {
//     console.log(this.userData);
// //    this.someValues.push(this.someValue);
// //    this.someValue="";
// //    if(this.someValue == ""){
// //     alert("the name is invalid");
// //    }else{
// // alert("form has been submitted")
// //    }
   
// //   }
// // if (this.form.valid) {
// //   this.inputValue = this.form.value.name;
// //   this.showAlert = false;
// // } else {
// //   this.showAlert = true;
// // }

// //   }
//   }
console.log(this.registerForm.get( "firstname"));
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

// get CheckBox(): FormControl{
//   return this.registerForm.get("checkbox") as FormControl;
// }
};

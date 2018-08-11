import { Component, OnInit } from '@angular/core';
// import { ICarouselConfig, AnimationConfig } from 'angular4-carousel'
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators }        from '@angular/forms';
import { Http, Response,Headers } from '@angular/http';
import {AjaxCalls} from '../utils/ajaxCalls';
import {AppConstants} from '../utils/appConstants';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  generatorForm : FormGroup;
  keyForm : FormGroup;

  constructor(private http:Http, fBuilder:FormBuilder,private router:Router ) {

   }

  ngOnInit() {
  }



public imageSources: string[] = [

]


hireGenerator(){

  console.log(this.generatorForm.valid);

  console.log(this.generatorForm.controls.fullName.value)

    var reqjson=JSON.stringify(
      {
        "name": this.generatorForm.controls.fullName.value,
        "contactNumber": this.generatorForm.controls.contactNumber.value,
        "city": this.generatorForm.controls.city.value,
        "state": this.generatorForm.controls.state.value,
        "zipCode": this.generatorForm.controls.zipCode.value,
        "address": this.generatorForm.controls.address.value,
        "enquiryType": "gen"
      
      });

    AjaxCalls.httpPostCall(reqjson,AppConstants.baseUrl+"/enquiry",this.http).subscribe(
      (data:any) => {  
        console.log(data);
      },
    (error:any)=>{
      console.log("error");},	
    ()=>console.log("finished")
  );

}

keyService(form){
  console.log(this.keyForm.controls.fullName.value)
  var formValues =form.value;
    var reqjson=JSON.stringify(
      {
        "name": formValues.fullName,
        "contactNumber":  formValues.contactNumber,
        "city":  formValues.city,
       // "state": this.keyForm.controls.state.value,
        "zipCode":  formValues.zipCode,
       // "address": this.keyForm.controls.address.value,
       "vehicleType":  formValues.vehicleType,
       "vehicleNumber":  formValues.vehicleNumber,
        "enquiryType": "keys"
      
      });
console.log(reqjson);
    AjaxCalls.httpPostCall(reqjson,AppConstants.baseUrl+"/enquiry",this.http).subscribe(
      (data:any) => {  
        console.log(data);
      },
    (error:any)=>{
      console.log("error");},	
    ()=>console.log("finished")
  );

}

onView(a)
{
  console.log(a);
  this.router.navigate(['/']);
}


}

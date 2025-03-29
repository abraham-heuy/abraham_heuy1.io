import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  onlogin() {  

    // Replace 'your_app_id' with your actual app ID  
    const appId = '70645';  
    const redirectUrl = `https://oauth.deriv.com/oauth2/authorize?app_id=${appId}`;  

    // Redirect to the login page  
    window.location.href = redirectUrl;  
}  
onregister(){
  const redirectUrl = `https://hub.deriv.com/tradershub/signup`; 
  window.location.href = redirectUrl; 

}

}

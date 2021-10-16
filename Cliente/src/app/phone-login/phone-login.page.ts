import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import firebase from 'firebase/app';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.page.html',
  styleUrls: ['./phone-login.page.scss'],
})
export class PhoneLoginPage implements OnInit {
  countryJson = environment.countryJson;
  otp= '';
  code: any;
  phoneNo: any;
  countryCode: any = '+91';
  showOTPInput= false;
  otpMessage= 'An OTP is sent to your number. You should receive it in 15 s';
  recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  confirmationResult: any;
  constructor(
    private alertController: AlertController,
    private authService: AuthenticateService
  ) { }

  ngOnInit() {
  }



  async ionViewDidEnter() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      size: 'visible',
      callback: (response) => {

      },
      'expired-callback': () => {
      }
    });
  }
  ionViewDidLoad() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      size: 'visible',
      callback: (response) => {

      },
      'expired-callback': () => {
      }
    });
  }

  countryCodeChange($event) {
    this.countryCode = $event.detail.value;
  }
  // Button event after the nmber is entered and button is clicked
  signinWithPhoneNumber($event) {
    console.log('country', this.recaptchaVerifier);

    if (this.phoneNo && this.countryCode) {
      this.authService.signInWithPhoneNumber(this.recaptchaVerifier, this.countryCode + this.phoneNo).then(
        success => {
          this.otpVerification();
        }
      );
    }
  }
  async showSuccess() {
    const alert = await this.alertController.create({
      header: 'Success',
      buttons: [
        {
          text: 'Ok',
          handler: (res) => {
            alert.dismiss();
          }
        }
      ]
    });
    alert.present();
  }
  async otpVerification() {
    const alert = await this.alertController.create({
      header: 'Enter OTP',
      backdropDismiss: false,
      inputs: [
        {
          name: 'otp',
          type: 'text',
          placeholder: 'Enter your otp',
        }
      ],
      buttons: [{
        text: 'Enter',
        handler: (res) => {
          this.authService.enterVerificationCode(res.otp).then(
            userData => {
              this.showSuccess();
              console.log(userData);
            }
          );
        }
      }
      ]
    });
    await alert.present();
  }

}

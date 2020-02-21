import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor(
    private alertController: AlertController
  ) { }

  ngOnInit() {

    this.titulo = 'alert page'
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: ( blah ) => {
            console.log('Cancelar: ', blah);
          }
        },
        {
          text: 'OK',
          handler: (blah) => {
            console.log('OK ', blah)
          }
        }
      ]
    });

    await alert.present();
  }

  async presentInput() {
    const alert = await this.alertController.create({
      header: 'Input',
      inputs: [
        {
          name: 'input',
          type: 'text',
          placeholder: 'Input',
          value: this.titulo
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (blah) => {
            console.log('Confirm Ok', blah);
            if ( blah.input) {
              this.titulo = blah.input;
            }
          }
        }
      ]
    });

    await alert.present();
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FireDataProvider } from '../../providers/fire-data/fire-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private fireProvider: FireDataProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.calculateTotalScore();
  }
  calculateTotalScore() {
    this.fireProvider.getScoreRef().on('value', scoreRef => {
      let scoreData = scoreRef.val();
      console.log('scoreData : ', scoreData);

      const keys = Object.keys(scoreData);
      console.log('keys ', keys);

      if (!keys) {
        this.fireProvider.dragonWarriors = 0;
        this.fireProvider.avengers = 0;
        this.fireProvider.unicorns = 0;
      }

      for (let k = 0; k < keys.length; k++) {
        console.log('k : ', k);
        this.fireProvider.dragonWarriors += scoreData[keys[k]].scores.team_citrus_dragon.total;
        this.fireProvider.avengers += scoreData[keys[k]].scores.team_citrus_avenger.total;
        this.fireProvider.unicorns += scoreData[keys[k]].scores.team_citrus_unicorns.total;
      }
      console.log('this.fireProvider.dragonWarriors : ', this.fireProvider.dragonWarriors);
      console.log('this.fireProvider.avengers : ', this.fireProvider.avengers);
      console.log('this.fireProvider.unicorns : ', this.fireProvider.unicorns);
    });
  }

}

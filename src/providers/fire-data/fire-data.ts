import { Injectable } from '@angular/core';
import firebase from 'firebase';


@Injectable()
export class FireDataProvider {
  dragonWarriors = 0;  
  avengers = 0;
  unicorns = 0;

  constructor() {
    console.log('Hello FireDataProvider Provider');
  }

  getScoreRef() {
    return firebase
      .database()
      .ref('score-sports');
  }
  getEventRef() {
    return firebase
      .database()
      .ref('event-sports');
  }
  getTeamRef() {
    return firebase
      .database()
      .ref('team-sports');
  }

}

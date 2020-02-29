import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayAreaService {
  // event that is triggered when user is logged out
  public removePlayerEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }
}

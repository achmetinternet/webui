import { RestService } from '../../../services';
import { Injectable, EventEmitter, Output } from '@angular/core'

@Injectable() export class
BaMsgCenterService {
  private alerts: Array<Object> = [];
  private messages: Array<Object> = [];
  @Output() onAlert = new EventEmitter<boolean>();

  constructor(private rest: RestService) {
  }

  public getMessages() : Array<Object> {
    return this.messages;
  }

  public getAlerts() : Array<Object> {
    return this.alerts;
  }

  public fetchAlerts() : void {
    this.rest.get( "system/alert/", {}).subscribe((res) => {
      this.alerts = res.data;
      this.onAlert.emit(true);
    });
  }

};

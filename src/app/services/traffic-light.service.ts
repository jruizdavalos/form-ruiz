import { Injectable } from '@angular/core';
import { interval, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrafficLightService {
  public lights = new Subject<string>()
  public lights$ = this.lights.asObservable()
  private lastValue: string = 'verde'

  constructor() {
    this.lights.subscribe((valor) => (this.lastValue = valor))
    interval(1000).subscribe(() => this.lastValue === 'verde' ? this.lights.next('rojo') : this.lights.next('verde'))
  }
}

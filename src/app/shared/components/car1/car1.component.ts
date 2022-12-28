import { Component, OnDestroy } from '@angular/core';
import { TrafficLightService } from '../../../services/traffic-light.service';

@Component({
  selector: 'app-car1',
  templateUrl: './car1.component.html',
  styleUrls: ['./car1.component.css']
})
export class Car1Component {

  constructor(public trafficLightService: TrafficLightService) {

  }

}

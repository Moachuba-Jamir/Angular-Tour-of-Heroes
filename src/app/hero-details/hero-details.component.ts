import { Component } from '@angular/core';
import { Hero } from '../hero';
import { Input } from '@angular/core';
@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent {

  @Input() hero?: Hero;
}

import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common/common.service';
import { CityDto } from '../../models/City.model';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //Service Inject 
  private commonService = inject(CommonService);
  private router = inject(Router);
  // Variable Declaration 
  from = signal<number|1>(1);
  to = signal<number|2>(2);
  date = signal<string>(new Date().toISOString().split('T')[0]);

  cities = signal<CityDto[]>([]);
  features = signal<any[]>([]);
  howItWorks = signal<any[]>([]);
  popularRoutes = signal <any[]> ([]);
  partners = signal <any[]> ([]);
  testimonials = signal <any[]> ([]);
  //

  

  

  

  stars = [1, 2, 3, 4, 5];


  constructor() {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.cities.set(this.commonService.getCities());
    this.features.set(this.commonService.getFeatures());
    this.howItWorks.set(this.commonService.getHowitWork());
    this.popularRoutes.set(this.commonService.getpopularRoutes());
    this.partners.set(this.commonService.getPaatner());
    this.testimonials.set(this.commonService.getTestimonial());
  }
  
  swapRoutes(): void {
    const currentFrom = this.from();
    console.log(currentFrom);
    this.from.set(this.to());
    this.to.set(currentFrom);
  }


  searchBus() {
    // Later you can replace this with your BookingService
    console.log({
      from: this.from,
      to: this.to,
      date: this.date
    });

    //this.router.navigate(['/search']);
  }


  goToSearch(): void {
    this.router.navigate(['/search']);
  }


  selectRoute(route: any): void {
    this.from = route.from;
    this.to = route.to;
    this.router.navigate(['/search']);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {

  cities = [
    {id:1,name:'Dhaka'},
    {id:2,name:'Chattogram'},
    {id:3,name:"Cox's Bazar"},
    {id:4,name:'Sylhet'},
    {id:4,name:'Khulna'},
    {id:5,name:'Rajshahi'},
    {id:6,name:'Barishal'}
  ];
  features = [
    {
      icon: 'bi-shield-check',
      title: 'Verified Operators',
      text: 'Every operator is verified for safety, hygiene and on-time performance.'
    },
    {
      icon: 'bi-seat-fill',
      title: 'Choose Your Seat',
      text: 'Pick your preferred seat with our live seat map before booking.'
    },
    {
      icon: 'bi-piggy-bank',
      title: 'Best Price Guarantee',
      text: 'Competitive fares with regular deals and cashback offers.'
    },
    {
      icon: 'bi-credit-card-2-front',
      title: 'Secure Payment',
      text: 'Pay securely with bKash, Nagad, Rocket, cards or net banking.'
    },
    {
      icon: 'bi-headset',
      title: '24/7 Support',
      text: 'Our support team is always ready to assist before and during travel.'
    },
    {
      icon: 'bi-arrow-counterclockwise',
      title: 'Easy Cancellation',
      text: 'Flexible cancellation and instant refunds to your wallet.'
    }
  ];

  popularRoutes = [
    {
      from: 'Dhaka',
      to: 'Chattogram',
      price: 'from ৳950',
      trips: '45+ daily'
    },
    {
      from: 'Dhaka',
      to: "Cox's Bazar",
      price: 'from ৳1100',
      trips: '30+ daily'
    },
    {
      from: 'Dhaka',
      to: 'Sylhet',
      price: 'from ৳800',
      trips: '28+ daily'
    },
    {
      from: 'Dhaka',
      to: 'Khulna',
      price: 'from ৳750',
      trips: '22+ daily'
    },
    {
      from: 'Dhaka',
      to: 'Rajshahi',
      price: 'from ৳700',
      trips: '18+ daily'
    },
    {
      from: 'Dhaka',
      to: 'Barishal',
      price: 'from ৳650',
      trips: '15+ daily'
    }
  ];
  howItWorks = [
    {
      number: 1,
      icon: 'bi-search',
      title: 'Search Buses',
      description: 'Select your route and journey date.'
    },
    {
      number: 2,
      icon: 'bi-person-wheelchair',
      title: 'Select Seats',
      description: 'Pick your preferred seats from the live seat map.'
    },
    {
      number: 3,
      icon: 'bi-person-vcard',
      title: 'Passenger Info',
      description: 'Enter passenger details and boarding point.'
    },
    {
      number: 4,
      icon: 'bi-wallet2',
      title: 'Pay & Confirm',
      description: 'Pay securely and receive instant confirmation.'
    }
  ];

  partners = [
    'Green Line',
    'Hanif',
    'Saint Martin',
    'Shyamoli',
    'Desh Travels',
    'Ena',
    'Eagle Line'
  ];

  testimonials = [
    {
      name: 'Fatema Akter',
      route: 'Dhaka → Chattogram',
      initials: 'FA',
      text: 'Very smooth booking process. Sat in my preferred window seat and the coach was super clean. Love the live seat map!'
    },
    {
      name: 'Shakil Ahmed',
      route: "Dhaka → Cox's Bazar",
      initials: 'SA',
      text: 'Payment via bKash was instant and I received the ticket on my phone immediately. Highly recommend BusEase.'
    },
    {
      name: 'Rakib Hasan',
      route: 'Dhaka → Sylhet',
      initials: 'RH',
      text: 'Great discounts and the refund for my cancelled trip arrived the same day. Customer support responded within minutes.'
    }
  ];
  getCities() {
    return this.cities;
  }
  getFeatures() {
    return this.features;
  }

  getPopularRoute() {
    return this.popularRoutes;
  }

  getTestimonial() {
    return this.testimonials;
  }

  getPaatner() {
    return this.partners;
  }

  getHowitWork() {
    return this.howItWorks;
  }
  getpopularRoutes() {
    return this.popularRoutes;
  }
}

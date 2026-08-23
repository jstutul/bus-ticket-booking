import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private router = inject(Router);

  bookNow(): void{
    this.router.navigateByUrl("/");
  }
  signOut(): void{
    alert("logout");
    this.router.navigateByUrl("/");
  }
}

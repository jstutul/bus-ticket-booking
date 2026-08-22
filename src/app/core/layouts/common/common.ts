import { Component } from '@angular/core';
import { Navbar } from "../../shared/navbar/navbar/navbar";
import { Footer } from "../../shared/footer/footer/footer";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-common',
  imports: [Navbar, Footer, RouterOutlet],
  templateUrl: './common.html',
  styleUrl: './common.css',
})
export class Common {}

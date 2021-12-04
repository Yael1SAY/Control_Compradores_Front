import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productividad',
  templateUrl: './productividad.component.html',
  styleUrls: ['./productividad.component.css']
})
export class ProductividadComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    if(!this.authService.isAuthtenticated()){
      this.router.navigate(['/login']);
    }
  }

}

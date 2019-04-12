import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../core/services/customer.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

}

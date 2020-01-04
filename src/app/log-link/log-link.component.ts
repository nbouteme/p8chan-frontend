import { Component, OnInit } from '@angular/core';
import { AdminCapService } from '../admin-cap.service';

@Component({
  selector: 'app-log-link',
  templateUrl: './log-link.component.html',
  styleUrls: ['./log-link.component.css']
})
export class LogLinkComponent implements OnInit {

  constructor(private auth: AdminCapService) { }

  role: string;
  logged = false;
  ngOnInit() {
    this.logged = this.auth.isAuth();
    if (this.logged)
      this.role = this.auth.decodedtoken.role;
  }
}

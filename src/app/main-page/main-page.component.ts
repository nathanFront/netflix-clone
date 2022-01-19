import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../models/userInfo';
import { UserService } from '../services/userService';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  user: number = 1
  userInfoData: UserInfo = {} as UserInfo
  mainLoading: Boolean = true;
  constructor(private userInfoService: UserService) { }

  ngOnInit(): void {

    this.userInfoService.getUser(this.user).subscribe(result =>{
      this.userInfoData = result 
      this.mainLoading = false
    })
  }

  asIsOrder() {
    return 1;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
userId: number
user: User 
constructor(private route: ActivatedRoute, private userService: UserService){}
ngOnInit(): void {
  this.userId= this.route.snapshot.params['id'];

  this.user = new User();
  this.userService.getUserById(this.userId).subscribe(data => {
    this.user=data; 
  });
}


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent  implements OnInit{
  userId: number;
  user: User = new User();
constructor(private userService: UserService,
  private route: ActivatedRoute,
  private router: Router){}
  
ngOnInit(): void{
  this.userId = this.route.snapshot.params['userId'];
  this.userService.getUserById(this.userId).subscribe(data => {
    this.user = data;
  }, error => console.log(error));
  }

  onSubmit() {
    this.userService.updateUser(this.userId, this.user).subscribe(data => {
       this.goToUserList(); 
      
    } , error => console.log(error));
    
  }
  goToUserList(){
    this.router.navigate(['/users'])

  }
}

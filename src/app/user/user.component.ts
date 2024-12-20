import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  get imagePath() {
    return './assets/users/' + this.avatar;
  }
  onSelectUser() {}
}

// using signals to accept values, import (input) which is a special function not the @Input
// export class UserComponent {

// the values are read only
// avatar = input.required<>()=> no need for required value
// name = input.required<string>()
//  avatar = input() -< you can pass an initial value or not but you tell typescript the value to be undefined or set the value to bereceived
//    imagePath = computed({
//     return './assets/users/' + this.avatar();
//   })
//   onSelectUser() {}
// }

// whie using signals
// export class UserComponent {
//   selectedUser = signal(DUMMY_USERS[randomIndex]);
//   imagePath = computed(() => './assets/users/' + this.selectedUser().avatar);

//   onSelectUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);

//     console.log('clicked');
//   }
// }

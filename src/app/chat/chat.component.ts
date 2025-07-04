import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  groups = [
    { name: 'Groupe 1', messages: [] as string[] },
    { name: 'Groupe 2', messages: [] as string[] }
  ];

  selectedGroup = this.groups[0];
  newMessage = '';

  selectGroup(group: { name: string; messages: string[] }) {
    this.selectedGroup = group;
  }

  sendMessage() {
    const msg = this.newMessage.trim();
    if (msg) {
      this.selectedGroup.messages.push(msg);
      this.newMessage = '';
    }
  }
}

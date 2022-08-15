import { Component, OnInit, Input } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-message-panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['./message-panel.component.css'],
})
export class MessagePanelComponent implements OnInit {
  @Input() user: User;
  input: String = '';

  constructor(private socket: Socket) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.socket.emit('input', this.input);
    this.input = '';
  }

  displaySender(message: String, index: Number): void {}
}

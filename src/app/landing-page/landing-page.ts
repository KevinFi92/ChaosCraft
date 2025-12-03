import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgxGraphModule } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-landing-page',
  imports: [
    FormsModule,
    NgxGraphModule
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
  userInput: string = '';

  nodes = [
    { id: '1', label: 'Hackathon Project' },
    { id: '2', label: 'Team Meeting' },
    { id: '3', label: 'Develop Features' },
    { id: '4', label: 'Research AI Tools' },
  ];

  links = [
    { source: '1', target: '2' },
    { source: '1', target: '3' },
    { source: '1', target: '4' }
  ];

  getUserInput() {
    let input = this.userInput;



  }
}


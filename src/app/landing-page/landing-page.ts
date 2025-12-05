import {Component, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import cytoscape from 'cytoscape';


@Component({
  selector: 'app-landing-page',
  imports: [
    FormsModule,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
  userInput: string = '';
  @ViewChild('mindMap') mindMap: any;



  mindMapData: any = [
    { id: 1, label: 'Node 1'},
    { id: 2, label: 'Node 2'},
    { id: 3, label: 'Node 3'}
  ];

  cy: cytoscape.Core | undefined;

  ngAfterViewInit(): void {
    this.cy = cytoscape({
      container: this.mindMap.nativeElement,

      elements: this.mindMapData.map((node: any) => ({
        data: { id: node.id, label: node.label }
      }))
,

      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#90caf9',
            'label': 'data(label)',
            'shape': 'round-rectangle',
            'width': 100,
            'height': 40,
            'text-valign': 'center',
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 2,
            'line-color': '#1e88e5',
            'target-arrow-color': '#1e88e5',
            'target-arrow-shape': 'triangle'
          }
        }
      ],

      layout: {
        name: 'circle'
      }
    });
  }

  getUserInput() {
    let input = this.userInput;

  }

}


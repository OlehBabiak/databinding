import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{name: 'Test1', type: 'server', content: 'Test description'}];


  onServerAdded(serverData: { serverName: string, content: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.content
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.content
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }
}

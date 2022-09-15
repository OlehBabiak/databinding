import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output()
  serverCreated = new EventEmitter<{serverName: string, content: string}>();
  @Output()
  blueprintCreated = new EventEmitter<{serverName: string, content: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverName', {static: true}) serverName: ElementRef;
  @ViewChild('serverContent', {static: true}) serverContent: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName: this.newServerName,
  //     content: this.newServerContent});
  // }
  //
  // onAddBlueprint() {
  //   this.blueprintCreated.emit({
  //     serverName: this.newServerName,
  //     content: this.newServerContent});}
  //

  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      content: contentInput.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      content: contentInput.value});
  }

  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName: this.serverName.nativeElement.value,
  //     content: this.serverContent.nativeElement.value
  //   });
  // }
  //
  // onAddBlueprint() {
  //   this.blueprintCreated.emit({
  //     serverName: this.serverName.nativeElement.value,
  //     content: this.serverContent.nativeElement.value
  //   });
  // }
}

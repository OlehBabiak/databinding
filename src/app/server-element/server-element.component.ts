import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, DoCheck, ElementRef,
  Input, OnChanges,
  OnInit, SimpleChanges, ViewChild, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
{
  @Input() element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('1) Constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2) ngOnChanges  called!');
    console.log('2.1)', changes);
  }

  ngOnInit(): void {
    console.log('3) NgOnInit called!');
    console.log('3) Text Content: ', this.header.nativeElement.textContent);
    console.log('3) Text P Content: ', this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('4) ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('5) ngAfterContent called!');
    console.log('3.2) Text P Content: ', this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('6) ngAfterContentChecked Called');
  }

  ngAfterViewInit() {
    console.log('7) ngAfterViewInit called!');
    console.log('3.1) Text Content: ', this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('8) ngAfterViewChecked Called');
  }

}

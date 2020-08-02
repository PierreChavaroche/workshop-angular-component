import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  @Input() company;
  // @Output() private message: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    // this.message.emit('Thanks!');
  }

}

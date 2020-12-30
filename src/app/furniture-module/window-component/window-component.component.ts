import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataFlowExampleService } from 'src/app/data-flow-example.service';

@Component({
  selector: 'app-window-component',
  templateUrl: './window-component.component.html',
  styleUrls: ['./window-component.component.scss'],
})
export class WindowComponent implements OnInit {
  @Input() public isBANANAS;

  constructor(private dataFlowService: DataFlowExampleService) {}

  ngOnInit(): void {
    setTimeout(
      () =>
        this.dataFlowService.thisIsNewData$.next(
          'DATA THAT WAS SET FROM THE SERVICE'
        ),
      5000
    );
  }
}

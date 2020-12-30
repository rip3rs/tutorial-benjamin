import { Component, Input, OnInit } from '@angular/core';
import { DataFlowExampleService } from 'src/app/data-flow-example.service';

@Component({
  selector: 'app-main-structure-component',
  templateUrl: './main-structure-component.component.html',
  styleUrls: ['./main-structure-component.component.scss'],
})
export class MainStructureComponent implements OnInit {
  @Input() public BANANAS: string;

  public aNewEventAsArrivedFromChild;

  constructor(private dataFlowService: DataFlowExampleService) {}

  ngOnInit(): void {
    this.dataFlowService.thisIsNewData$.subscribe(
      (result) => (this.aNewEventAsArrivedFromChild = result)
    );
  }
}

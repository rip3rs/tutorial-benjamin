import { Component } from '@angular/core';
import { DataFlowExampleService } from './data-flow-example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public titleThatWillGoToChild: string =
    'Hello I want to go to my child component';

  constructor(private dataFlowService: DataFlowExampleService) {
    this.dataFlowService.thisIsNewData$.subscribe(
      (result: string) => (this.titleThatWillGoToChild = result)
    );
  }
}

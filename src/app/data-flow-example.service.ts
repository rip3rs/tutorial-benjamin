import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataFlowExampleService {
  public thisIsNewData$ = new ReplaySubject(1);

  constructor() {}
}

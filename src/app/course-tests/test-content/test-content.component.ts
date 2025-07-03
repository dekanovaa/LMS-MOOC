import { Component } from '@angular/core';
import { Test } from '../test.model';
import { TestService } from '../test.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-test-content',
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, NgxPaginationModule,NgFor],
  standalone:true,
  templateUrl: './test-content.component.html',
  styleUrl: './test-content.component.css'
})
export class TestContentComponent {
  p: number = 1;
  tests: Test[] = [];
  constructor(private testsService: TestService){};

  ngOnInit(): void {
    this.testsService.getTests().subscribe((data) => {
      this.tests = data;
    })
  }


  form:FormGroup = new FormGroup({
    answer: new FormControl('')

  
  })


}

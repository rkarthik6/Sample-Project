import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges {
  title = 'project';
  isUnchanged = true
  showColour = true
  link = 'line-through'
  firstName: string = 'Karthik'
  secondName: string = 'test'
  showDiv: boolean = true
  age: number = 0
  pwd: any
  formData: any
  lat = 51.678418;
  lng = 7.809007;
  single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ];
  multi = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        }
      ]
    },
  
    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        }
      ]
    },
  
    {
      "name": "France",
      "series": [
        {
          "name": "2010",
          "value": 5000002
        },
        {
          "name": "2011",
          "value": 5800000
        }
      ]
    }
  ];

  view: any = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor(private readonly router: Router) {
  }
  ngOnInit() {
    console.log(this.title)
  }
  onSelect(event: any) {
    console.log(event);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }
  clickEvent() {
    this.title = "New Project"
  }
  goToParent() {
    this.router.navigate(['/parent', { queryParams: { order: 'popular' }, queryParamsHandling: 'merge' }])
  }
  callValue(val: string) {
    console.log(val)
    this.secondName = val
  }

  onSubmit(formData: any) {
    console.log(formData)
    this.formData = formData
  }
}

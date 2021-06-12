import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
  userLists= [{
    name:'mrs john'
  },
  {
    name:'mrs david'
  },{
    name:'mrs Alex'
  },

  ]
  selectedTab:boolean
  constructor() { }

  ngOnInit(): void {
  }
  editExistingEngineer() {

  }
  getDetailofEngineer(user, i) {
    this.selectedTab = i

  }

}

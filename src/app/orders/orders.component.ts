import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  headers = ["Order", "Date", "Status", "Total"];


  rows = [
    {
      "Order" : "1",
      "Date" : "22 November 2020",
      "Status" : "PreOrder",
      "Total" : "$22.25",
    },
    {
      "Order" : "2",
      "Date" : "23 November 2020",
      "Status" : "OnHold",
      "Total" : "$25",
    },
    {
      "Order" : "3",
      "Date" : "30 November 2020",
      "Status" : "Delivered ",
      "Total" : "$50",
    },
    {
      "Order" : "4",
      "Date" : "2 December 2020",
      "Status" : "OnHold ",
      "Total" : "$30",
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}

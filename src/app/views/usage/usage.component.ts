import { Component, OnInit } from '@angular/core';
import data from '../../data.json';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss'],
})
export class UsageComponent implements OnInit {
  constructor() {}
  showAccountFAQ = false;
  items!: any;
  ask_list: any = [];
  list_title!: any;
  itemIdChoice: any;
  isShowing: any = [];
  ask: any;
  showListAsk = false;
  searchValue:string = '';
  ngOnInit(): void {
    this.items = data.USAGE.list.filter((item) => item.list_id == '1')[0].item;
    data.USAGE.list
      .map((item: any) => {
        return item.item.map((_item: any) => _item);
      })
      .forEach((item: any) => {
        item.forEach((_item: any) => this.ask_list.push(_item));
      });
    this.list_title = data.USAGE.list;
  }

  toggleAccount(item: any) {
    // this.isShowing.push(item)
    if (!this.isShowing.includes(item)) {
      this.isShowing.push(item);
    } else {
      if (this.isShowing.length > 0) {
        this.isShowing = this.isShowing.filter((_item: any) => _item != item);
      }
    }

    if (item == this.itemIdChoice) {
      this.itemIdChoice = null;
    } else {
      this.itemIdChoice = item;
    }
  }

  showDetail(item: any) {
    const list_id = item.list_id;
    const id = item.item_id;
    return `detail/${list_id}/${id}`;
  }

  // filterAsk(event: any) {
  //   const keyword = event.target.value.trim().toLowerCase();
  //   event.stopPropagation();
  //   this.showListAsk = true;
  //   this.ask = this.ask_list.filter((item: any) => {
  //     return item.item_title.toLowerCase().includes(keyword);
  //   });
  // }

  redirectAsk(item: any) {
    return `usage/detail/${item.list_id}/${item.item_id}`;
  }

  hideList() {
    setTimeout(() => {
      this.showListAsk = false;
    },100);
  }

  setSearch(){
    this.searchValue = ''
  }
}

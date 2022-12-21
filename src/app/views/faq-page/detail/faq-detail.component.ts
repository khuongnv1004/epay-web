import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import data from '../../../data.json'

@Component({
  selector: 'app-faq-detail',
  templateUrl: './faq-detail.component.html',
  styleUrls: ['./faq-detail.component.scss']
})
export class FAQDetailComponent implements OnInit{

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    
   }
   list_id:any;
   id:any
   item:any;
   items:any;
   list_item:any;
  ngOnInit(): void {
    this.list_id = this.activatedRoute.snapshot.paramMap.get('list_id');
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.items = data.FAQ.list.filter((item) => item.list_id == this.list_id)[0].item;
    this.item = this.items.filter((item:any) => item.item_id == this.id)[0];
    this.list_item = this.items.filter((item: any)=> item.item_id != this.id)
    console.log(this.list_item);
    
  }

  showDetail(item:any){
    const list_id = item.list_id;
    const id = item.item_id;
    return `faq/detail/${list_id}/${id}`
  }

  backTo(){
    this.router.navigateByUrl("/faq")
  }
}

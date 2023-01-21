import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

prodid:any
  constructor(private ar:ActivatedRoute, private ps:ProductserviceService,private route:Router){}

  ngOnInit():void{

    this.ar.params.subscribe((data:any)=>{

      this.prodid=data.id;
      
    })

    this.ps.deleteproduct(this.prodid).subscribe((data:any)=>{
      this.route.navigateByUrl('product')
    })

    

    
    
      
          

  }
}

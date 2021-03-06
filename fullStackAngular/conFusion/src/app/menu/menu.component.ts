import {Component, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';
import {DishService} from "../services/dish.service";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit {


  constructor(private dishService: DishService) {
  }

  selectedDish: Dish;
  dishes: Dish[] = DISHES;

  ngOnInit() {
     this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
  }



  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }


}

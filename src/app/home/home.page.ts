import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
books = [
  {"Book_name": "Война и Мир", "Author": "Лев Толстой"}, 
  {"Book_name": "Мёртвые души", "Author": "Николай Гоголь"},
  {"Book_name": "Плутни Скапена", "Author": "Жан Батист Мольер"}
]
delete_book(name:string) {
  this.books = this.books.filter(el => el.Book_name != name)
}

}

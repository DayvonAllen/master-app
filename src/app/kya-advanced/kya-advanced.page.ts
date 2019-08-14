import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-kya-advanced',
  templateUrl: './kya-advanced.page.html',
  styleUrls: ['./kya-advanced.page.scss'],
})
export class KyaAdvancedPage implements OnInit {

  front = false;
  snd;
  characters;
  counter = 0;
  a = [];
  loaded = false;
  list;
  constructor(private getData: DataService) {}

  ngOnInit() {
    this.getData.getAllData().subscribe(data => {
      console.log(data);
      this.characters = data["characters"];
      this.a = this.characters.slice(71, 76);
      this.list = [this.a[0]];
      this.loaded = true;
    });
  }
  flip() {
    this.front = !this.front;
  }
  playSound(){
    this.front = null;
    this.snd = new Audio(`http://localhost:3000/sounds/${this.list[0]['romanji']}`)
    this.snd.play()
  }

  next(){
      this.counter++;
      this.list = [this.a[this.counter]];
  }
  back(){
      this.counter--;
      this.list = [this.a[this.counter]];
  }


}

import { Beer } from 'src/app/models/beer';
import { BeerService } from 'src/app/services/beer.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss'],
})
export class BeersComponent implements OnInit {
  beers: Beer[];

  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
    this.getBeers();
  }

  getBeers(): void {
    this.beerService.getAll().subscribe((returnedBeers: Beer[]) => {
      this.beers = returnedBeers;
    });
  }
}

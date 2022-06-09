import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  topMovies: any;
  topTvs: any;
  popularMovies: any;
  popularTvs: any;
  inTheaters: any;
  comingSoonMovies: any;
  showSearchForm: boolean = false;
  searchValue: any;

  constructor(private sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.getTopMovies();
    // this.getTopTvs();
    // this.getPopularMovies();
    // this.getPopularTvs();
    // this.getComingSoonMovies();
    // this.getInTheatersMovies();
  }

  getTopMovies() {
    this.sharedService.getTopMovies().subscribe(response => {
      if (response) {
        this.topMovies = response.items;
      }
    });
  }

  getTopTvs() {
    this.sharedService.getTopTvs().subscribe(response => {
      if (response) {
        this.topTvs = response.items;
      }
    });
  }

  getPopularMovies() {
    this.sharedService.getPopularMovies().subscribe(resposne => {
      if (resposne) {
        this.popularMovies = resposne.items;
      }
    });
  }

  getPopularTvs() {
    this.sharedService.getPopularTvs().subscribe(response => {
      if (response) {
        this.popularTvs = response.items;
      }
    });
  }

  getInTheatersMovies() {
    this.sharedService.getInTheaters().subscribe(response => {
      if (response) {
        this.inTheaters = response.items;
      }
    });
  }

  getComingSoonMovies() {
    this.sharedService.getComingSoon().subscribe(response => {
      if (response) {
        this.comingSoonMovies = response.items;
      }
    });
  }

  expandSearch() {
    this.showSearchForm = !this.showSearchForm;
  }

  searchProduct(form: any) {
    if (this.searchValue) {
      const searchValue = this.searchValue.toLowerCase().trim();
      const params = {
        searchValue,
      };
      this.router.navigate(['/search'], { queryParams: params });
    }
    this.showSearchForm = !this.showSearchForm;
  }
}

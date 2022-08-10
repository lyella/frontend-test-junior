import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component,
  OnInit
} from '@angular/core';

import { ZyllemApiService } from "./app.service";
import { Article, ArticleType, VideoArticle } from './model/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(
    private readonly apiService: ZyllemApiService,
    private readonly cdr: ChangeDetectorRef
  ) { }

  private results: Article[];
  videoArticleHighlight: VideoArticle;

  get articles() {
    return this.results.filter((val) => val.type !== ArticleType.VIDEO);
  }

  get videoArticle() {
    return this.results.filter((val) => val.type === ArticleType.VIDEO);
  }

  ngOnInit(): void {
    this.apiService.getArticles()
      .subscribe(result => {
        this.results = result;
        this.cdr.markForCheck();
      });
  }
}

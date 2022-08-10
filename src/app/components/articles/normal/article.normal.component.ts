import { Component, Input } from "@angular/core";

import { Article, FeaturedArticle, NormalArticle } from "src/app/model/article";
import { AbstractArticleComponent } from "../abstract.article.component";
import { ArticleVideoComponent } from "../video";
@Component({
    selector: 'article-normal-component',
    templateUrl: './article.normal.component.html',
    styleUrls: ['./article.normal.component.scss']
})
export class ArticleNormalComponent extends AbstractArticleComponent {
    article: Article;
    @Input() articleNormal: NormalArticle;
    @Input() articleVideo: ArticleVideoComponent;
    @Input() articleFeature: FeaturedArticle;
}

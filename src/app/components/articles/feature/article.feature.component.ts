import { Component, Input } from "@angular/core";

import { Article, FeaturedArticle, NormalArticle } from "src/app/model/article";
import { AbstractArticleComponent } from "../abstract.article.component";
import { ArticleVideoComponent } from "../video";

@Component({
    selector: 'article-feature-component',
    templateUrl: './article.feature.component.html',
    styleUrls: ['./article.feature.component.scss']
})
export class ArticleFeatureComponent extends AbstractArticleComponent {
    article: Article;
    articleVideo: ArticleVideoComponent;
    @Input() articleNormal: NormalArticle;
    @Input() articleFeature: FeaturedArticle;
}

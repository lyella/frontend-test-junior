import { NormalArticle } from "src/app/model/article";
import { FeaturedArticle } from "src/app/model/article";
import { ArticleVideoComponent } from "./video/article.video.component";
import { Article } from "src/app/model/article";

export abstract class AbstractArticleComponent {

    abstract articleNormal: NormalArticle;
    abstract articleFeature: FeaturedArticle;
    abstract articleVideo: ArticleVideoComponent;
    abstract article: Article;
}

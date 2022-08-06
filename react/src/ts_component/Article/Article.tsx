import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import "./Article.scss"
import { RemoveArticle } from "./RemoveArticle"
import { AddArticle } from "./AddArticle"
import { addArticle, removeArticle } from "../../Redux/Actions/Article/ArticleActionCreator"
import { Dispatch } from "redux"

export const Article: React.FC = () => {
    const articles: any = useSelector((state: any) => state?.article?.articles,shallowEqual)

    const dispatch: Dispatch<any> = useDispatch()

    const saveArticle = (article: IArticle) => dispatch(addArticle(article))

    return (
        <main>
            <h1>My Articles</h1>
            <AddArticle saveArticle={saveArticle} />
            {articles?.map((article: IArticle) => (
                <RemoveArticle
                    key={article.id}
                    article={article}
                    removeArticle={removeArticle}
                />
            ))}
        </main>
    )
}
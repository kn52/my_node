import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import "./Article.scss"
import { RemoveArticle } from "./RemoveArticle"
import { AddArticle } from "./AddArticle"
import * as action_creator from "../../Redux/Actions/Article/ArticleActionCreator"
import { Dispatch } from "redux"

export const Article: React.FC = () => {
    const { articles, articlesCount }: any = useSelector((state: any) => state?.article,shallowEqual)

    const dispatch: Dispatch<any> = useDispatch()

    const saveArticle = (article: IArticle) => dispatch(action_creator.addArticle(article))

    return (
        <main>
            <h1>My Articles</h1>
            <AddArticle saveArticle={saveArticle} />
            <h2>Total Articles: {articlesCount}</h2>
            {articles?.map((article: IArticle) => (
                <RemoveArticle
                    key={article.id}
                    article={article}
                    removeArticle={action_creator.removeArticle}
                />
            ))}
        </main>
    )
}
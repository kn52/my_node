import * as actionTypes  from "../../../Actions/Article/ArticleActions";

const iState: ArticleState = {
    articles: [
        {
            id: 1,
            title: "post 1",
            body:
              "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi"
          },
          {
            id: 2,
            title: "post 2",
            body:
              "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint"
          }
    ],
    articlesCount: 2
}


export const ArticleReducer = (state: ArticleState = iState, action: ArticleAction): ArticleState => {
    switch (action.type) {
        case actionTypes.ADD_ARTICLE:
            const newArticle: IArticle = {
                id: Math.random(), 
                title: action.article.title,
                body: action.article.body,
            }
            const addedArticles: IArticle[] = state.articles.concat(newArticle)
            return {
                ...state,
                articles: addedArticles,
                articlesCount: addedArticles?.length
            }
        case actionTypes.REMOVE_ARTICLE:
            const updatedArticles: IArticle[] = state.articles.filter(
                article => article.id !== action.article.id
            )
            return {
                ...state,
                articles: updatedArticles,
                articlesCount: updatedArticles?.length
            }
        default:
            return state
    }
}
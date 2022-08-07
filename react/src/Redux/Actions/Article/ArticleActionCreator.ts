import * as actionTypes from "./ArticleActions"

const CreateAction = (_actionType: any, article: IArticle) => {
  const action: ArticleAction = {
    type: _actionType,
    article,
  }
  return action;
}

export const addArticle = (article: IArticle) => CreateAction(actionTypes.ADD_ARTICLE, article)

export const removeArticle = (article: IArticle) => CreateAction(actionTypes.REMOVE_ARTICLE, article)

import * as actionTypes from "./ArticleActions"

const _createAction = (_actionType: any, article: IArticle) => {
  const action: ArticleAction = {
    type: _actionType,
    article,
  }
  return action;
}

export const addArticle = (article: IArticle) => _createAction(actionTypes.ADD_ARTICLE, article)

export const removeArticle = (article: IArticle) => _createAction(actionTypes.REMOVE_ARTICLE, article)

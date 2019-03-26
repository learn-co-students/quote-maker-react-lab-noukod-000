
export default (state = [], action) => {
  switch(action.type){
    case "ADD_QUOTE":
      return [...state,action.quote]
    case "REMOVE_QUOTE":
      const newState=state.filter(quote=>quote.id!==action.quoteId);
      return [...newState]
    case "UPVOTE_QUOTE":
      const quote=getQuoteById(state,action.quoteId)
      quote.votes+=1
      return [quote]
    case "DOWNVOTE_QUOTE":
      const quote1=getQuoteById(state,action.quoteId)
      if(quote1.votes>0) quote1.votes-=1
      return [quote1]
    default:
      return state;
  }
}

function getQuoteById(state,quoteId){
  return state.filter(quote=>quote.id===quoteId)[0]
}
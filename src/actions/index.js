export function selectBook(book) {
    //selectbook is an ActionCreator, it needs to return an action
    //an onkect with type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }   
}

const initState = {
    posts: [
        { id: 1, title: 'LalaLand', body: 'Did yo see the movie' },
        { id: 2, title: 'Johnweck', body: 'Did yo see the movie' },
        { id: 3, title: 'Chernobyl', body: 'Did yo see the series' }
    ]
}


const rootReducer = (state = initState, action) => {
    return state;
}


export default rootReducer;
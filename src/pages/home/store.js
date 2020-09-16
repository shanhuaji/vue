import {moveListReq,moreComingReq} from 'Api'
export default{
    namespaced: true,
    state:{
        movesId:[],
        movieList:[]
    },
    actions:{
        async getMovesID({commit}){
            commit({
                type:'GET_MOVES_ID',
                payload: await moveListReq()
            })
        },
        /* id */
        async getMoves({commit},payload){
            commit({
                type:"GET_MOVES",
                payload:await moreComingReq(payload)
            })
        }
    },
    mutations:{
        GET_MOVES_ID(state,{payload}){
            let {movieIds,movieList} = payload.data
            state.movesId = movieIds
            state.movieList = movieList
          /*  console.log(movieIds);
           console.log(movieList); */
        },
        GET_MOVES(state,{payload}){
           let {data:{coming}} = payload
           /* console.log(coming); */
           state.movieList.push(...coming);
            // state.movieList = coming
        }
    }
}
console.log("首页");
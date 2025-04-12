import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user", //slice ka name bh define krna hota h //kuch bh rkhsty
    initialState: {  //data ata h ya to jata h // ye wesy hi h jesy useState bnaty thy pr name yhi rhyga // data kuch bh rkh skty
        isLogin: false,
        name: "abc",
        personalDetail: {}
    },
    reducers: { //ye fn' hain //wo fn' jis k through is state ko update, edit, del krsky, management krskein iski // apni mrzi k fn'
        add(state, action) {
            //state initial state h or action woh data jo ayega 
            state.isLogin = true;
            state.personalDetail = { ...action.payload };
        },
        edit() { },
    }
})

// fn' alg sy export slice alg sy
export const { add, edit } = UserSlice.actions;
//fn' export kiye export default nhi kiye .actions ? apna jo obj h woh ik createSlice k fn' sy bnaya .actions sy ye sb fn' nikal rhy hain
export default UserSlice.reducer; // not reducers // reducer me apny data utha kr export krdia //ye data h


// const UserSlice = createSlice({
//     name: "user",
//     initialState:{
//         id: 1,
//         name: "Sumaiya"
//     },
//     reducers:{
//         add(){},
//         edit(){},
//     }

// })

// export const {add, edit} = UserSlice.actions;
// export default UserSlice.reducer;
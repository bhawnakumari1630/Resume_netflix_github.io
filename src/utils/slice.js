import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : 'appSlice',
    initialState : {
        isMenuOpen : true ,
        searchQuery : '',
    },
    reducers : {
        openMenu : (state) => {
            state.isMenuOpen = true 
        },
        toggleMenu : (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu : (state) => {
            state.isMenuOpen = false
        },
        search : (state, action ) => {
            state.searchQuery = action.payload
        }
    }
})

export const {openMenu, toggleMenu, closeMenu} = appSlice.actions
export default appSlice.reducer


/*
 const appSlice = createSlice({
    name : 'appSlice',
    initialState : {
        isMenuOpen : true ,
    },
    reducers : {
        openMenu : (state) => {
            state.isMenuOpen = true
        },
        toggleMenu : (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu : (state) => {
            state.isMenuOpen = false
        }
    }
})
*/














// import { createSlice } from "@reduxjs/toolkit"

// const appSlice = createSlice({
//     name : 'appSlice',
//     initialState : {
//         isMenuOpen : true
//     },
//     reducers : {
//         toggleMenu : (state) => {
//             state.isMenuOpen = !state.isMenuOpen
//         }
//     }
// })

// export const {toggleMenu} = appSlice.actions
// export default appSlice.reducer

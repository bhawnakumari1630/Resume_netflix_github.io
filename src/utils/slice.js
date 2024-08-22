import { createSlice } from "@reduxjs/toolkit";

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

export const {openMenu, toggleMenu, closeMenu} = appSlice.actions
export default appSlice.reducer















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

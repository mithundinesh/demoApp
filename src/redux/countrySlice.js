import { createSlice } from '@reduxjs/toolkit'

export const countrySlice = createSlice({
    name: 'country',
    initialState: {
        countries: [],
    },
    reducers: {
        save: (state, action) => {
            state.countries = action.payload
        },
    },
})

export const { save } = countrySlice.actions

export default countrySlice.reducer
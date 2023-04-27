import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        type_storm: 'type_storm',
        severity: 'severity',
        date_happened: 'date_happened',
        damage_cost: 'damage_cost',
    },
    // linking pieces together
    // Setting the input to the state.name
    reducers: {
        type_storm:  (state, action) => { state.type_storm = action.payload },
        severity: (state, action) => { state.severity = action.payload },
        date_happened:  (state, action) => { state.date_happened = action.payload },
        damage_cost: (state, action) => { state.damage_cost = action.payload },
    }
})

// taking code above, and exporting
export const reducer = rootSlice.reducer;
export const { type_storm, severity, date_happened, damage_cost } = rootSlice.actions
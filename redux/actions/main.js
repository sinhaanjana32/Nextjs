import * as t from "../types.js"


export const setInfo = (name)=>({
    type: t.SET_NAME,
    payload:name
})

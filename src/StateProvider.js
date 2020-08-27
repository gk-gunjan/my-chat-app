import React ,{createContext,useContext,useReducer}from 'react';
export const StateContext =createContext();
//prepreating a datalayer where everythings leaves

export const StateProvider = ({reducer,initialState,children}) =>
     (
        <StateContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </StateContext.Provider>
    ); //here we provides that value which we use at every component inside or project without proping down through the praprent component to the child component

export const useStateValue =()=> useContext (StateContext);
//pulling information from the datalayer


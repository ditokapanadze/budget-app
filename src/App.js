import React from 'react'
import "./App.css"
import Header from "./components/header"

import Balance from './components/Balance'
import AddTransaction from './components/AddTranseactions'
import IncomeList from './components/IncomeList'
import ExpenseList from './components/Expense'
import {GlobalContext, GlobalContextProvider} from './context/GlobalState'



const App =()=>{
    return(
        <GlobalContextProvider>
        <div className="container">
            <div className="app-wrapper">
               <Header/>
               <Balance/>
               <AddTransaction/>
               <IncomeList/>
               <ExpenseList/>
            </div>
        </div>
        </GlobalContextProvider>
    )
}

export default App
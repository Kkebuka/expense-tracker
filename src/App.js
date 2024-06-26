import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

// Data
import { wks, sch } from "./data.js";

// Components
import Row from "./components/Row.jsx";

// Styles
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.container}>
      <table>
        <colgroup>
          <col className={classes.teams} />
        </colgroup>
        <thead>
          <tr>
            <th></th>
            {wks.map(wk => (
              <th key={wk.wk}>W{wk.wk}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sch.map(tm => (
            <Row key={tm.ti} tm={tm} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

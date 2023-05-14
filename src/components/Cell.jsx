// Data
import { tms, sch } from "../data.js";

// Styles
import classes from "./Cell.module.css";

export default function Cell({ tm, o, l }) {
  if (tm[o] === 32) {
    return <td className={classes.bye}>BYE</td>;
  } else {
    return (
      <td className={tm.ti % 2 ? classes.light : classes.dark}>
        {tm[l] === "a" ? "@" : ""}
        {tm[l] === "l" || tm[l] === "g" ? "✈" : ""}
        {tms[sch[tm.ti][o]].tm}
        {tm[l] === "h" && tms[tm.ti].dm && "◠"}
        {tm[l] === "a" && tms[sch[tm.ti][o]].dm && "◠"}
      </td>
    );
  }
}

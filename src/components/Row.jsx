// Data
import { tms } from "../data.js";

// Components
import Cell from "./Cell.jsx";

// Styles
import classes from "./Row.module.css";

export default function Row({ tm }) {
  return (
    <tr key={tm.ti}>
      <th
        style={{
          backgroundColor: tms[tm.ti].bc,
          color: tms[tm.ti].tc,
          fontSize: "1.25rem",
        }}
      >
        {tms[tm.ti].tm}
      </th>
      <Cell tm={tm} o="o1" l="l1" />
      <Cell tm={tm} o="o2" l="l2" />
      <Cell tm={tm} o="o3" l="l3" />
      <Cell tm={tm} o="o4" l="l4" />
      <Cell tm={tm} o="o5" l="l5" />
      <Cell tm={tm} o="o6" l="l6" />
      <Cell tm={tm} o="o7" l="l7" />
      <Cell tm={tm} o="o8" l="l8" />
      <Cell tm={tm} o="o9" l="l9" />
      <Cell tm={tm} o="o10" l="l10" />
      <Cell tm={tm} o="o11" l="l11" />
      <Cell tm={tm} o="o12" l="l12" />
      <Cell tm={tm} o="o13" l="l13" />
      <Cell tm={tm} o="o14" l="l14" />
      <Cell tm={tm} o="o15" l="l15" />
      <Cell tm={tm} o="o16" l="l16" />
      <Cell tm={tm} o="o17" l="l17" />
      <Cell tm={tm} o="o18" l="l18" />
    </tr>
  );
}

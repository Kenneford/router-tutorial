import { NavLink, Outlet } from "react-router-dom";
import GetInvoices from "./Data";

export default function Invoices() {
  let invoices = GetInvoices();
  console.log(invoices)
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <NavLink
            style={({isActive})=>{return{ 
                display: "block", 
                margin: "1rem 0", 
                color: isActive ? "red" : ""}}}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
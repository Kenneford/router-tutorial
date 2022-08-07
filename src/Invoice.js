import React from 'react'
import { useParams } from 'react-router'
import GetInvoice from './Data';

export default function Invoice() {
    const params = useParams();
    let invoice = GetInvoice(parseInt(params.invoiceId, 10));
  return (
    <div>
        <main style={{ padding: "1rem" }}>
            <h2>Total Due: {invoice.amount}</h2>
            <p>
                {invoice.name}: {invoice.number}
            </p>
            <p>Due Date: {invoice.due}</p>
        </main>
    </div>
  )
}

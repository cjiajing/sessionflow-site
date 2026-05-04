'use client'; // This allows button clicks to work

import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function InvoicePage({ params }: { params: { id: string } }) {
  const [invoice, setInvoice] = useState<any>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
  async function fetchInvoice() {
    // 1. Unwrap the params first
    const resolvedParams = await params; 
    const id = resolvedParams.id;

    if (!id) return;

    // 2. Fetch from Supabase
    const { data, error } = await supabase
      .from('invoices')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error("Supabase Error:", error.message);
    } else {
      setInvoice(data);
    }
  }
  fetchInvoice();
}, [params]); // Listen to params change

  const handleMarkAsPaid = async () => {
    setIsUpdating(true);
    const { error } = await supabase
      .from('invoices')
      .update({ status: 'Payment Pending' }) // Matches your MVP roadmap
      .eq('id', params.id);
    
    if (!error) {
      setInvoice({ ...invoice, status: 'Payment Pending' });
    }
    setIsUpdating(false);
  };

  if (!invoice) return <div className="p-8 text-center">Loading Invoice...</div>;

  const isPaid = invoice.status.toLowerCase() === 'paid';
  const isPending = invoice.status === 'Payment Pending';

  return (
    <div className="max-w-xl mx-auto p-6 font-sans">
      <div className="border rounded-2xl p-8 shadow-lg bg-white">
        {/* Header with Status Badge */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-slate-800">SessionFlow Bill</h1>
          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
            isPaid ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
          }`}>
            {invoice.status}
          </span>
        </div>

        {/* Amount Section */}
        <div className="mb-8">
          <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Total Due</p>
          <h2 className="text-5xl font-extrabold text-slate-900">${invoice.amount.toFixed(2)}</h2>
        </div>

        {/* Student Detail */}
        <div className="mb-8 text-slate-600">
          <p className="text-sm">Invoiced to:</p>
          <p className="text-lg font-semibold text-slate-800">{invoice.student_name}</p>
        </div>

        {/* Dynamic Payment Button */}
        {!isPaid && !isPending && (
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-sm font-bold text-blue-800 mb-2">PayNow Instructions</h3>
            <p className="text-sm text-blue-700 mb-6">{invoice.pay_now_note}</p>
            
            <button 
              onClick={handleMarkAsPaid}
              disabled={isUpdating}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-md hover:bg-blue-700 transition active:scale-95 disabled:opacity-50"
            >
              {isUpdating ? "Processing..." : "I've Made Payment"}
            </button>
          </div>
        )}

        {isPending && (
          <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 text-center">
            <p className="text-orange-700 font-bold">Verification Pending</p>
            <p className="text-sm text-orange-600">The coach has been notified to check the bank app.</p>
          </div>
        )}

        {isPaid && (
          <div className="bg-green-50 p-6 rounded-xl border border-green-200 text-center">
            <p className="text-green-700 font-bold">Invoice Paid</p>
            <p className="text-sm text-green-600">Thank you for your payment!</p>
          </div>
        )}
      </div>
    </div>
  );
}

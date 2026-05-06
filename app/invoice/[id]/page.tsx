'use client';

import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function InvoicePage({ params }: { params: Promise<{ id: string }> }) {
  const [invoice, setInvoice] = useState<any>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchInvoice() {
      const resolvedParams = await params;
      const id = resolvedParams.id;

      if (!id) return;

      const { data, error } = await supabase
        .from('invoices')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) {
        console.error("Supabase Error:", error.message);
        setError("Invoice not found or database error.");
      } else {
        setInvoice(data);
      }
    }
    fetchInvoice();
  }, [params]);

  const handleMarkAsPaid = async () => {
    const resolvedParams = await params;
    setIsUpdating(true);
    const { error } = await supabase
      .from('invoices')
      .update({ status: 'Payment Pending' })
      .eq('id', resolvedParams.id);
    
    if (!error) {
      setInvoice({ ...invoice, status: 'Payment Pending' });
    }
    setIsUpdating(false);
  };

  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;
  if (!invoice) return <div className="p-8 text-center text-slate-500 animate-pulse">Loading SessionFlow Bill...</div>;

  const isPaid = invoice.status.toLowerCase() === 'paid';
  const isPending = invoice.status === 'Payment Pending';

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-8 font-sans bg-slate-50 min-h-screen">
      <div className="border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl bg-white">
        
        {/* Top Header */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Invoice</h1>
            <p className="text-sm text-slate-500 mt-1">ID: {invoice.id.slice(0, 8).toUpperCase()}</p>
          </div>
          <span className={`px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider ${
            isPaid ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
          }`}>
            {invoice.status}
          </span>
        </div>

        {/* Client Detail */}
        <div className="mb-10 pb-8 border-b border-slate-100">
          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Billed To</p>
          <p className="text-xl font-bold text-slate-800">{invoice.student_name}</p>
        </div>

        {/* Breakdown Table (Matches 7.jpg) */}
        <div className="mb-10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-[10px] uppercase tracking-widest font-bold text-slate-400">
                <th className="pb-3 font-bold">Date</th>
                <th className="pb-3 font-bold">Services</th>
                <th className="pb-3 text-right font-bold">Mins</th>
                <th className="pb-3 text-right font-bold">Fee</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {invoice.items?.map((item: any, index: number) => (
                <tr key={index} className="border-b border-slate-50 last:border-0">
                  <td className="py-4 text-slate-500">{item.date}</td>
                  <td className="py-4 font-semibold text-slate-800">{item.subject}</td>
                  <td className="py-4 text-right text-slate-500">{item.minutes}</td>
                  <td className="py-4 text-right font-bold text-slate-900">${item.fee.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total Summary */}
        <div className="flex justify-between items-center mb-12 py-6 border-t-2 border-slate-900">
          <p className="text-lg font-bold text-slate-900">Total Amount</p>
          <h2 className="text-4xl font-black text-blue-600">${invoice.amount.toFixed(2)}</h2>
        </div>

        {/* Dynamic Action Section */}
        <div className="space-y-4">
          {!isPaid && !isPending && (
            <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-2xl">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">PayNow Instructions</h3>
              <p className="text-lg font-medium mb-8 text-slate-200">{invoice.pay_now_note}</p>
              
              <button 
                onClick={handleMarkAsPaid}
                disabled={isUpdating}
                className="w-full bg-blue-500 text-white py-5 rounded-xl font-black text-lg shadow-lg hover:bg-blue-400 transition active:scale-[0.98] disabled:opacity-50"
              >
                {isUpdating ? "Processing..." : "I've Made Payment"}
              </button>
              <p className="text-[10px] text-center mt-4 text-slate-500 uppercase tracking-tighter">Clicking confirms you have transferred the funds</p>
            </div>
          )}

          {isPending && (
            <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200 text-center">
              <p className="text-orange-700 text-xl font-black mb-1">Verification Pending</p>
              <p className="text-slate-600 font-medium text-sm">The tutor has been notified. This status will update once confirmed.</p>
            </div>
          )}

          {isPaid && (
            <div className="bg-green-50 p-8 rounded-2xl border-2 border-green-200 text-center">
              <p className="text-green-700 text-xl font-black mb-1">Payment Received</p>
              <p className="text-slate-600 font-medium text-sm">A receipt has been logged in the system. Thank you!</p>
            </div>
          )}
        </div>

        <p className="text-center text-[10px] text-slate-300 font-bold uppercase tracking-widest mt-12">
          Powered by SessionFlow
        </p>
      </div>
    </div>
  );
}

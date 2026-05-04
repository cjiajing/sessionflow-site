import { createClient } from '@supabase/supabase-js';
import { notFound } from 'next/navigation';

// Initialize Supabase Client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function InvoicePage({ params }: { params: { id: string } }) {
  // Fetch data from your 'invoices' table
  const { data: invoice, error } = await supabase
    .from('invoices')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error || !invoice) {
    notFound();
  }

  const isPaid = invoice.status.toLowerCase() === 'paid';

  return (
    <div className="max-w-2xl mx-auto p-8 font-sans">
      <div className="border rounded-xl p-8 shadow-sm bg-white">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">SessionFlow Invoice</h1>
            <p className="text-slate-500">Ref: {invoice.id.slice(0, 8)}</p>
          </div>
          <div className={`px-4 py-1 rounded-full text-xs font-black uppercase ${
            isPaid ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
          }`}>
            {invoice.status}
          </div>
        </div>

        {/* Amount Section */}
        <div className="mb-8 border-b pb-8">
          <p className="text-sm text-slate-500 mb-1">Amount Due</p>
          <h2 className="text-4xl font-bold text-slate-900">
            ${invoice.amount.toFixed(2)}
          </h2>
        </div>

        {/* Client Info */}
        <div className="mb-8">
          <h3 className="text-sm font-bold uppercase text-slate-400 mb-2">Student</h3>
          <p className="text-lg text-slate-800">{invoice.student_name}</p>
        </div>

        {/* PayNow Instructions */}
        {!isPaid && (
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
            <h3 className="text-sm font-bold text-slate-800 mb-2">Payment Instructions</h3>
            <p className="text-slate-600 mb-4">{invoice.pay_now_note}</p>
            
            {/* Action Button */}
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
              I've Made Payment
            </button>
          </div>
        )}

        {isPaid && (
          <div className="text-center py-6 border-2 border-dashed border-green-200 rounded-lg">
            <p className="text-green-600 font-bold">Thank you! This invoice has been settled.</p>
          </div>
        )}
      </div>
    </div>
  );
}

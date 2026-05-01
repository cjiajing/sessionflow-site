import { createClient } from '@supabase/supabase-js';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function PaymentPage({ params }) {
  const { id } = params;

  // 1. Fetch session details from Supabase
  const { data: session, error } = await supabase
    .from('sessions')
    .select('*, profiles(full_name)')
    .eq('id', id)
    .single();

  if (error || !session) return <div>Session not found or already paid.</div>;

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Invoice for {session.subject}</h1>
      <p>Coach: {session.profiles.full_name}</p>
      <div style={{ margin: '20px 0', fontSize: '24px', fontWeight: 'bold' }}>
          Total Due: ${session.fee.toFixed(2)}
      </div>
      
      {/* This button will eventually trigger Stripe Checkout */}
      <button 
        style={{
          padding: '15px 30px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '18px',
          cursor: 'pointer'
        }}
      >
        Pay with Credit Card
      </button>
    </div>
  );
}

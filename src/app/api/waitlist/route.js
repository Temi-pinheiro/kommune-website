import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY // use service key here only in server routes
);

export async function POST(req) {
  const { email } = await req.json();

  let errorMessage;

  const { data, error } = await supabase
    .from('waitlist')
    .insert([{ email }])
    .select();

  if (error) {
    if (error.message.includes('duplicate key')) {
      errorMessage = "You're already on the list!";
    } else {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }

  return NextResponse.json({ success: true, user: data[0] });
}

export async function GET() {
  const data = await supabase.from('waitlist_count').select('total').single();

  console.log(data.data);

  if (data.error) {
    return NextResponse.json({ error: data.error?.message }, { status: 400 });
  }

  return NextResponse.json({ success: true, count: data.data.total });
}

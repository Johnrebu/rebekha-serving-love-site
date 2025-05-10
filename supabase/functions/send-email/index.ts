
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailData {
  to: string;
  subject: string;
  html: string;
}

interface FormData {
  name: string;
  email: string;
  [key: string]: string | undefined;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, formData } = await req.json();
    
    // Validate request data
    if (!type || !formData) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    // Create appropriate email content based on form type
    let emailData: EmailData;
    
    if (type === "booking") {
      emailData = createBookingEmail(formData);
    } else if (type === "contact") {
      emailData = createContactEmail(formData);
    } else {
      return new Response(
        JSON.stringify({ error: "Invalid form type" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    // For demonstration purposes, log what would be sent
    console.log("Would send email:", emailData);
    
    // In a real implementation, you would use a service like Resend, SendGrid, etc.
    // This would require setting up API keys in Supabase secrets
    
    // Example: 
    // const apiKey = Deno.env.get("EMAIL_API_KEY");
    // const response = await fetch("https://api.emailprovider.com/send", {
    //   method: "POST",
    //   headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    //   body: JSON.stringify(emailData),
    // });
    
    return new Response(
      JSON.stringify({ success: true, message: "Email would be sent in production" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
    
  } catch (error) {
    console.error("Error in send-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function createBookingEmail(data: FormData): EmailData {
  const {
    name,
    email,
    phone,
    eventDate,
    eventTime,
    eventType,
    guestCount,
    additionalInfo = "No additional information provided"
  } = data;
  
  return {
    to: "christonancy70@gmail.com",
    subject: `New Booking Request from ${name}`,
    html: `
      <h1>New Booking Request</h1>
      <p>You have received a new booking request from your website:</p>
      <table>
        <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
        <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
        <tr><td><strong>Event Date:</strong></td><td>${eventDate}</td></tr>
        <tr><td><strong>Event Time:</strong></td><td>${eventTime}</td></tr>
        <tr><td><strong>Event Type:</strong></td><td>${eventType}</td></tr>
        <tr><td><strong>Guest Count:</strong></td><td>${guestCount}</td></tr>
        <tr><td><strong>Additional Info:</strong></td><td>${additionalInfo}</td></tr>
      </table>
      <p>Please contact this customer to confirm their booking.</p>
    `
  };
}

function createContactEmail(data: FormData): EmailData {
  const {
    name,
    email,
    phone = "Not provided",
    subject = "Website Inquiry",
    message
  } = data;
  
  return {
    to: "christonancy70@gmail.com",
    subject: `Website Contact: ${subject}`,
    html: `
      <h1>New Contact Form Submission</h1>
      <p>You have received a new message from your website:</p>
      <table>
        <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
        <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
        <tr><td><strong>Subject:</strong></td><td>${subject}</td></tr>
        <tr><td><strong>Message:</strong></td><td>${message}</td></tr>
      </table>
    `
  };
}

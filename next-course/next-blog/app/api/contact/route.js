// /app/api/contact/route.js

export async function POST(req) {
    const { email, name, message } = await req.json();
  
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      !message ||
      message.trim() === ""
    ) {
      return new Response(JSON.stringify({ message: "Invalid input." }), {
        status: 422,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  
    const newMessage = {
      email,
      name,
      message,
    };
    console.log(newMessage);
  
    return new Response(JSON.stringify({ message: "Successfully stored message!" }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  
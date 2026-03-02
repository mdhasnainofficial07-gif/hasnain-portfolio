exports.handler = async function (event) {
  try {

    const data = JSON.parse(event.body);

    const name = data.name;
    const email = data.email;
    const message = data.message;

    const botToken = process.env.BOT_TOKEN; 
    const chatId = "2008582016";

    const text = 
`📩 নতুন মেসেজ (Portfolio Site)

👤 নাম: ${name}
📧 ইমেইল: ${email}
📝 মেসেজ:
${message}`;

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text
      })
    });

    const result = await response.json();

    if (!result.ok) {
      throw new Error("Telegram error");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false })
    };
  }
};

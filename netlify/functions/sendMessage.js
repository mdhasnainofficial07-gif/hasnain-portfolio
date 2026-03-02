exports.handler = async function(event) {

  const data = JSON.parse(event.body);

  const botToken = "8623893002:AAFRaw_M6w25H7AQA7ymK5BFeIpjrtXj1OI";
  const chatId = "2008582016";

  const text = `ЁЯУй ржирждрзБржи ржорзЗрж╕рзЗржЬ
ЁЯСд ржирж╛ржо: ${data.name}
ЁЯУз ржЗржорзЗржЗрж▓: ${data.email}
ЁЯУЭ ржорзЗрж╕рзЗржЬ: ${data.message}`;

  try {
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: text
      })
    });

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

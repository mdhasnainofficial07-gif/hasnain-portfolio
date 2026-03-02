exports.handler = async function (event) {

  try {

    // Data parse
    const data = JSON.parse(event.body || "{}");

    const name = data.name || "নাম দেওয়া হয়নি";
    const email = data.email || "ইমেইল দেওয়া হয়নি";
    const message = data.message || "মেসেজ দেওয়া হয়নি";

    // 🔐 এখানে তোমার Bot Token বসাও (অথবা Environment Variable ব্যবহার করো)
    const botToken = "8623893002:AAFRaw_M6w25H7AQA7ymK5BFeIpjrtXj1OI";
    const chatId = "2008582016";

    // 📩 সুন্দরভাবে বাংলা ফরম্যাট করা মেসেজ
    const text = `
📩 <b>নতুন মেসেজ (Portfolio Site)</b>

👤 <b>নাম:</b> ${name}
📧 <b>ইমেইল:</b> ${email}
📝 <b>মেসেজ:</b>
${message}
`;

    // Telegram API call
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML"
      })
    });

    const result = await response.json();

    if (!result.ok) {
      throw new Error("Telegram API Error");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };

  } catch (error) {

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };
  }
};

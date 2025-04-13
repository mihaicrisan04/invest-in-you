
export async function getSuggestedPrice(taskTitle: string): Promise<number> {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", { 
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "Invest In You",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3.3-70b-instruct:free",
        messages: [
          {
            role: "system",
            content: `You are an AI assistant helping users determine appropriate prices for tasks they might fail to complete.
            Consider:
            - The task's importance and impact on the user's life
            - The user's income level (${50})
            - The potential consequences of not completing the task
            Return only a number between 5 and 100 representing the recommended price in dollars that the user should pay if they fail to complete the task.`
          },
          {
            role: "user",
            content: `Task: ${taskTitle}`
          }
        ]
      })
    })

    if (!response.ok) {
      throw new Error('Failed to get AI recommendation');
    }

    const data = await response.json();
    const recommendedPrice = parseInt(data.choices[0].message.content);

    // Ensure the price is within reasonable bounds
    return Math.min(Math.max(recommendedPrice, 5), 100);
  } catch (error) {
    console.error('Error getting AI recommendation:', error);
    // Return a default value if AI service fails
    return 10;
  }
}

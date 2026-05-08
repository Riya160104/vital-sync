export const handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { patient } = JSON.parse(event.body);
    const apiKey = process.env.GEMINI_API_KEY;  // ← from Netlify env vars

    if (!apiKey) {
      throw new Error('Missing GEMINI_API_KEY');
    }

    // Dynamically import the SDK (ES module)
    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: 'models/gemini-2.5-flash',
      contents: `You are a medical assistant. Summarize the following patient's medical information in 2-3 short, professional sentences.
        Patient Name: ${patient.name}
        Age: ${patient.age}
        Blood Group: ${patient.bloodGroup}
        Diagnosis: ${patient.diagnosis || 'Not specified'}
        Provide a concise clinical summary.`
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ summary: response.text })
    };
  } catch (error) {
    console.error('Gemini function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
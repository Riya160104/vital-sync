import { GoogleGenAI } from "@google/genai";

async function listModels() {
  const ai = new GoogleGenAI({ apiKey: "AIzaSyAKTeFE6bZ1QrCYWYTbkaZKfZWxx0xlE4I" }); // YOUR ACTUAL KEY

  try {
    const response = await ai.models.list();
    console.log("Full response:", JSON.stringify(response, null, 2));
    
    // The models might be inside response.models or response itself might be an array
    const modelsList = response.models || response;
    
    if (Array.isArray(modelsList)) {
      console.log("📋 Available Models:");
      modelsList.forEach(model => {
        console.log(`- ${model.name} (Display: ${model.displayName})`);
      });
    } else {
      console.log("Unexpected response structure:", response);
    }
  } catch (error) {
    console.error("❌ Failed to fetch models:", error);
  }
}

listModels();
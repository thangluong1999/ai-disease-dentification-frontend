# 🌿 Smart Plant Disease Identification

A modern web interface for detecting plant diseases using AI. Upload an image or video of a plant, and get instant feedback on possible diseases, confidence level, and recommended actions.

## 🚀 Features

- Upload plant **images or videos** for diagnosis
- Real-time **media preview**
- Integration-ready with **any AI diagnosis API**
- **Diagnosis results** with confidence and recommendations
- **Loading indicator** during processing
- Interaction controls (disable buttons during API call)
- Mobile-responsive and modern UI with background

## 🛠️ Technologies

- HTML5
- CSS3 (with custom styles)
- JavaScript (Vanilla)
- Google Fonts

# Mock API:
https://run.mocky.io/v3/d22f1580-9dc3-4d04-b624-dcffd93dac68

# Sample Data Request:
{
  "file_name": "plant.jpg",
  "file_type": "image/jpeg",
  "file_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." 
}


# Sample Data Response:
{
    "disease": "Powdery Mildew",
    "confidence": 92.5,
    "recommended_actions": [
      "Apply sulfur-based fungicide.",
      "Improve air circulation around the plant.",
      "Remove infected leaves."
    ],
    "plant_type": "Tomato"
}
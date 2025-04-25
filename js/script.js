const mediaInput = document.getElementById("mediaInput");
const mediaContainer = document.getElementById("mediaContainer");
const result = document.getElementById("result");
const diagnosisDetails = document.getElementById("diagnosisDetails");
const loadingSpinner = document.getElementById("loadingSpinner");
const submitBtn = document.getElementById("submitBtn");

function previewMedia() {
  const file = mediaInput.files[0];
  if (!file) return;

  // Clear current media and hide old results
  mediaContainer.innerHTML = "";
  mediaContainer.style.display = "flex";
  result.style.display = "none";
  diagnosisDetails.style.display = "none";

  const mediaElement = file.type.startsWith("image")
    ? document.createElement("img")
    : document.createElement("video");
  mediaElement.src = URL.createObjectURL(file);
  if (file.type.startsWith("video")) {
    mediaElement.controls = true;
  }

  mediaContainer.appendChild(mediaElement);
}

async function sendToAPI() {
  if (mediaInput.files.length === 0) {
    alert("Please select an image or video file.");
    return;
  }

  // Loading state
  loadingSpinner.style.display = "block";
  submitBtn.disabled = true;
  mediaInput.disabled = true;
  result.style.display = "none";
  diagnosisDetails.style.display = "none";

  const formData = new FormData();
  formData.append("file", mediaInput.files[0]);

  try {
    const response = await fetch(
      "https://run.mocky.io/v3/d22f1580-9dc3-4d04-b624-dcffd93dac68",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    result.innerHTML = `
        <h3>Diagnosis Result: ${data.disease}</h3>
        <p><strong>Confidence:</strong> ${data.confidence}%</p>
        <p><strong>Plant Type:</strong> ${data.plant_type}</p>
    `;
    const actionsList = data.recommended_actions
      .map((action) => `<li>${action}</li>`)
      .join("");
    diagnosisDetails.innerHTML = `
        <h4>Recommended Actions:</h4>
        <ul>${actionsList}</ul>
    `;

    result.style.display = "block";
    diagnosisDetails.style.display = "block";
  } catch (error) {
    console.error(error);
    alert("An error occurred while sending data to the API.");
  } finally {
    loadingSpinner.style.display = "none";
    submitBtn.disabled = false;
    mediaInput.disabled = false;
  }
}

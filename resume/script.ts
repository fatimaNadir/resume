// Interface for form fields
interface ResumeFormValues {
  name: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  education: string;
  skills: string;
}

// Function to submit the form
function submitForm1(): void {
  // Get form values and assert the types, with null checks
  const nameInput = document.getElementById("name") as HTMLInputElement | null;
  const jobTitleInput = document.getElementById("jobTitle") as HTMLInputElement | null;
  const emailInput = document.getElementById("email") as HTMLInputElement | null;
  const phoneInput = document.getElementById("phone") as HTMLInputElement | null;
  const locationInput = document.getElementById("location") as HTMLInputElement | null;
  const educationInput = document.getElementById("education") as HTMLInputElement | null;
  const skillsInput = document.getElementById("skills") as HTMLInputElement | null;

  // Check if any input is null and return if so
  if (!nameInput || !jobTitleInput || !emailInput || !phoneInput || !locationInput || !educationInput || !skillsInput) {
    alert("Error: Some input elements are missing in the HTML.");
    return;
  }

  // Create a ResumeFormValues object
  const formValues: ResumeFormValues = {
    name: nameInput.value,
    jobTitle: jobTitleInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    location: locationInput.value,
    education: educationInput.value,
    skills: skillsInput.value,
  };

  // Check if any field is empty
  for (const [key, value] of Object.entries(formValues)) {
    if (!value) {
      alert(`Please fill in the ${key} field.`);
      return;
    }
  }

  // Display the entered information in an alert
  alert(`
    Full Name: ${formValues.name}
    Job Title: ${formValues.jobTitle}
    Email: ${formValues.email}
    Phone: ${formValues.phone}
    Location: ${formValues.location}
    Education: ${formValues.education}
    Skills: ${formValues.skills}
  `);
}

// Ensure the DOM is loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector("button") as HTMLButtonElement | null;
  if (submitButton) {
    submitButton.addEventListener("click", submitForm1);
  }
});

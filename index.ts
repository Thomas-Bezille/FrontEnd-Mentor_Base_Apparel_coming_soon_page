const input = document.querySelector("#email") as HTMLInputElement;
const formBtn = document.querySelector("#form-btn") as HTMLButtonElement;
const error = document.querySelector(".error") as HTMLDivElement;

formBtn?.addEventListener("click", e => {
  e.preventDefault();
  if (!isValidEmail(input.value)) {
    error.style.display = "block";
  } else {
    input.value = "";
  }
});

function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

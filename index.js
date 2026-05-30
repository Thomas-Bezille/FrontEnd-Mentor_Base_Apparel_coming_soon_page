const input = document.querySelector("#email");
const formBtn = document.querySelector("#form-btn");
const error = document.querySelector(".error");
formBtn === null || formBtn === void 0 ? void 0 : formBtn.addEventListener("click", e => {
    e.preventDefault();
    if (!isValidEmail(input.value)) {
        error.style.display = "block";
    }
    else {
        input.value = "";
    }
});
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
export {};
//# sourceMappingURL=index.js.map
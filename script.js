```javascript
document.addEventListener("DOMContentLoaded", function () {
    const profilePic = document.getElementById("profilePic");

    profilePic.addEventListener("error", function () {
        this.alt = "Profile picture could not be loaded";
        this.style.display = "none";

        const frame = this.parentElement;
        frame.style.background = "#f0d9dd";

        const message = document.createElement("p");
        message.textContent = "Please add your profile picture";
        message.style.cssText =
            "padding: 20px; text-align: center; color: #713b4b;";

        frame.appendChild(message);
    });

    console.log("Portfolio loaded successfully!");
});
```

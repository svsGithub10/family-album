 // Accordion open/close behavior
    document.querySelectorAll(".accordion-header").forEach((btn) => {
      btn.addEventListener("click", function () {
        const item = this.closest(".accordion-item");
        if (!item) return;

        const isOpen = item.classList.contains("open");
        const parentList = item.parentElement;

        // Close siblings at same level
        if (parentList) {
          parentList.querySelectorAll(".accordion-item.open").forEach((sib) => {
            if (sib !== item) sib.classList.remove("open");
          });
        }

        // Toggle current
        item.classList.toggle("open", !isOpen);
      });
    });

    // Info panel update when clicking final links
    const infoTitle = document.getElementById("display-title");
    const infoSubtitle = document.getElementById("display-subtitle");
    const infoMeta = document.getElementById("display-meta");
    const openLatestBtn = document.getElementById("open-latest");

    let lastClickedLink = null;

    document.querySelectorAll(".album-link").forEach((link) => {
      link.addEventListener("click", function () {
        const label = this.dataset.display || this.textContent.trim();
        lastClickedLink = this;

        infoTitle.textContent = label;
        infoSubtitle.textContent = "Opening Google Drive in a new tab.";
        infoMeta.textContent =
          "You just selected: " +
          label +
          ". This link goes directly to the Google Drive folder or file for this album. " +
          "Use the left panel to quickly switch between different family members, volumes, and wedding events.";
        // normal navigation will still happen (target="_blank")
      });
    });

    // Button: reopen last clicked album
    openLatestBtn.addEventListener("click", function () {
      if (lastClickedLink) {
        window.open(lastClickedLink.href, "_blank");
      } else {
        alert("Select any album or sub-function from the left panel first.");
      }
    });

      function showAlertAndRedirect(event) {
    event.preventDefault(); // Stop immediate opening

    alert("This is not the final high-quality version. A clearer video will be uploaded soon! Press OK to continue");

    // Redirect after clicking OK
    window.open("https://drive.google.com/drive/folders/1HbTFkF1UUT3mWNXjGnmePKnBP2yfZbm5?usp=drive_link", "_blank");
  }
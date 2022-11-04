function openNav() {
  const sidebar = document.querySelector(".sidebar_links");
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    document.querySelector(".sidebar_container").style.display = "block";
  } else {
    document.querySelector(".sidebar_container").style.display = "none";
  }
}

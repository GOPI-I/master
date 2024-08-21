function toggleSidebar() {
    const sidebar = document.getElementById("mySidebar");
    if (sidebar.style.right === "0px") {
        sidebar.style.right = "-250px";
    } else {
        sidebar.style.right = "0px";
    }
}

function closeSidebar() {
    document.getElementById("mySidebar").style.right = "-250px";
}
$('#ripple').ripples({
	resolution: 512,
	dropRadius: 20,
	perturbance: 0.04,
});
document.querySelectorAll('.btn-outline-info, .btn-outline-primary').forEach(button => {
    button.addEventListener('click', function() {
      window.location.href = 'login.html';
    });
  });
  
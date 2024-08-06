function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const isSidebarOpen = sidebar.style.left === '0px';
    
    if (isSidebarOpen) {
        sidebar.style.left = '-250px'; // Hide sidebar
    } else {
        sidebar.style.left = '0px'; // Show sidebar
    }
}

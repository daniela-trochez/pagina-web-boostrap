  <!-- Toggle sidebar desktop -->

    const sidebar = document.getElementById('sidebarFiltros');
    const btnToggle = document.getElementById('btnToggleSidebar');

    btnToggle.addEventListener('click', () => {
      sidebar.classList.toggle('tienda__sidebar--collapsed');
    });

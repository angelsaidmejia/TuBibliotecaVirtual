<script>
fetch('data/libros.json')
  .then(r => r.json())
  .then(libros => {
    const tbody = document.getElementById('tabla-libros');
    libros.forEach(libro => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${libro.titulo}</td>
        <td>${libro.autor}</td>
        <td>${libro.nivel}</td>
        <td>${libro.formatos.join(' / ')}</td>
        <td><a class="descargar" href="${libro.enlace}" target="_blank">Descargar</a></td>
      `;
      tbody.appendChild(tr);
    });
  });
</script>

# cv-web
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CV Singkat - Lulu Raudlatul Jannah</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="cv-singkat.css" />
  <script src="config.js" defer></script>
  <script src="cv-singkat.js" defer></script>
</head>
<body>
  <div class="toolbar no-print">
    <a href="index.html" class="btn-link">Buka CV Lengkap (Web)</a>
    <button type="button" class="btn-print" id="btn-print">Cetak / Simpan PDF</button>
  </div>

  <article class="cv-page" id="cv-print">
    <header class="cv-header">
      <img
        class="cv-photo"
        src="assets/profile.jpg"
        alt="Foto Lulu Raudlatul Jannah"
        width="88"
        height="88"
        id="cv-photo"
      />
      <div class="cv-intro">
        <h1>Lulu Raudlatul Jannah</h1>
        <p class="tagline">Mahasiswa S1 Manajemen · UMY</p>
        <p class="meta">Yogyakarta · 19 Agustus 2005</p>
      </div>
    </header>

    <div class="cv-body">
      <section class="cv-col main">
        <section>
          <h2>Profil</h2>
          <p>
            Mahasiswa Manajemen dengan keahlian merapikan data Excel (rumus), magang di BPBD,
            input pajak DJP Online, serta pengelolaan stok &amp; utang di usaha keluarga.
            Memiliki sertifikat kewirausahaan, public speaking, dan entrepreneurship.
          </p>
        </section>

        <section>
          <h2>Pendidikan</h2>
          <ul class="compact-list">
            <li>
              <strong>S1 Manajemen</strong> — Universitas Muhammadiyah Yogyakarta
              <span class="muted">(Sedang berkuliah)</span>
            </li>
            <li>
              <strong>SMA</strong> — SMA Muhammadiyah 2 Yogyakarta
            </li>
          </ul>
        </section>

        <section>
          <h2>Pengalaman</h2>
          <ul class="compact-list">
            <li><strong>Magang BPBD</strong> — Penggunaan aplikasi &amp; administrasi instansi</li>

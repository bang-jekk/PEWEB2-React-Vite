import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // 1. Variabel Perkenalan Diri
  const biodata = {
    nama: "Nichol",
    pekerjaan: "Computer Network Engineer & Web Developer",
    tanggalLahir: "1998-11-28" // Format: YYYY-MM-DD
  }

  // 3. Dummy Data 5 Film Favorit (Gambar dari Unsplash)
  const favoriteMovies = [
    {
      id: 1,
      title: "Inception",
      genre: "Sci-Fi / Thriller",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      title: "Interstellar",
      genre: "Sci-Fi / Drama",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      title: "The Dark Knight",
      genre: "Action / Crime",
      image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 4,
      title: "The Matrix",
      genre: "Sci-Fi / Action",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 5,
      title: "Avatar: The Way of Water",
      genre: "Fantasy / Sci-Fi",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=60"
    }
  ]

  // 2. Function untuk Mengecek Zodiac berdasarkan Tanggal Lahir
  const checkZodiac = () => {
    const dateObj = new Date(biodata.tanggalLahir);
    const month = dateObj.getMonth() + 1; // getMonth() dimulai dari 0
    const day = dateObj.getDate();
    
    let zodiac = "";

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) zodiac = "Aries ♈";
    else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) zodiac = "Taurus ♉";
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) zodiac = "Gemini ♊";
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) zodiac = "Cancer ♋";
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) zodiac = "Leo ♌";
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) zodiac = "Virgo ♍";
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) zodiac = "Libra ♎";
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) zodiac = "Scorpio ♏";
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) zodiac = "Sagittarius ♐";
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) zodiac = "Capricorn ♑";
    else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) zodiac = "Aquarius ♒";
    else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) zodiac = "Pisces ♓";
    else zodiac = "Tanggal Lahir Tidak Valid";

    alert(`Halo ${biodata.nama}! Berdasarkan tanggal lahir Anda (${day}/${month}), Zodiak Anda adalah: ${zodiac}`);
  }

  // Format tanggal lahir agar tampil rapi di UI
  const formatTanggal = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  }

  return (
    <>
      {/* SECTION CENTER: Profil & Identitas Utama */}
      <section id="center">
        <div className="hero">
          {/* Gunakan gambar cadangan jika berkas lokal heroImg tidak tersedia */}
          <img src={heroImg || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500"} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        
        <div className="profile-card">
          <h1>Hello, I'm {biodata.nama}</h1>
          <p className="subtitle">{biodata.pekerjaan}</p>
          
          <div className="profile-details">
            <p><strong>Tanggal Lahir:</strong> {formatTanggal(biodata.tanggalLahir)}</p>
          </div>

          <button
            type="button"
            className="counter"
            onClick={checkZodiac}
          >
            🔮 Cek Zodiak Saya
          </button>
        </div>
      </section>

      <div className="ticks"></div>

      {/* SECTION MOVIES: Menampilkan 5 Film Favorit */}
      <section className="movies-section">
        <h2>🎬 My Top 5 Favorite Movies</h2>
        <p style={{ marginBottom: '24px' }}>Daftar film fiksi ilmiah dan aksi kurasi terbaik pilihan saya.</p>
        
        <div className="movies-grid">
          {favoriteMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <div className="movie-img-container">
                <img src={movie.image} alt={movie.title} className="movie-img" />
              </div>
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <span className="movie-genre">{movie.genre}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="ticks"></div>

      {/* SECTION NEXT STEPS: Tautan Komunitas & Dokumentasi */}
      <section id="next-steps">
        <div id="docs">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <h2>Dokumentasi & Tugas</h2>
          <p>Kumpulkan link GitHub proyek Anda melalui Google Sheets maksimal minggu depan.</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank" rel="noreferrer">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn React
              </a>
            </li>
          </ul>
        </div>
        
        <div id="social">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <h2>Hubungkan ke Komunitas</h2>
          <p>Bergabung dengan ekosistem dan repositori kode resmi.</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">
                <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub Vite
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
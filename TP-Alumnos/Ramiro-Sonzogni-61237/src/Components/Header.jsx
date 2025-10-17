function Header() {
  return (
    <header style={{ 
      padding: '30px 60px', 
      display: 'flex',
      alignItems: 'center',
      gap: '25px',
      width: '100vw',
      margin: '0',
      boxSizing: 'border-box',
      backgroundColor: '#1a1a1a',
      borderBottom: '1px solid #333',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
    }}>
      <img 
        src="/Foto-Ramiro.jpg" 
        alt="Ramiro Sonzogni" 
        style={{ 
          width: '120px', 
          height: '180px',
          borderRadius: '50%',
          objectFit: 'cover',
          objectPosition: 'center 5%',
          border: '3px solid #444',
          boxShadow: '0 3px 10px rgba(0,0,0,0.4)'
        }} 
      />
      <div>
        <h1 style={{ 
          fontSize: '2rem', 
          margin: '0',
          fontWeight: '700',
          letterSpacing: '1px'
        }}>
          RAMIRO SONZOGNI
        </h1>
        <p style={{ 
          color: '#999', 
          marginTop: '5px', 
          fontSize: '1rem',
          fontWeight: '300'
        }}>
          Desarrollador Full Stack
        </p>
        <p style={{ 
          color: '#666', 
          marginTop: '3px', 
          fontSize: '0.9rem' 
        }}>
          📍 Tucumán, Argentina
        </p>
      </div>
    </header>
  );
}

export default Header;

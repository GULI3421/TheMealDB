import React from 'react';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const countries = [
  { name: 'American', code: 'us' },
  { name: 'British', code: 'gb' },
  { name: 'Canadian', code: 'ca' },
  { name: 'Chinese', code: 'cn' },
  { name: 'Croatian', code: 'hr' },
  { name: 'Dutch', code: 'nl' },
  { name: 'Egyptian', code: 'eg' },
  { name: 'Filipino', code: 'ph' },
  { name: 'French', code: 'fr' },
  { name: 'Greek', code: 'gr' },
  { name: 'Indian', code: 'in' },
  { name: 'Irish', code: 'ie' },
  { name: 'Italian', code: 'it' },
  { name: 'Jamaican', code: 'jm' },
  { name: 'Japanese', code: 'jp' },
  { name: 'Kenyan', code: 'ke' },
  { name: 'Malaysian', code: 'my' },
  { name: 'Mexican', code: 'mx' },
  { name: 'Moroccan', code: 'ma' },
  { name: 'Polish', code: 'pl' },
  { name: 'Portuguese', code: 'pt' },
  { name: 'Russian', code: 'ru' },
  { name: 'Spanish', code: 'es' },
  { name: 'Thai', code: 'th' },
  { name: 'Tunisian', code: 'tn' },
  { name: 'Turkish', code: 'tr' },
  { name: 'Ukrainian', code: 'ua' },
  { name: 'Vietnamese', code: 'vn' },
];

export default function Footer({ onSelectLetter, onSelectCountry }) {
  return (
    <footer style={styles.container}>
   
      <div style={styles.section}>
        <h3 style={styles.title}>Browse Country</h3>
        <div style={styles.flagsGrid}>
          {countries.map((c) => (
            <img
              key={c.code}
              src={`https://flagcdn.com/w40/${c.code}.png`}
              alt={c.name}
              title={c.name}
              style={styles.flagItem}
              onClick={() => onSelectCountry && onSelectCountry(c.name)}
            />
          ))}
        </div>
      </div>


      <div style={styles.section}>
        <h3 style={styles.title}>Browse By Name</h3>
        <div style={styles.alphabetRow}>
          {alphabet.map((letter, index) => (
            <React.Fragment key={letter}>
              <span
                style={styles.letter}
                onClick={() => onSelectLetter && onSelectLetter(letter)}
              >
                {letter}
              </span>
              {index < alphabet.length - 1 && <span style={styles.separator}>/</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

   
      <div style={styles.bottomBar}>
        <div>
          <p>© 2026 TheMealDB</p>
          <p style={{ fontSize: '12px', color: '#888' }}>Proudly built in the UK 🇬🇧</p>
        </div>

        <div style={styles.links}>
          <a href="#" style={styles.link}>Terms</a>
          <a href="#" style={styles.link}>Privacy</a>
          <a href="#" style={styles.link}>Contact</a>
          <a href="#" style={styles.link}>Refunds</a>
        </div>
      </div>
    </footer>
  );
}


const styles = {
  container: {
    backgroundColor: '#1d1d1d',
    color: '#ffffff',
    padding: '30px 20px',
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
  section: {
    marginBottom: '30px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#fff',
  },
  flagsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '6px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  flagItem: {
    width: '32px',
    height: '20px',
    cursor: 'pointer',
    objectFit: 'cover',
    borderRadius: '2px',
  },
  alphabetRow: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    fontSize: '18px',
  },
  letter: {
    color: '#d65a31',
    cursor: 'pointer',
    fontWeight: 'bold',
    padding: '0 4px',
  },
  separator: {
    color: '#d65a31',
  },
  bottomBar: {
    marginTop: '40px',
    paddingTop: '20px',
    borderTop: '1px solid #333',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1000px',
    margin: '0 auto',
    fontSize: '14px',
  },
  links: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#ccc',
    textDecoration: 'none',
  },
};
import React from 'react'
import './index.css'          // Global CSS
import styles from './ModuleBox.module.css' // CSS Module

export default function App() {
  // --- Inline Styles Component ---
  const InlineButton = () => {
    const style = {
      backgroundColor: '#1976d2',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '6px',
      cursor: 'pointer',
    }
    return <button style={style}>Inline Styled Button</button>
  }

  // --- CSS Module Component ---
  const ModuleBox = () => <div className={styles.box}>Box styled with CSS Module</div>

  // --- Global CSS Component ---
  const GlobalBox = () => <div className="global-box">Box styled with Global CSS</div>

  return (
    <div style={{ padding: 20 }}>
      <h1>React CSS Demo</h1>

      <section style={{ marginBottom: 20 }}>
        <h2>1. Inline Styles</h2>
        <InlineButton />
      </section>

      <section style={{ marginBottom: 20 }}>
        <h2>2. CSS Module Styles</h2>
        <ModuleBox />
      </section>

      <section>
        <h2>3. Global CSS</h2>
        <GlobalBox />
      </section>
    </div>
  )
}

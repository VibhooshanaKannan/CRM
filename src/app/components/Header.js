'use client';
import React from 'react';
import styles from '../styles/Header.module.css';
import { FaSearch, FaSort, FaFilter, FaUser } from 'react-icons/fa';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.searchContainer}>
        <FaSearch className={styles.searchIcon} />
        <input type="text" placeholder="Search customer..." />
      </div>
      <div className={styles.headerActions}>
        <button className={styles.iconButton}><FaSort /> Sort by</button>
        <button className={styles.iconButton}><FaFilter /> Filters</button>
        <button className={styles.iconButton}><FaUser /> Me</button>
        <button className={styles.addButton}>+ Add customer</button>
      </div>
    </header>
  );
}

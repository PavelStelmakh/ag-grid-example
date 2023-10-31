import React from 'react';
import { createRoot } from 'react-dom/client';
import { DataGrid } from './data-grid';

function renderApp() {
  createRoot(document.getElementById('root')).render(<DataGrid />);
}

document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});

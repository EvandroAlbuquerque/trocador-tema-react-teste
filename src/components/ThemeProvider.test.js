import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from './ThemeProvider';
import AppContent from './AppContent';


test('exibe o tema inicial corretamente', () => {
    render(
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    );
 
    expect(screen.getByText(/tema atual: light/i)).toBeInTheDocument();
});


test('alterna o tema ao clicar no botão', () => {
    render(
        <ThemeProvider>
        <AppContent />
        </ThemeProvider>
    );


    // Verifica o tema inicial
    expect(screen.getByText(/tema atual: light/i)).toBeInTheDocument();


    // Alterna o tema
    fireEvent.click(screen.getByText(/alternar tema/i));
    expect(screen.getByText(/tema atual: dark/i)).toBeInTheDocument();


    // Alterna novamente
    fireEvent.click(screen.getByText(/alternar tema/i));
    expect(screen.getByText(/tema atual: light/i)).toBeInTheDocument();
});

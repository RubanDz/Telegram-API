import { defineConfig } from 'vite';

export default defineConfig({
  // Настройка базового пути для деплоя (если нужно)
  base: '/',
  build: {
    outDir: 'dist', // Папка для сборки
  },
  server: {
    port: 5173, // Стандартный порт Vite
  }
});

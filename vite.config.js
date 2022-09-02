import path from 'path'

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'src/index.html'),
        about: path.resolve(__dirname, 'src/pages/About-me/about-me.html'),
        contact: path.resolve(__dirname, 'src/pages/Procedures/Procedures.html'),
        procedures: path.resolve(__dirname, 'src/pages/Contact/contact.html'),
      }
    }
  }
}
import './assets/styles/global.scss'
import AppIndex from './components/AppIndex'
import Navbar from './components/Navbar'

function App() {
     // TODO: build footer cmp
     return (
          <section className="app-container flex column">
               <Navbar />
               <AppIndex />
          </section>
     )
}
export default App

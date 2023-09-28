import './app.scss'
import Header from './components/header/Header'
import Meme from './components/body/Meme'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {

  return (
    <div>
      <Header />
      <Meme />
    </div>
  )
}

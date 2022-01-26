import ReactDom from "react-dom"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

ReactDom.render(<App />,document.getElementById("root"))
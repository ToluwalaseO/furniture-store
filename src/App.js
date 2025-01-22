import './App.css'
import Header from "./Header"
import Part1 from "./Part1"
import Part2 from"./Part2"
import Collections from "./Collections.js"
import TopSection from "./TopSection"
import BottomSection from "./BottomSection"
import Footer from "./Footer"

function App() {
  return (
    <div>
      <Header/>
      <Part1/>
      <Part2/>
      <Collections/>
      <TopSection/> 
      <BottomSection/>
      <Footer/>
    </div>
  );
}

export default App;

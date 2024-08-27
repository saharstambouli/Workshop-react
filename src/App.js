import logo from './logo.svg';
import './App.css';
import NewComponent from './NewComponent';
import NavBar from './NavBar';
import HtmlToJsx from './HtmlToJsx';
import Images from './Images';
import ProductCard from './ProductCard';
import FromTabler from './FromTabler';

function App() {
  return (
    <div className="">
       <NavBar/>
      <header className="">
        {/* convert html code to jsx  */}
        <HtmlToJsx/>


        <Images/>

        <ProductCard/>

        <FromTabler/>
      </header>

      
    </div>
  );
}

export default App;

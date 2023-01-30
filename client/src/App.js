import {ChakraProvider, chakraProvider} from '@chakra-ui/react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Cart from './screens/Cart';
import Products from './screens/Products';

function App() {
  return (
     <ChakraProvider>
       <Router>
          <Navbar />
           <main>
             <Routes>
               <Route path="/products" element={<Products />} />
               <Route path="/cart" element={<Cart />} />


             </Routes>
           </main>
       </Router>
    </ChakraProvider>
  );
}

export default App;

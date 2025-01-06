import './App.css'
import Navigation from "./component/Navigation";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom"; //router สำหรับ link
import Home from "./component/page/Home"
import Member from "./component/page/Member"
import Product from "./component/page/Product"


function App() {
  return (
    <Router> 
      <Navigation/>
      <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/Member" component={Member}/>
          <Route path="/Product" component={Product}/>
      </Switch>
    </Router>
  );
}

export default App;

{/* <Router> ไว้สำหรับคลอบ link ใน nav */}
//exact บอกว่าคือหน้าแรก
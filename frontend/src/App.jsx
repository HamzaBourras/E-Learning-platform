// import LayoutPage from "./layout/LayoutPage";
import Background from './assets/images/lines.png';
import { MyRoutes } from './router/routes';

function App() {
  return (

    <div className={`relative min-h-screen min-w-screen bg-slate-200 transition-all delay-100`}>
      <img src={Background} className="invert opacity- absolute z-0 w-full h-full object-cover" alt="" />
        <MyRoutes />
      {/* <LayoutPage>
      </LayoutPage> */}
    </div>

  )
}

export default App

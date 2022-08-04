import { Footer,Loader,NavBar,Services,Welcome } from './components';

const App = () => {

  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <NavBar/>
        <Welcome/>
      </div>
      <Services/>
      <Footer/>

    </div>

    // <div>
    //   <LogIn/>
    // </div>
  )
}

export default App

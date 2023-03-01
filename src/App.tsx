import {
  Hero,
  Navbar,
  Projects,
  Welcome,
  CurrentProject,
  Specialization,
  Contact,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Projects />
        <Specialization />
        <CurrentProject /> 
     <Contact /> 
      </main>
      <Footer />
    </>
  );
}

export default App;

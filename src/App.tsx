import {
  Hero,
  Navbar,
  Projects,
  Welcome,
  CurrentProject,
  Specialization,
  Contact,
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
    </>
  );
}

export default App;

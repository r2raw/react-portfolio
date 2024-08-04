
import Header from "./Header";
import About from "./aboutContent/About";
import Certificate from "./certificatesContent/Certificate";
import Contacts from "./contactsContent/Contacts";
import Home from "./homeContent/Home";
function Index() {
  
  return (
    <main className=" px-10">
      <Header />
      <Home />
      <About />
      <Certificate />
      <Contacts />
    </main>
  )
}

export default Index
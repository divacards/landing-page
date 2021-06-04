import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <Layout pageTitle="diva cards">
        <Header />
        <Hero />
        {/* <Feature /> */}
        <Service />
        {/* <About /> */}
      <Footer />
    </Layout>
  );
}

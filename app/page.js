import Reviews from "@/components/Reviews";
import PreCTA from "@/components/home/PreCTA";
import Editor from "@/components/home/flow/Editor";
import Header from "@/components/home/header/Header";
import Enterprise from "@/components/home/Enterprise";
import Features from "@/components/home/features/Features";
import Template from "@/components/home/templates/Template";

const Home = () => {
  return (
    <>
      <Header />
      <Features />
      <Editor />
      <Template />
      <Enterprise />
      <Reviews />
      <PreCTA />
    </>
  );
};

export default Home;

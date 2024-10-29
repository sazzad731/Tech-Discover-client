import PropTypes from "prop-types";
import { createContext, useEffect, useRef, useState } from "react";


export const PageScrollContext = createContext(null);

const PageScrollProvider = ({ children }) => {
  const featuredSectionRef = useRef(null);
  const trendingSectionRef = useRef(null);
  const [ activeSection, setActiveSection ] = useState("");

  const scrollToSection = (section) => {
    const sectionRefs = {
      featuredSection: featuredSectionRef,
      trendingSection: trendingSectionRef,
    };
    sectionRefs[ section ]?.current?.scrollIntoView({
      behavior: "smooth",
    })
    setActiveSection(section);
  };

  const handleScroll = ()=>{
    if(featuredSectionRef.current || trendingSectionRef.current){
      const sectionPosition = {
        featuredSection:
          featuredSectionRef?.current?.getBoundingClientRect().top,
        trendingSection:
          trendingSectionRef?.current?.getBoundingClientRect().top,
      };

      const threshold = window.innerHeight / 2;

      if(sectionPosition.featuredSection < threshold && sectionPosition.featuredSection >= -threshold){
        setActiveSection("featuredSection");
      }else{
        setActiveSection("");
      }
      if (
        sectionPosition.trendingSection < threshold &&
        sectionPosition.trendingSection >= -threshold
      ) {
        setActiveSection("trendingSection");
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  const scrollInfo = { featuredSectionRef,trendingSectionRef, scrollToSection, activeSection };
  return (
    <PageScrollContext.Provider value={scrollInfo}>
      {children}
    </PageScrollContext.Provider>
  );
};


PageScrollProvider.propTypes = {
  children: PropTypes.object,
};

export default PageScrollProvider;
import PropTypes from "prop-types";
import { createContext, useEffect, useRef, useState } from "react";


export const PageScrollContext = createContext(null);

const PageScrollProvider = ({ children }) => {
  const featuredSectionRef = useRef(null);
  const [ activeSection, setActiveSection ] = useState("");

  const scrollToSection = (section) => {
    const sectionRefs = {
      featuredSection: featuredSectionRef,
    };
    sectionRefs[ section ]?.current?.scrollIntoView({
      behavior: "smooth",
    })
    setActiveSection(section);
  };

  const handleScroll = ()=>{
    if(featuredSectionRef.current){
      const sectionPosition = {
        featuredSection: featuredSectionRef?.current?.getBoundingClientRect().top
      };

      const threshold = window.innerHeight / 2;

      if(sectionPosition.featuredSection < threshold && sectionPosition.featuredSection >= -threshold){
        setActiveSection("featuredSection");
      }
      if (sectionPosition.featuredSection > 700) {
        setActiveSection("");
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  const scrollInfo = { featuredSectionRef, scrollToSection, activeSection };
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
import React ,{useState , useEffect} from 'react';


import './scroll.css';

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
      <div className="top-to-btm">
      {" "}
      {showTopBtn && (
          <div className='icon-style icon-position' onClick={goToTop}>
            <i className="fa-solid fa-angles-up"></i>
            </div>
      )}{" "}
  </div>
    );
};
export default ScrollToTop
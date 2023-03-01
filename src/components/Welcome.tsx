import React ,{useRef , useEffect , useState}from 'react'
import { stairs, stairs2 } from '../assets'
import '../styles/welcome.css'
import { useInView } from 'react-intersection-observer'
const Welcome = () => {
  const {ref:welcomeRef, inView:sectionVisible } = useInView(
    {
      /* Optional options */
      threshold: 0.4,
      triggerOnce:true,
    }
  )
/*   const welcomeRef = useRef<HTMLDivElement>(null);
  const [ sectionVisible , setSectionVisible] = useState(false)
  console.log(sectionVisible)
  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0];
      setSectionVisible(entry.isIntersecting)
   
    })
    if(welcomeRef.current !== null){
      observer.observe(welcomeRef.current)
    }
    
  },[]) */

  return (
  <section>
    <div className={`section-welcome  ${sectionVisible? "animate-welcome": " "}` } ref={welcomeRef}>
        <div className="welcome-content">
            <h6>WELCOME</h6>
            <h1>we turn your dreams into reality</h1>
            <hr/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, impedit excepturi. Exercitationem deleniti totam dolores, sunt quod delectus accusamus laudantium quas nesciunt sequi officiis, debitis qui libero suscipit aperiam quisquam?</p>
            <button>
                READ MORE
            </button>
        </div>
        <div className='stairs-images'>
        <img src={stairs} alt="stairs" />
            <img src={stairs2} alt="stairs2" />
        </div>
    </div>
  </section>
  )
}

export default Welcome
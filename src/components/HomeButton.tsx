import {BsFillArrowUpCircleFill} from 'react-icons/bs'

import { Link } from "react-scroll";

function HomeButton() {
  return (
    <div className="md:hidden z-50 cursor-pointer opacity-[0.4] fixed bottom-[30px] right-[30px] text-5xl rounded-[100%] hover:opacity-[1] transition-all duration-400 ease-in">
        <Link to='home' spy={true} smooth={true} offset={-100} duration={300}><BsFillArrowUpCircleFill/></Link>
    </div>
  )
}

export default HomeButton
import './styless.css'
import { google } from './import';


const Heading = ({creator}) => {
    return ( 
        <div className="heading">
            <img src={google} alt='vero'  />
            <h4 className="heading_name">amyrobot</h4>
            {!creator && <span className='creator-span'>you</span>}
            <p className="heading_time"> 2 months ago</p>
            
        </div>
     );
}
 
export default Heading;
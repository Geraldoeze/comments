import Heading from "./Heading";
import Article from "./Article";
import ButtonSelect from "./ButtonSelect";

const Contents = ({val, currentUser, openButton}) => {
    return ( 
        <>
            <Heading   headData={val.user} create={val.createdAt} currentUser={currentUser} />
            <Article  articleData={val.content} />
            <ButtonSelect  score={val.score}  currentUser={currentUser}  userData={val.user} show={openButton} ID={val.id} />
        </>
     );
}
 
export default Contents;
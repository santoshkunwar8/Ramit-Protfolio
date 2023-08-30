import { ImDownload } from "react-icons/im"
import { CVItemWrapper } from "./CVitem.styles"
type CvItemProps = {
  cvUrl :string,
}
const CvItem:React.FC<CvItemProps> = ({cvUrl}) => {

  return (
    <CVItemWrapper>
        <div className="cvBg">
            <ImDownload/>
        </div>
              <img src={cvUrl} alt="cvImage" />
    </CVItemWrapper>
  )
}


export default CvItem

import { certImages } from "../../myData";
import { useParams } from 'react-router-dom';
import Modal from '../../UI/Modal';
function CertImage() {
    const {index} = useParams();
  return (
    <Modal>
        <img src={certImages[index].imgSrc} />
    </Modal>
  )
}

export default CertImage
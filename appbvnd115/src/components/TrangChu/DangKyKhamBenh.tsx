import {
    IonCol, IonGrid, IonRow, IonNavLink
} from "@ionic/react";
import { Link } from 'react-router-dom';
//ảnh
import iconTaiKhamTaiKhoa from '../../static/icon/exchange.png'
import iconKYC from '../../static/icon/star.png'
import iconVip from '../../static/icon/crown.png'
import iconBHYT from '../../static/icon/credit-card.png'
import iconDKKB from '../../static/icon/calendar.png'
//css
import "./DangKyKhamBenh.css"
//components
import KhamYeuCau from "../../pages/DangKyKhamBenh/KhamYeuCau";
const DangKyKhamBenh = () => {
    return (<div className="div-dangkykhambenh">
        <div style={{ textAlign: "center" }}>
            <img src={iconDKKB} width={50} />
            <br></br>
            <label className='lable-title-chucnang' >Đăng ký khám bệnh</label>
        </div>
        <IonNavLink routerDirection="forward" component={() => <KhamYeuCau />}>
            <button>click</button>
        </IonNavLink>
        <IonGrid>
            <IonRow>
                <IonCol >
                    <div className="div-item-dangkykhambenh">
                        <img src={iconTaiKhamTaiKhoa} width={35} />
                        <br></br>
                        <label className="lable-DangKyKhamBenh">Tái khám tại khoa</label>
                    </div>
                </IonCol>
                <IonCol >
                    <Link to="/dangkykhambenh/khamyeucau">
                        <div className="div-item-dangkykhambenh ">
                            <img src={iconKYC} width={35} />
                            <br></br>
                            <label className="lable-DangKyKhamBenh">Khám theo yêu cầu</label>
                        </div>
                    </Link>
                </IonCol>
            </IonRow>
        </IonGrid>
        <IonGrid>
            <IonRow>
                <IonCol >
                    <div className="div-item-dangkykhambenh">
                        <img src={iconBHYT} width={35} />
                        <br></br>
                        <label className="lable-DangKyKhamBenh">BHYT, thu phí</label>
                    </div>
                </IonCol>
                <IonCol >
                    <div className="div-item-dangkykhambenh">
                        <img src={iconVip} width={35} />
                        <br></br>
                        <label className="lable-DangKyKhamBenh">Khám VIP</label>
                    </div>
                </IonCol>
            </IonRow>
        </IonGrid>
    </div >)
}
export default DangKyKhamBenh
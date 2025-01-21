import { IonCol, IonGrid, IonRow } from '@ionic/react';

import iconTongDai from "../../static/icon/phone.png"

const TongDai = () => {
    return (<div className="div-dangkykhambenh">
        <img src={iconTongDai} width={50} />
        <br></br>
        <label className='lable-title-chucnang' >Tổng đài</label>
        <br></br>
        <label >Chăm sóc khách hàng</label>
        <IonGrid>
            <IonRow>
                <IonCol><div className="div-phonenumber">(028) 38.683496</div></IonCol>
                <IonCol><div className="div-phonenumber">1900 09.99.83</div></IonCol>
            </IonRow>
        </IonGrid>
        <label>Khám VIP - Doanh nhân</label>
        <IonGrid>
            <IonRow>
                <IonCol><div className="div-phonenumber">(028) 38.684.539</div></IonCol>
                <IonCol><div className="div-phonenumber">0902.768.115</div></IonCol>
            </IonRow>
        </IonGrid>
    </div>)
}
export default TongDai
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonAvatar,
  IonToolbar
} from "@ionic/react";
//ảnh
import Logo from "../static/images/appicon.svg"
import { peopleCircle } from 'ionicons/icons';;
//css
import "./TrangChu.css"
//component
import DangKyKhamBenh from "../components/TrangChu/DangKyKhamBenh";
import ThanhToan from "../components/TrangChu/ThanhToan";
import KetQuaCLS from "../components/TrangChu/KetQuaCLS";
import LichSuKham from "../components/TrangChu/LichSuKham";
import TongDai from "../components/TrangChu/TongDai";
import FooterBanner from "../components/TrangChu/FooterBanner";
const TrangChu = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonAvatar slot="start">
            <img src={Logo} />
          </IonAvatar>
          <IonTitle style={{ textAlign: "center" }}  ><label style={{ fontWeight: "700", fontSize: "16px", color: "#00378A" }}>BỆNH VIỆN NHÂN DÂN 115</label>
            <br></br>
            <label style={{ fontSize: "13px", color: "#00378A" }}>Trao sức khỏe - Trao yêu thương</label></IonTitle>
          <IonAvatar slot="end" style={{ width: "40px", height: "40px" }} >
            <img src={peopleCircle} />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
      <IonContent className="div-content" fullscreen>
        <div className="div-banner">
          <div style={{ marginBottom: "10px" }}><label style={{ fontSize: "32px", fontWeight: 500, }}>Chăm sóc sức khỏe</label></div>
          <br></br>
          <div style={{ marginBottom: "8px" }}><label style={{ fontSize: "18px" }}>Đặt lịch khám và chăm sóc sức khỏe mọi lúc, mọi nơi</label></div>
          <br></br>
          <button className="button-banner" > Đặt lịch ngay</button>
        </div>
        <DangKyKhamBenh></DangKyKhamBenh>
        <ThanhToan></ThanhToan>
        <KetQuaCLS></KetQuaCLS>
        <LichSuKham></LichSuKham>
        <TongDai></TongDai>
        <FooterBanner></FooterBanner>
      </IonContent>
    </IonPage>
  );
};
export default TrangChu;

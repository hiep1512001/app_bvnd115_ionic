import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonAvatar ,
  IonToolbar,
} from "@ionic/react";
//ảnh
import Logo  from "../static/images/appicon.svg"
const TrangChu = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonAvatar slot="start">
        <img alt="Silhouette of a person's head" src={Logo} />
      </IonAvatar>
      <IonTitle >Bệnh Viện nhân</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};
export default TrangChu;

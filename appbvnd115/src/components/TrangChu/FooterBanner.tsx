import iconBv115 from "../../static/images/appicon.svg"
const FooterBanner = () => {
    return (
        <div className="div-footer-banner">
            <img src={iconBv115} width={85} style={{ borderRadius: "50%" }} />
            <br></br>
            <label style={{ fontSize: "28px", fontWeight: "500", color: "#00d9d6", margin: "15px 0px 0px 0px" }}>Bệnh viện nhân dân 115</label>
            <div style={{ margin: "7px 0px 0px 0px" }}>
                <label style={{ fontSize: "16px" }}>Địa chỉ: 527 Sư Vạn Hạnh, Phường 12, Quận 10, Thành phố Hồ Chí Minh</label>
            </div>
            <div style={{ margin: "7px 0px 0px 0px" }}>
                <label style={{ fontSize: "16px" }}>Số điện thoại: 02838652368 - 028 3865 4139 - 02838655110, Fax 0283865 5193</label>
            </div>
        </div>
    )
}
export default FooterBanner
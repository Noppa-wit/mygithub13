import React from "react";

function Proffer() {
    return (
        <div className="row">
            <div id="home" className="container  p-4" style={{ backgroundColor: "#303481", borderRadius: "8px" }}>
                <div className="text-start proffer">
                    <h2 className="my-3" style={{ fontSize: "2rem", color: "#ffff" }}>
                        ข้อเสนอพิเศษสำหรับวันหยุดสุดสัปดาห์
                    </h2>
                    <p style={{ fontSize: "1.2rem", color: "#ffff" }}>
                        รับส่วนลดสำหรับการเข้าพักระหว่างวันที่ 24 พฤศจิกายน – 30 พฤศจิกายน 2567
                    </p>
                    <img
                        src="/img/hotel1.jpg"
                        alt="โรงแรม"
                        className="img-fluid rounded img-proffer"
                    />
                </div>
            </div>
        </div>
    );
}

export default Proffer;

import React from "react";

function Proffer() {
    return (
        <div className="row">
            <div id="room" className="container my-5">
                <h2 className="text-center mb-4">สำรวจห้องพัก</h2>
                <div className="row text-center">
                    <div className="col-md-4">
                        <img src="/img/deluxe-room.jpg" alt="ห้องพัก Deluxe" className="img-fluid rounded" />
                        <h3>Deluxe Room</h3>
                        <p>ห้องพักหรูพร้อมสิ่งอำนวยความสะดวกครบครัน</p>
                    </div>
                    <div className="col-md-4">
                        <img src="/img/premier-room.jpg" alt="ห้องพัก Premier" className="img-fluid rounded" />
                        <h3>Premier Room</h3>
                        <p>ห้องพักที่ผสมผสานความทันสมัยและความสะดวกสบาย</p>
                    </div>
                    <div className="col-md-4">
                        <img src="/img/junior-suite.jpg" alt="ห้องพัก Junior Suite" className="img-fluid rounded" />
                        <h3>Junior Suite</h3>
                        <p>ห้องพักที่กว้างขวาง เหมาะสำหรับครอบครัว</p>
                    </div>
                </div>
            </div>

            <footer id="contact" className="bg-light text-center py-4">
                <h3>ติดต่อเรา</h3>
                <p>1480 Hotel Chiang Mai, 2 Sukasem Road, Chang Phueak, Mueang Chiang Mai 50300</p>
                <p>Email: 1480hotel.chiangmai@gmail.com | โทร: 053-213-061</p>
            </footer>
        </div>
    );
}

export default Proffer;

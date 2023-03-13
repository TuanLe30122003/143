import "./wishPhrase.css";

function WishPhrase() {
    return (
        <div className="mainContent">
            {/* <div class="card">Open our present !</div> */}


            <div class="card">
                <div class="tools">
                    <div class="circle">
                        <span class="red box"></span>
                    </div>
                    <div class="circle">
                        <span class="yellow box"></span>
                    </div>
                    <div class="circle">
                        <span class="green box"></span>
                    </div>
                </div>
                <div class="card__content">
                    <div class="page">
                        <p>Hôm nay là ngày Valentine trắng ròi, cái này anh làm cũng hơi vội nên nó cũng hơi phèn tý 
                            <br/>
                            <br/>
                            Nhưng mà chủ yếu là muốn chúc bạn yêu của anh luôn yêu anh như mọi khi, luôn lạc quan yêu đời và hoàn thành được những ước mơ cuộc đời của mình.
                            <br/>
                            <br/>
                            Anh yêu emm nhiều lắm!
                            <br></br>
                            <br></br>
                            Bạn iuu của emm
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishPhrase;
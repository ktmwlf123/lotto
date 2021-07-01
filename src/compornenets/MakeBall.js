const MakeBall = ({lottoNum}) => {
    let balls = lottoNum.balls.map((i, index) => {
        let css = setClass(i);
            return <div key={"wrap" + index} className="ballWrap"><div key={index} className={css}>{i === 0 ? "" : i}</div></div>
    })

    return(
        <>
            {balls}
            <div key="plus" className="ballWrap"><div className="plus">+</div></div>
            <div key={"wrap6"} className="ballWrap"><div key="6" className={setClass(lottoNum.bonus)}>{lottoNum.bonus === 0 ? "" : lottoNum.bonus}</div></div>
        </>
    )
}

const setClass = (num) => {
        if(num < 11){
            return "ball lotto1to10";
        } else if(num > 10 && num < 21) {
            return "ball lotto11to20";
        } else if(num > 20 && num < 31) {
            return "ball lotto21to30";
        } else if(num > 30 && num < 41) {
            return "ball lotto31to40";
        } else {
            return "ball lotto41to45";
        }
}

export default MakeBall;
const DrawNum = ({lottoNum, setLottoNumState}) => { // lottoNum = [0,0,0,0,0,0,0];
    const drawRandomNum = () => {
        const randomNumList = [];
        lottoNum.map(() => {
            let rNum = checkNum(randomNumList);

            console.log(1, rNum);
            randomNumList.push(rNum);
        });
    };

    const checkNum = (data) => {
        
        let randomNum = Math.floor(Math.random() * 44) + 1
        let overlapFlag = false;
        for(let i = 0; i < data.length; i++){
            if(data.indexOf(randomNum) !== -1) overlapFlag = true;
        }
        console.log(2, randomNum);
        if(overlapFlag){
            checkNum(data);
        } else {
            console.log(3, randomNum);
            return randomNum;
        };
    };

    return(
        <div className="btnWrap">
            <button className="drawNumBtn" onClick={drawRandomNum}>추첨</button>
        </div>
    );
}

export default DrawNum;

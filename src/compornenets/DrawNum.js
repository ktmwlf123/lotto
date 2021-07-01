const DrawNum = ({setLottoNumState}) => {

    const array7 = [0,0,0,0,0,0,0];

    const checkNum = (data) => {
        
        let randomNum = pickNum();
        for(let i = 0; i < data.length+1; i++){
            if(data.indexOf(randomNum) !== -1){
                i--;
                randomNum = pickNum();
            }else{
                return randomNum;
            }
            
        }
    };

    const pickNum = () => {
        return Math.floor(Math.random() * 44) + 1
    }

    const drawRandomNum = () => {
        const randomNumList = [];

        array7.forEach(() => {
            let rNum = checkNum(randomNumList);
            
            randomNumList.push(rNum);
        });
        const sliceArray = randomNumList.slice(0,6);

        sliceArray.sort(function(a, b) {
            return a - b;
          });
        
        setLottoNumState({balls: sliceArray, bonus:randomNumList[6]});
    };

    

    return(
        <div className="btnWrap">
            <button className="drawNumBtn" onClick={drawRandomNum}>추첨</button>
        </div>
    );
}

export default DrawNum;

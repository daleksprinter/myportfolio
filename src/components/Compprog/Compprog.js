import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import atcoder from '../../images/competitiveprogramming/atcoder.png'
import codeforces from '../../images/competitiveprogramming/codeforces.png'
import paizarank from '../../images/competitiveprogramming/paizaRank.png'


const AtCoder = () => {

    const atcoderrate = {
        color:'cyan',
    };
    return (
        <Paper className = 'elm'>

            <h4>AtCoder</h4>
            <p>最高レート : <span style = {atcoderrate}>1400</span></p>

            <img src = {atcoder} style = {{'width' : '100%'}}></img>

            <p>リンク</p>
            <a href = 'https://atcoder.jp/users/daleksprinter'>AtCoder</a><br></br>
            <a href = 'https://kenkoooo.com/atcoder/#/table/daleksprinter'>AtCoderProblems</a>

        </Paper>
    )
}

const Codeforces = () => {

    const codeforcesrate = {
        color: 'blue',
    };

    return(
        <Paper className = 'elm'>

            <h4>Codeforces</h4>
            <p>最高レート : <span style = {codeforcesrate}>1600</span></p>

            <img src = {codeforces} style = {{'width' : '100%'}}></img>

            <p>リンク</p>
            <a href = 'https://codeforces.com/profile/b1015120'>Codeforces</a><br></br>
            <a href = 'https://yang33-kassa.jp/Codeforces-Problems/?user=b1015120'>Codeforces Problems</a>
        </Paper>
    )
}

const Other = () => {

    const paiza = {
        width:'50%'
    };

    return(
        <Paper className = 'elm'>
            <h4>その他</h4>
            <div>未来大学競技プログラミングサークル FunCoder　所属</div>
            <div>Paiza Sランク</div>
            <img src = {paizarank} style = {paiza}></img><br />
            <a href = 'https://dalekspritner.hatenablog.com/'>競技プログラミング覚書ブログ</a>
        </Paper>
    )
}

class Compprog extends Component{

    render(){
        return(
            <div　className = 'item'>
                <AtCoder />
                <Codeforces />
                <Other />
            </div>
        )
    }
}

export default Compprog
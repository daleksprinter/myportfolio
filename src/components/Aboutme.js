import React, { Component } from 'react'

class Aboutme extends Component{

    render(){
        return(
            <div className = 'aboutme'>
                
                <div className = 'aboutMeTitle'>
                    <p>自己紹介</p>
                </div>
                
                <div className = 'aboutFundamental'>
                    <p>基本情報</p>
                    <ul>
                        <li>Name : 関根 遼</li>
                        <li>Gender : 男</li>
                        <li>Age : 22</li>
                        <li>From : 北海道</li>
                        <li>Condition : とても健康（やや運動不足）</li>
                        <li>Belongs : 公立はこだて未来大学大学院　情報アーキテクチャ領域</li>
                    </ul>
                </div>


            </div>


        )
    }
}

export default Aboutme
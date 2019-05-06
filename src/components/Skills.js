import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';

class Skills extends Component{

    render(){
        return(
            <div>
                <Paper className = 'skillsCertification'>
                    <p>資格等</p>
                    <ul>
                        <li>TOEIC 825点（2018年3月11日　取得）</li>
                        <li>普通自動車運転免許（2015年3月　取得)</li>
                    </ul>
                </Paper>
            </div>

        )
    }
}

export default Skills
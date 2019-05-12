import React, { Component } from 'react'
import { Paper } from '@material-ui/core';
import { Route, Link } from 'react-router-dom'

const WorkItem = ({title, to, img, description}) => {

    const workitem = {
        'height':'550px',
        'margin':'1%',
        'width':'48%',
        'float':'left',
    }

    const work_thumbnail = {
        'width' :'100%',
    }

    const workitemdesc = {
        'padding' : '2%',
    }

    return(
        <Paper style = {workitem}>
            <img src = {img} style = {work_thumbnail}></img>
            <div style = {workitemdesc}>
                <h3>{title}</h3>
                <div>{description}</div><br />
                <Link to = {to}>Detial</Link>
            </div>
        </Paper>
    )
}

export default WorkItem
import React, { Component } from 'react'
import { Paper } from '@material-ui/core';
import { Route, Link } from 'react-router-dom'

const WorkItem = ({title, to, img, description}) => {

    return(
        <Paper className = 'workitem'>
            <img src = {img} class = 'work_thumbnail'></img>
            <div className = 'workitemdesc'>
                <h3>{title}</h3>
                <div>{description}</div><br />
                <Link to = {to}>Detial</Link>
            </div>
        </Paper>
    )
}

export default WorkItem
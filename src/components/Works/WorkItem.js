import React, { Component } from 'react'
import { Paper } from '@material-ui/core';
import { Route, Link } from 'react-router-dom'

const WorkItem = ({title, to, img, description}) => {

    return(
        <Paper className = 'workitem'>
            <div>{title}</div>
            <img src = {img} class = 'work_thumbnail'></img>
            <div>{description}</div>
            <Link to = {to}>Detial</Link>
        </Paper>
    )
}

export default WorkItem
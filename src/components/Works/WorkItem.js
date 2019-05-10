import React, { Component } from 'react'
import { Paper } from '@material-ui/core';
import { Route, Link } from 'react-router-dom'

const WorkItem = ({title, to, description}) => {

    return(
        <Paper className = 'workitem'>
            <div>{title}</div>
            <div>{description}</div>
            <Link to = {to}>Detial</Link>
        </Paper>
    )
}

export default WorkItem
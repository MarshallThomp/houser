import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Wizard from './Components/Wizard/Wizard'

export default (
    <Switch>
        <Route exact path="/Wizard" component={Wizard} />
        <Route exact path="/" component={Dashboard} />
    </Switch>
)
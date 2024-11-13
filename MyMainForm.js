import React, { useState } from "react";
import BasicForm from "./BasicForms";
import { Link, Route, Routes} from "react-router-dom";
import ControlledInput from "./ControlledInput";
import UncontrolledInput from "./UncontrolledInput";
import TabbedForm from "./TabForm/TabbedForm";

const MyMainForms = () => {
       return (
        <div>
            <h1>React Forms App</h1>
            <nav>
                <ul>
                    <li><Link to="basic-form">Basic Form</Link></li>
                    <li><Link to="controlled-input">Controlled Input</Link></li>
                    <li><Link to="uncontrolled-input">UncontrolledInput Input</Link></li>
                    <li><Link to="tabbed-form">Tabbed Form</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="basic-form" element={<BasicForm />} />
                <Route path="controlled-input" element={<ControlledInput />} />
                <Route path="uncontrolled-input" element={<UncontrolledInput />} />
                <Route path="tabbed-form" element={<TabbedForm />} />
            </Routes>
        </div>
    );
};

export default MyMainForms;

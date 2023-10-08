import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class Mycomponent extends React.Component {
    state = {
        arrJob: [
            { id: '', job: '', salary: '', language: '' }
        ]
    }
    addNewJob = (job) => {
        console.log("haha", job);
        this.setState({
            arrJob: [...this.state.arrJob, job]
        })
    }
    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}

                />
                <ChildComponent
                    arrJob={this.state.arrJob}
                />

            </>
        )
    }
}
export default Mycomponent;
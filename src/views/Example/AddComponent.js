import React from "react";
class AddComponent extends React.Component {
    state = {
        job: '',
        salary: '',
        language: ''
    }
    handleJob = (event) => {
        this.setState(
            {
                job: event.target.value
            }
        )
    }
    handleSalary = (event) => {
        this.setState(
            {
                salary: event.target.value
            }
        )
    }
    handleLanguage = (event) => {
        this.setState(
            {
                language: event.target.value
            }
        )
    }
    handlClick = () => {
        // console.log(this.state);
        if (!this.state.job || !this.state.salary || !this.state.language) {
            alert('missing require');
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            job: this.state.job,
            salary: this.state.salary,
            language: this.state.language
        })
    }
    render() {
        return (
            <>
                <form>
                    <label>Job</label><br />
                    <input type="text" value={this.state.job} onChange={(event) => this.handleJob(event)}></input><br />
                    <label>Salary</label><br />
                    <input type="text" value={this.state.salary} onChange={(event) => this.handleSalary(event)}></input><br />
                    <label>Language</label><br />
                    <input type="text" value={this.state.language} onChange={(event) => this.handleLanguage(event)}></input><br />
                    <input type="button" value="Submit" onClick={() => this.handlClick()}></input>
                </form>
            </>
        )
    }
}
export default AddComponent;
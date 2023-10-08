import React from "react";
class ChildComponent extends React.Component {
    state = {
        showJob: true
    }
    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }
    render() {
        let { arrJob } = this.props;
        let { showJob } = this.state;
        return (
            <>
                {showJob === true ? <div><button onClick={() => this.handleShowHide()}>Show</button></div>
                    :
                    <>
                        <div className="show-job">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Job</th>
                                        <th>Salary</th>
                                        <th>Language</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {arrJob.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.job}</td>
                                            <td>{item.salary}</td>
                                            <td>{item.language}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>


                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}
// const ChildComponent = (props) => {
//     let { arrJob } = props;
//     return (
//         <>
//             <div>
//                 {
//                     arrJob.map((item) => {
//                         if (item.age > 23) {
//                             return (
//                                 <div>{item.name}</div>

//                             )
//                         }
//                         return null;
//                     })
//                 }
//             </div>
//         </>
//     )
// }
export default ChildComponent;
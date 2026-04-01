
import PropTypes from 'prop-types'


function DigitalProblem(props){
       
    return(
        <div className="student-1">
            <h2>This is react Project: {props.name}</h2>
            <h2>It Solve Internet problems: {props.problem}</h2>
            <p>It helps 300 People Internet Stable and Boost to : {props.boost}%</p>
            <h3>Do all Above Solution are Helpfull To man kind: {props.solution  === "Yes" ? "Yes" : "No"}</h3>
        </div>
    )
}


DigitalProblem.propTypes = {
    name: PropTypes.string,
    problem: PropTypes.string,
    boost: PropTypes.number,
    solution: PropTypes.string
}
export default DigitalProblem;
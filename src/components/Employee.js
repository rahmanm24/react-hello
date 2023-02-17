function Employee(props){
    return (
        <>
            <h2>Employee: {props.name}</h2>
            <p>Role: {props.role ? props.role : "No Roll"}</p>
        </>
    );
}

export default Employee;
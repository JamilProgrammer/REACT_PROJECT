import "./index.css";
function Demo(props){
    return(
        <div>
            <div className={props.css}>
            <img src={props.img} alt={props.alt} />
            <h1>{props.name}</h1>
            </div>
        </div>
    );
}
export default Demo;





{/* <Mujamil />
<Mujamil name="mujamil"/> */}
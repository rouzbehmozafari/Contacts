const Cast = (props) => {
    return ( 
        <div className="Cast">
            <img src={props.pic} alt="actor" />
            <span>{props.name}</span>
            <span>{props.popularity}</span>
        </div>
     );
}
 
export default Cast;
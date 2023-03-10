import "./Button.scss"




const Button = (props) => {
    return ( 

        <section className="button">
            <p>{props.buttonName} </p>
        </section>
     );
}
 
export default Button;
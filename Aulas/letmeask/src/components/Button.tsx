type ButtonProps = {
    
text?: number;

}
export function Button(props: ButtonProps){
    return(
        <button>{props.text || 'Default' }</button>
    )
}
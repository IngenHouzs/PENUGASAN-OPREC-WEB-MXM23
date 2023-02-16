

export default function Quote(props){

    const {author, content, tags} = props.quote;
    
    return (
        <div className='quote-box'>
            <h1>{author}</h1>
            <p>"{content}"</p>
        </div>
    )
}
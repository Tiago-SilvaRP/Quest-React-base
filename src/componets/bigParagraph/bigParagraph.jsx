import './bigParagraph.css'

const Paragraph = ({color='blue', textTransform='upperCase'}) => {
    return (
        <p className='text' style={{color, textTransform}}>Quest base do React até que foi tranquila😅.</p>
    )
}

export default Paragraph
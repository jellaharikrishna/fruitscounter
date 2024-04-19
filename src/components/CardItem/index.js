import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`item-card ${className}`}>
      <div className="title-card">
        <h1 className="title-heading">{title}</h1>
        <p className="title-paragraph">{description}</p>
      </div>
      <img src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem

import React from 'react'
import contactCardStyles from '../Contacts/ContactCard.module.css'

const ContactCard = (props) => {
  const { firstName, species, phone, gender, image } = props
  return (
    <div className={ contactCardStyles.contactCard }>
      <img src={image} className={contactCardStyles.image} alt="" />
      <div className="text">
        <p className={contactCardStyles.contactItem}>{firstName}</p>
        <p className={contactCardStyles.contactItem}>{species}</p>
        <p className={contactCardStyles.contactItem}>{phone}</p>
        <p className={contactCardStyles.contactItem}>{gender}</p>
      </div>
    </div>
  )
}
export default ContactCard;
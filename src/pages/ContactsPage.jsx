import styles from "../pages/styles.module.css"
import Contacts from "../components/Contacts/Contacts"

function ContactsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.contacts}>
        <h2>Contacts</h2>
        <Contacts />
      </div>
    </div>
  )
}

export default ContactsPage;
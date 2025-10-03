import styles from "./ProfileCard.module.css";

export default function ProfileCard() {
  return (
    <div className={styles.card}>
      <img src="https://picsum.photos/200" alt="Profile" />
      <h2>Your Name</h2>
      <p>Age: 19</p>
      <p>I am a BSIT student in Holy Cross of Davao College.</p>
    </div>
  );
}

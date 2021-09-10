import styles from "./newsCard.module.css";
import Link from "next/link";

const NewsCard = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.urlToImage} alt="article image" width="500" height="500" />
      <h3>{props.title}</h3>
      <p className={styles.description}>{props.description}</p>
      <Link href={props.url}><a><p className={styles.author}>- {props.author===null ? "Sources" : props.author}</p></a></Link>
    </div>
  );
}
 
export default NewsCard;
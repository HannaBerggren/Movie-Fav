import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Post = (props) => {
  const {
      id,
      owner,
      profile_id,
      profile_image,
      comments_count,
      likes_count,
      like_id,
      title,
      content,
      image,
      updated_at,
      postPage,
    } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && postPage && "..."}
          </div>
        </Media>
      </Card.Body>
    </Card>
  );
};

export default Post;
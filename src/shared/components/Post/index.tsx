import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './styles.module.css';

interface IAuthor {
  role: string;
  name: string;
  avatarUrl: string;
}

interface IContent {
  type: 'paragraph' | 'link';
  contentText: string;
  text?: string;
  to?: string;
}

interface IPostProps {
  author: IAuthor;
  content: IContent[];
  publishedAt: Date;
}

interface IComment {
  id: number;
  content: string;
}

export function Post({ author, content, publishedAt }: IPostProps) {
  const [comments, setComments] = useState<IComment[]>([
    { id: 1, content: 'Muito bom Devon, parabéns!! 👏👏' },
  ]);
  const [newComment, setNewComment] = useState('');

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('');
    setNewComment(event.target.value);
  };

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments((comments) => [
      ...comments,
      { id: comments[comments.length - 1].id + 1, content: newComment }, // programação declarativa
    ]);
    setNewComment('');
  }

  function deleteComment(id: number) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment.id !== id
    );

    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  const isNewCommentEmpty = newComment.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt="Foto profile usuário" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(({ to, type, contentText, text = '' }) => {
          const contentElement = {
            paragraph: <p key={contentText}>{contentText}</p>,
            link: (
              <p key={contentText}>
                {text}
                <a href={to}>{contentText}</a>
              </p>
            ),
          };
          return contentElement[type];
        })}
      </div>

      <form
        name="feedbacks"
        onSubmit={handleCreateNewComment}
        className={styles.commentForm}
      >
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          value={newComment}
          onChange={handleNewCommentChange}
          placeholder="Escreva um comentário..."
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            id={comment.id}
            key={comment.id}
            content={comment.content}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}

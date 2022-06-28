import { Header, Post, Sidebar } from "../../components";
import styles from "./styles.module.css";

const posts = [
  {
    id: 1,
    author: {
      role: "Web Developer @ Meta",
      name: "Anderson Nascimento",
      avatarUrl: "https://github.com/andersonnascimentoafsn.png",
    },
    content: [
      {
        type: "paragraph",
        contentText: "Fala pessoal 👋",
      },
      {
        type: "paragraph",
        contentText:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
      },
      {
        to: "#",
        type: "link",
        contentText: "devonlane.design",
      },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      role: "Web Developer @ Meta",
      name: "Anderson Nascimento",
      avatarUrl: "https://github.com/andersonnascimentoafsn.png",
    },
    content: [
      {
        type: "paragraph",
        contentText: "Fala pessoal 👋",
      },
      {
        type: "paragraph",
        contentText:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
      },
      {
        to: "#",
        type: "link",
        text: "Acesse e deixe seu feedback 👉 ",
        contentText: "devonlane.design",
      },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
];

export function Home() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              id={post.id}
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}

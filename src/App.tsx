import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, PostProps } from './components/Post';
import styles from './App.module.css';
import './global.css';

interface Post extends PostProps {
  id: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/macieljuniormax.png',
      name: 'Maciel Júnior',
      role: 'Junior Web Analyst',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. O nome do projeto é Animais Fantásticos 🙈',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
      {
        type: 'link',
        content: '#origamid',
      },
    ],
    publishedAt: new Date('2022-10-10 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fizno NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
      {
        type: 'link',
        content: '#rocketseat',
      },
    ],
    publishedAt: new Date('2022-11-12 19:19:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

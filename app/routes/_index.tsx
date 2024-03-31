import type { MetaFunction } from '@remix-run/node';

import bird from "../../public/asset/images/bird.png";

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Welcome to Remix</h1>
      <img src={bird} width={200} height={200} />
      <ul>
        <li>
          <a href="https://remix.run/tutorials/blog" rel="noreferrer" target="_blank">
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a href="https://remix.run/tutorials/jokes" rel="noreferrer" target="_blank">
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a href="https://remix.run/docs" rel="noreferrer" target="_blank">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}

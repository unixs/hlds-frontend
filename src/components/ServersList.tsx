"use client"

import {useId} from "react";
import {useServersList} from "@api/frontend/hooks";

function AliveBadge ({ alive }: { alive: boolean }) {
  return (<span aria-label={alive ? 'Online.' : 'Offline.'}>
    {alive ? '✅' : '❌'}
  </span>);
}

function ServersList() {
  const htmlId = useId();

  const { data: serversList, isLoading, error } = useServersList();

  return (<section aria-labelledby={htmlId}>
    <h2 id={htmlId}>Servers</h2>

    {isLoading && <p>Loading...</p>}
    {error && <p>Error: {error.message}</p>}

    {serversList && (<ul>
      {serversList.servers.map((server: any) => {
        return (<li key={server.name}>
          <AliveBadge alive={server.alive} />
          &nbsp;
          {server.name} - <code>127.0.0.1:27015</code>
        </li>);
      })}
    </ul>)}

  </section>);
}
export default ServersList;

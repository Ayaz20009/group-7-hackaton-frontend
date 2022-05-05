import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

// TODO: Add the GraphGL query for fetching all tasks.
const GetAllTasksQuery = gql`
  query GetAllTasksForProject($partition: String!) {
    tasks(query: { _partition: $partition }) {
      _id
      name
      status
    }
  }
`;

export function useAllTasksInProject(project) {
  // TODO: Use GetAllTasksQuery to fetch the tasks for the project every 1000ms
  const { data, loading, error, startPolling, stopPolling } = useQuery(
    GetAllTasksQuery,
    {
      variables: {
        partition: project.partition,
      },
    }
  );
  React.useEffect(() => {
    // check server for updates every 1000ms
    startPolling(1000);
    // stop polling server for data when component unmounts
    return () => stopPolling();
  }, [startPolling, stopPolling]);
  if (error) {
    throw new Error(`Failed to fetch tasks: ${error.message}`);
  }

  // If the query has finished, return the tasks from the result data
  // Otherwise, return an empty list
  const tasks = data?.tasks ?? [];
  return {
    tasks,
    loading,
  };
}

import { ApolloError, gql, useQuery } from '@apollo/client';
import { Event } from 'generated/graphql.types';

const GET_ALL_EVENTS = gql`
query GetAllEvents {
  getAllEvents {
		events {
		  _id
      title
      description
      date
      location
      organizer {
        _id
      }
    }
    count
  }
}

`;

type ResultType = {
  getAllEvents: {
    events: Event[];
    count: number;
  };
};

type UseGetAllEvents = () => {
  loading: boolean;
  error?: ApolloError;
  data: Event[];
  count: number;
};

const useGetAllEvents: UseGetAllEvents = () => {
  const { data, loading, error } = useQuery<ResultType>(GET_ALL_EVENTS);

  return {
    data: data?.getAllEvents.events || [],
    count: data?.getAllEvents.count || 0,
    loading,
    error,
  };
};

export default useGetAllEvents;
